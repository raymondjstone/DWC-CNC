'use strict'

import Vue from 'vue'

import {
	InputChannelName,
	LogLevel,
	MachineMode,
	MoveShapingType,
	KinematicsName,
	StatusType,
	isPrinting
} from './modelEnums.js'
import {
	Axis,
	Board,
	Extruder,
	Fan,
	Heater,
	InputChannel,
	Kinematics, CoreKinematics, DeltaKinematics, HangprinterKinematics, ScaraKinematics,
	ParsedFileInfo,
	Probe,
	Tool,
	fixMachineItems
} from './modelItems.js'

import Path from '../../utils/path.js'
import { patch, quickPatch } from '../../utils/patch.js'

// Internal object model as provided by RepRapFirmware and DSF
// This must be kept in sync for things to work properly...
export class MachineModel {
	constructor(initData) { quickPatch(this, initData); }

	boards = []
	directories = {
		filaments: Path.filaments,
		firmware: Path.system,
		gCodes: Path.gCodes,
		macros: Path.macros,
		menu: Path.menu,
		scans: Path.scans,
		system: Path.system,
		web: Path.web
	}
	fans = []
	global = {}
	heat = {
		bedHeaters: [],
		chamberHeaters: [],
		coldExtrudeTemperature: 160,
		coldRetractTemperature: 90,
		heaters: []
	}
	httpEndpoints = []							// *** missing in RRF (only applicable for Duet 3 in SBC mode)
	inputs = [
		new InputChannel({ name: InputChannelName.http }),
		new InputChannel({ name: InputChannelName.telnet }),
		new InputChannel({ name: InputChannelName.file }),
		new InputChannel({ name: InputChannelName.usb }),
		new InputChannel({ name: InputChannelName.aux }),
		new InputChannel({ name: InputChannelName.trigger }),
		new InputChannel({ name: InputChannelName.codeQueue }),
		new InputChannel({ name: InputChannelName.lcd }),
		new InputChannel({ name: InputChannelName.sbc }),
		new InputChannel({ name: InputChannelName.daemon }),
		new InputChannel({ name: InputChannelName.autoPause })
	]
	job = {
		build: null,
		duration: null,
		file: new ParsedFileInfo(),
		filePosition: null,
		lastDuration: null,
		lastFileName: null,
		lastFileAborted: false,					// *** missing in RRF
		lastFileCancelled: false,				// *** missing in RRF
		lastFileSimulated: false,				// *** missing in RRF
		layer: null,
		layerTime: null,
		layers: [],								// *** missing in RRF
		pauseDuration: null,
		rawExtrusion: null,
		timesLeft: {
			filament: null,
			file: null,
			layer: null,						// *** deprecated as of v3.3
			slicer: null
		},
		warmUpDuration: null
	}
	limits = {
		axes: null,
		axesPlusExtruders: null,
		bedHeaters: null,
		boards: null,
		chamberHeaters: null,
		drivers: null,
		driversPerAxis: null,
		extruders: null,
		extrudersPerTool: null,
		fans: null,
		gpInPorts: null,
		gpOutPorts: null,
		heaters: null,
		heatersPerTool: null,
		monitorsPerHeater: null,
		restorePoints: null,
		sensors: null,
		spindles: null,
		tools: null,
		trackedObjects: null,
		triggers: null,
		volumes: null,
		workplaces: null,
		zProbeProgramBytes: null,
		zProbes: null
	}
	messages = []								// *** never populated in DWC, only used to transfer generic messages from connectors to the model
	move = {
		axes: [],
		calibration: {
			final: {
				deviation: 0,
				mean: 0
			},
			initial: {
				deviation: 0,
				mean: 0
			},
			numFactors: 0
		},
		compensation: {
			fadeHeight: null,
			file: null,
			meshDeviation: null,
			probeGrid: {
				axes: ['X', 'Y'],
				maxs: [-1, -1],
				mins: [0, 0],
				spacings: [0, 0],
				radius: 0.0
			},
			skew: {
				compensateXY: true,
				tanXY: 0,
				tanXZ: 0,
				tanYZ: 0
			},
			type: 'none'			// *** no enum yet because RRF <= 2 supports 'n Point' compensation
		},
		currentMove: {
			acceleration: 0,
			deceleration: 0,
			laserPwm: null,
			requestedSpeed: 0,
			topSpeed: 0
		},
		extruders: [],
		idle: {
			factor: 0.3,
			timeout: 30.0
		},
		kinematics: new Kinematics(),
		queue: [],
		printingAcceleration: 10000,
		shaping: {
			damping: 0.2,
			frequency:40,
			minimumAcceleration:10,
			type: MoveShapingType.none
		},
		speedFactor: 1.0,
		travelAcceleration: 10000,
		virtualEPos: 0,
		workplaceNumber: 1
	}
	network = {
		corsSite: null,
		hostname: 'duet',
		interfaces: [],
		name: 'My Duet'
	}
	plugins = {}
	scanner = {
		progress: 0.0,
		status: 'D'
	}
	sensors = {
		analog: [],
		endstops: [],
		filamentMonitors: [],
		gpIn: [],
		probes: []
	}
	spindles = []
	state = {
		atxPower: null,
		beep: null,
		currentTool: -1,
		displayMessage: '',
		dsfVersion: null,						// *** missing in RRF
		dsfPluginSupport: true,					// *** missing in RRF
		dsfRootPluginSupport: false,			// *** missing in RRF
		gpOut: [],
		laserPwm: null,
		logFile: null,
		logLevel: LogLevel.off,
		messageBox: null,
		machineMode: MachineMode.CNC,
		msUpTime: 0,
		nextTool: -1,
		pluginsStarted: false,					// *** missing in RRF
		powerFailScript: '',
		previousTool: -1,
		restorePoints: [],
		status: null,
		time: null,
		upTime: -1
	}
	tools = []
	userSessions = []							// *** missing in RRF
	volumes = []
}

// Default machine model used to display initial values
export const DefaultMachineModel = new MachineModel({
	boards: [
		new Board()
	],
	fans: [
		new Fan({
			value: 0
		})
	],
	heat: {
		bedHeaters: [
			0
		],
		heaters: [
			new Heater(),
			new Heater(),
			new Heater()
		]
	},
	move: {
		axes: [
			new Axis({
				letter: 'X',
				drives: [0],
				homed: true,
				machinePosition: 0,
				userPosition: 0
			}),
			new Axis({
				letter: 'Y',
				drives: [1],
				homed: true,
				machinePosition: 0,
				userPosition: 0
			}),
			new Axis({
				letter: 'Z',
				drives: [2],
				homed: true,
				machinePosition: 0,
				userPosition: 0
			})
		],
		extruders: [
			new Extruder(),
			new Extruder()
		]
	},
	network: {
		name: 'Duet Web Control'
	},
	sensors: {
		probes: [
			new Probe()
		]
	},
	tools: [
		new Tool({
			number: 0,
			active: [0],
			standby: [0],
			heaters: [1],
			extruders: [0],
			spindle: -1,
			spindleRpm: 0,
		}),
		new Tool({
			number: 1,
			active: [0],
			standby: [0],
			heaters: [2],
			extruders: [1],
			spindle: -1,
			spindleRpm: 0,
		})
	]
})

// Vuex module wrapper around the machine model
export class MachineModelModule {
	constructor(connector) {
		if (connector) {
			this.state = new MachineModel({
				network: {
					hostname: connector.hostname,
					name: `(${connector.hostname})`
				}
			});
		} else {
			this.state = DefaultMachineModel;
		}
	}

	namespaced = true
	state = null
	getters = {
		currentTool(state) {
			if (state.state.currentTool >= 0) {
				return state.tools[state.state.currentTool];
			}
			return null;
		},
		fractionPrinted: state => (state.job.file.size > 0) ? (state.job.filePosition / state.job.file.size) : 0,
		maxHeaterTemperature(state) {
			let maxTemp
			state.heat.heaters.forEach(function(heater) {
				if (heater && (maxTemp === undefined || heater.max > maxTemp)) {
					maxTemp = heater.max;
				}
			});
			return maxTemp;
		},
		jobProgress(state, getters) {
			if (isPrinting(state.state.status)) {
				if (state.state.status !== StatusType.simulating) {
					let totalRawExtruded = state.move.extruders
						.map(extruder => extruder && extruder.rawPosition);
					totalRawExtruded = (totalRawExtruded.length === 0) ? 0 : totalRawExtruded.reduce((a, b) => a + b);
					if (state.state.status === StatusType.simulating && state.job.file.filament.length > 0 && totalRawExtruded > 0) {
						return Math.min(totalRawExtruded / state.job.file.filament.reduce((a, b) => a + b), 1);
					}
				}
				return getters.fractionPrinted;
			}
			return state.job.lastFileName ? 1 : 0;
		}
	}
	mutations = {
		update(state, payload) {
			// Fix kinematics type
			if (payload.move && payload.move.kinematics && payload.move.kinematics.name !== undefined && state.move.kinematics.name !== payload.move.kinematics.name) {
				switch (payload.move.kinematics.name) {
					case KinematicsName.cartesian:
					case KinematicsName.coreXY:
					case KinematicsName.coreXYU:
					case KinematicsName.coreXYUV:
					case KinematicsName.coreXZ:
					case KinematicsName.markForged:
						state.move.kinematics = new CoreKinematics();
						break;
					case KinematicsName.delta:
					case KinematicsName.rotaryDelta:
						state.move.kinematics = new DeltaKinematics();
						break;
					case KinematicsName.hangprinter:
						state.move.kinematics = new HangprinterKinematics();
						break;
					case KinematicsName.fiveBarScara:
					case KinematicsName.scara:
						state.move.kinematics = new ScaraKinematics();
						break;
					default:
						if (process.env.NODE_ENV !== 'production') {
							console.warn(`Using fallback kinematics because the requested one is unsupported: ${payload.move.kinematics.name}`);
						}
						state.move.kinematics = new Kinematics();
						break;
				}
			}

			// Update global variables
			if (payload.global) {
				for (let key in payload.global) {
					if (state.global[key]) {
						state.global[key] = payload.global[key];
					} else {
						Vue.set(state.global, key, payload.global[key]);
					}
				}
				delete payload.global;
			}

			// Update plugins
			if (payload.plugins !== undefined) {
				if (payload.plugins === null) {
					state.plugins = {};
				} else {
					for (let key in payload.plugins) {
						if (!payload.plugins[key]) {
							Vue.delete(state.plugins, key);
						} else if (!state.plugins[key]) {
							Vue.set(state.plugins, key, payload.plugins[key]);
						} else {
							patch(state.plugins[key], payload.plugins[key]);
						}
					}
				}
				delete payload.plugins;
			}

			// Apply new data
			patch(state, payload, true);
			fixMachineItems(state, payload);
		},

		addPlugin(state, plugin) {
			Vue.set(state.plugins, plugin.id, plugin);
		},
		removePlugin(state, plugin) {
			Vue.delete(state.plugins, plugin.id);
		}
	}
}

// Vuex wrapper around the default machine model
const DefaultMachineModelModule = new MachineModelModule(null)

export default function(connector) {
	return connector ? new MachineModelModule(connector) : DefaultMachineModelModule;
}
