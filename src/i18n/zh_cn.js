// 注释：更新到3.3b2dev 调整部分已翻译词语 2021-3-30
// 注释：https://github.com/ningjiazun
export default {
	language: '简体中文',
	'$vuetify': {
		badge: '标记',
		close: '关闭',
		dataIterator: {
			noResultsText: '没有找到匹配的记录',
			loadingText: '正在载入项目……',
		},
		dataTable: {
			itemsPerPageText: '每页行数：',
			ariaLabel: {
				sortDescending: '降序排列',
				sortAscending: '升序排列',
				sortNone: '没有排序',
				activateNone: '激活以删除排序。',
				activateDescending: '激活以降序排列。',
				activateAscending: '激活以升序排序。',
			},
			sortBy: '排序方式',
		},
		dataFooter: {
			itemsPerPageText: '每页项目：',
			itemsPerPageAll: '全部',
			nextPage: '下一页',
			prevPage: '上一页',
			firstPage: '第一页',
			lastPage: '最后一页',
			pageText: '第{0}-{1}条，共{2}条',
		},
		datePicker: {
			itemsSelected: '已选择{0}',
		},
		noDataText: '没有可用数据',
		carousel: {
			prev: '上一张',
			next: '下一张',
			ariaLabel: {
				delimiter: '轮播图片：第{0}张，共{1}张',
			},
		},
		calendar: {
			moreEvents: '还有{0}个',
		},
		fileInput: {
			counter: '{0}个文件',
			counterSize: '{0}个文件，（总计{1}）',
		},
		timePicker: {
			am: '上午',
			pm: '下午',
		},
	},
	button: {
		add: {
			caption: '添加'
		},
		connect: {
			connect: '连接',
			connecting: '正在连接...',
			disconnect: '断开连接',
			disconnecting: '正在断开连接...'
		},
		emergencyStop: {
			caption: '紧急停止',
			title: '立即执行软件重启(M112+M999)'
		},
		home: {
			caption: '归位{0}轴',
			captionAll: '全部归位',
			title: '归位{0}轴（G28 {0}）',
			titleAll: '归位所有轴（G28）'
		},
		newDirectory: {
			caption: '新建目录'
		},
		newFilament: {
			caption: '新建细丝'
		},
		newFile: {
			caption: '新建文件'
		},
		refresh: {
			caption: '刷新'
		},
		reset: {
			caption: '重启机器',
			title: '发送代码M999重启机器'
		},
		upload: {
			gcodes: {
				caption: '上传G-Code文件',
				title: '上传一个或多个G-Code文件（支持拖放）'
			},
			start: {
				caption: '上传并开始',
				title: '上传和开始一个或多个G-Code文件（支持拖放）'
			},
			firmware: {// 注释：dev3.3b2更新
				caption: '上传固件文件',
				title: '上传和开始一个或多个固件文件（支持拖放）'
			},
			macros: {
				caption: '上传宏文件',
				title: '上传一个或多个宏文件（支持拖放）'
			},
			filaments: {
				caption: '上传细丝配置',
				title: '上传一个或多个细丝配置（支持拖放）'
			},
			menu: {
				caption: '上传菜单文件',
				title: '上传一个或多个菜单文件（支持拖放）'
			},
			system: {
				caption: '上传系统文件',
				title: '上传一个或多个系统文件（支持拖放）'
			},
			web: {
				caption: '上传Web文件',
				title: '上传一个或多个Web文件（支持拖放）'
			},
			update: {
				caption: '上传更新',
				title: '上传更新包（支持拖放）'
			}
		}
	},
	chart: {
		layer: {
			caption: '层图表',
			layerTime: '层时间',

			showLastLayers: '显示最近{0}层',
			showAllLayers: '显示所有层',

			layer: '层{0}',
			layerDuration: '持续时间：{0}',
			layerHeight: '层高度：{0}',
			filamentUsage: '细丝用量：{0}',
			fractionPrinted: '文件进度：{0}'
		},
		temperature: {
			caption: '温度图表',
			heater: '加热器{0}',
			sensor: '传感器 {0}',// 注释：dev3.3更新
			noData: '没有数据'
		}
	},
	dialog: {
		changeMoveStep: {
			title: '改变移动距离',
			prompt: '请为点击的移动按钮输入新值：'
		},
		configUpdated: {
			title: '重启主板？',
			prompt: '您是否要重新启动主板，并应用更新后的配置？'
		},
		connect: {
			title: '连接到机器',
			prompt: '请输入您要连接的机器的主机名和密码：',
			hostPlaceholder: '主机名',
			hostRequired: '主机名是必需的',
			passwordPlaceholderOptional: '密码（可选）',
			passwordPlaceholder: '密码',
			passwordRequired: '密码是必需的',
			connect: '连接'
		},
		connection: {
			connecting: '正在连接...',
			disconnecting: '正在断开连接...',
			updating: '正在安装更新，请稍候...',
			reconnecting: '连接丢失，尝试重新连接...',
			standBy: '请等待...'
		},
		editExtrusionAmount: {
			title: '编辑挤出机进给长度',
			prompt: '请为点击的按钮输入新的进给长度：'
		},
		editExtrusionFeedrate: {
			title: '编辑挤出机进给速度',
			prompt: '请为点击的按钮输入新的进给速度：'
		},
		factoryReset: {
			title: '恢复出厂设置？',
			prompt: '您确定要执行恢复出厂设置吗？ 所有保存的设置都将丢失。'
		},
		filament: {
			titleChange: '改变细丝',
			titleLoad: '载入细丝',
			prompt: '请选择细丝：',
			noFilaments: '没有可用细丝'
		},
		fileEdit: {
			gcodeReference: 'G-Code参考',
			menuReference: '菜单参考',
			save: '保存',
			confirmClose: '文件已修改。如果继续，您的修改将丢失。'
		},
		fileTransfer: {// 注释：dev3.3更新
			uploadingTitle: '正在上传文件第{0}个，共{1}个，已完成{2}%',
			uploadDoneTitle: '上传已完成！',
			uploadFailedTitle: '上传失败！',
			downloadingTitle: '正在下载文件第{0}个，共{1}个，已完成{2}%',
			downloadDoneTitle: '下载完成',
			downloadFailedTitle: '下载失败！',
			filename: '文件名',
			size: '大小',
			progress: '进度',
			currentSpeed: '当前速度： {0}',
			cancelUploads: '取消上传',
			cancelDownloads: '取消下载'
		},
		meshEdit: {
			title: '设置网格参数',
			radius: '探测半径',
			spacing: '间距',
			startCoordinate: '从{0}方向开始坐标',
			endCoordinate: '从{0}方向结束坐标',
			spacingDirection: '{0}方向上间距'
		},
		newDirectory: {
			title: '新建目录',
			prompt: '请输入新建目录的名称：'
		},
		newFilament: {
			title: '新建细丝',
			prompt: '请输入新建细丝的名称：'
		},
		newFile: {
			title: '新建文件',
			prompt: '请输入新建文件的名称：'
		},
		pluginInstallation: {//注释：3.3 b2dev更新
			installation: '插件安装向导',
			prompt: '将安装以下插件：',
			by: '作者：{0}',
			license: '许可证：{0}',
			homepage: '主页:',
			contents: '该软件包提供了用于',
			dsf: 'Duet Software Framework',
			dwc: 'Duet Web Control',
			rrf: 'RepRapFirmware',
			prerequisites: '依赖',
			version: '版本{0}',
			noPluginSupport: '不允许第三方插件',
			rootSupport: '支持超级用户插件',
			invalidManifest: '无效插件清单',
			permissions: '需要权限',
			dwcWarning: '该插件包含Web界面的组件。 无法在浏览器会话中强制执行权限检查，因此它可能会操纵您的系统并造成安全隐患，可能会导致物理损坏。',
			rootWarning: '此插件需要超级用户权限，这意味着它可以重新配置连接的单板机（例如：树莓派）并安装潜在的恶意软件。 这可能会导致设置的物理损坏。',
			sbcPermissions: '在单板机上运行的插件想要',
			noSpecialPermissions: '该插件不需要任何特殊权限。',
			ready: '准备安装',
			readyMessage: '这个插件即将准备安装，执行最后一步操作之前，请确认您信任插件作者。',
			readyDisclaimer: '在继续之前，您必须接受Duet3D公司对由于安装此第三方插件而造成的潜在损坏不承担任何责任。',
			checkboxDisclaimer: '我接受风险，请安装此插件',
			progress: '安装进度',
			progressText: '正在安装插件，请等待...',
			installationSuccess: '安装完成！',
			installationFailed: '安装失败！',
			cancel: '取消',
			back: '上一步',
			next: '下一步',
			finish: '结束'
		},
		renameFile: {
			title: '重命名文件或者目录',
			prompt: '请输入一个新的名称：'
		},
		resetHeaterFault: {
			title: '重置加热器故障',
			prompt: '加热器{0}发生加热器故障。强烈建议立即关闭机器并在继续之前检查接线。 如果您确认这不是硬件问题，您可以重置加热器故障，【自担风险】！请注意这是【不推荐】的，可能会导致进一步的问题。 你想怎样处理？',
			resetFault: '重置故障'
		},
		runMacro: {
			title: '运行{0}',
			prompt: '你想要运行宏{0}吗？'
		},
		startJob: {
			title: '开始{0}',
			prompt: '你想要开始任务{0}吗？'
		},
		update: {
			title: '安装更新？',
			prompt: '您已上传至少一个固件更新。你想现在安装吗？',
			resetTitle: '要重置固件吗？',
			resetPrompt: '您刚刚安装了扩展板更新。是否要重新启动主控制器并恢复以前的配置？'
		},
		inputRequired: '请输入一个值',
		numberRequired: '请输入有效的数值'
	},
	directory: {
		menu: '菜单目录',
		filaments: '细丝目录',
		firmware: '固件目录',
		gcodes: 'G-Code目录',
		macros: '宏目录',
		system: '系统目录',
		web: 'WWW目录'
	},
	error: {
		notImplemented: '{0}没有实施',
		invalidPassword: '无效的密码！',
		noFreeSession: '没有更多的空闲会话！',
		connect: '无法连接到{0}',
		disconnect: '无法与{0}彻底断开连接',
		disconnected: '无法完成操作，因为连接已终止',
		cancelled: '操作已取消',
		network: '网络错误',
		timeout: 'HTTP请求超时',
		driveUnmounted: '驱动器已卸载',
		directoryNotFound: '目录{0}不存在',
		fileNotFound: '文件{0}不存在',
		invalidHeightmap: '无效高度图',
		operationFailed: '操作失败（原因：{0}）',
		uploadStartWrongFileCount: '只能上传和启动单个文件',
		uploadNoSingleZIP: '一次只能上传一个ZIP文件',
		uploadNoFiles: '此ZIP不包含任何可用文件',
		codeResponse: '无法运行代码，因为收到了错误的响应',
		codeBuffer: '可以运行代码，因为缓冲区空间已用完',
		enterValidNumber: '请输入有效的数值',
		turnOffEverythingFailed: '无法关闭所有内容',
		filelistRequestFailed: '无法获取文件列表',
		fileinfoRequestFailed: '无法获取文件{0}的信息',
		filamentsLoadFailed: '无法加载细丝',
		move: '从{0}移动到{1}失败'
	},
	events: {
		connected: '已连接到{0}',
		connectionLost: '无法保持与{0}的连接',
		emergencyStop: '紧急停止，试图重新连接......',
		reconnecting: '连接中断，尝试重新连接...',
		reconnected: '连接已建立',
		disconnected: '与{0}断开连接'
	},
	generic: {
		ok: '确定',
		cancel: '取消',
		yes: '是',
		no: '否',
		close: '关闭',
		reset: '重置',
		noValue: '没有',
		loading: '正在载入',
		error: '错误',
		info: '信息',
		warning: '警告',
		success: '成功',
		heaterStates: {
			off: '关闭',
			standby: '待机',
			active: '工作',
			fault: '故障',
			tuning: '正在调谐',
			offline: '离线'
		},
		status: {
			starting: '正在启动',// 注释：dev 3.3更新
			updating: '正在更新',
			off: '关闭',
			halted: '已停止',
			pausing: '正在暂停',
			paused: '已暂停',
			resuming: '正在恢复',
			printing: '正在打印',
			processing: '正在处理',
			simulating: '正在模拟',
			busy: '忙',
			changingTool: '改变工具',
			idle: '空闲',
			unknown: '未知'
		},
		rpm: '转速',
		sdCard: 'SD卡{0}',
		mounted: '已装载',
		notMounted: '没有装载',
		extracting: '正在提取',
		uploading: '正在上传',
		active: '工作温度',
		standby: '待机温度'
	},
	input: {
		code: {
			send: '发送',
			placeholder: '发送代码...'
		},
		addTemperature: '新的温度值',
		addRPM: '新的预设值'
	},
	jobProgress: {
		simulating: '正在模拟{0}，已完成{1}',
		simulated: '已模拟{0}，已完成100%',
		processing: '正在处理{0}，已完成{1}',
		processed: '已处理{0}，已完成100% ',
		printing: '正在打印{0}，已完成{1}',
		printed: '已打印{0}，已完成100%',
		noJob: '没有任务在运行。',
		layer: '第{0}层，共{1}层',
		filament: '细丝用量{0}',
		filamentRemaining: '剩余{0}'
	},
	list: {
		baseFileList: {
			fileName: '文件名',
			size: '大小',
			lastModified: '最后修改',
			download: '下载文件',
			edit: '编辑文件',
			rename: '重命名',
			delete: '删除',
			downloadZIP: '下载为ZIP',
			noFiles: '没有文件或者目录',
			driveUnmounted: '驱动器未装载',
			goUp: '转到顶部'
		},
		menu: {
			noFiles: '没有文件可显示'
		},
		eventLog: {
			date: '日期',
			type: '类型',
			message: '事件',
			noEvents: '没有事件',
			clear: '清空',
			downloadText: '下载为文本文件',
			downloadCSV: '下载为CSV格式'
		},
		filament: {
			noFilaments: '没有细丝'
		},
		firmware: {//注释： 3.3b2dev更新
			installFile: '安装固件文件',
			noFiles: '没有固件文件'
		},
		macro: {
			caption: '宏',
			noMacros: '没有宏文件',
			run: '运行宏',
			root: '根目录'
		},
		jobs: {
			height: '对象高度',
			layerHeight: '层高度',
			filament: '细丝用量',
			printTime: '打印时间',
			simulatedTime: '模拟时间',
			generatedBy: '生成软件',
			noJobs: '没有任务',
			start: '开始任务文件',

			simulate: '模拟文件'
		},
		system: {
			noFiles: '没有系统文件',
			configToolNote: '使用配置工具编辑'
		}
	},
	menu: {
		control: {
			caption: '机器控制',
			dashboard: '仪表板',
			console: '控制台'
		},
		job: {
			caption: '当前任务',
			status: '状态',
			webcam: '摄像头'
		},
		files: {
			caption: '文件管理',
			jobs: '任务',
			filaments: '细丝',
			macros: '宏',
			menu: '显示',
			system: '系统',
			web: '网页'
		},
		plugins: {
			caption: '插件'
		},
		settings: {
			caption: '设置',
			general: '常规',
			machine: '机器特性'
		}
	},
	notification: {
		compress: {
			title: '正在压缩文件...',
			message: '你的文件已经开始压缩，请等待...',
			errorTitle: '压缩文件失败'
		},
		decompress: {// 注释：dev 3.3更新
			title: '正在解压缩文件...',
			message: '文件已经开始解压缩，请等待...',
			errorTitle: '解压缩文件失败'
		},
		delete: {
			errorTitle: '删除{0}失败',
			errorMessageDirectory: '请确保此目录为空',
			success: '已成功删除{0}',
			successMultiple: '已成功删除{0}个项目'
		},
		deleteFilament: {
			errorTitle: '删除细丝失败',
			errorStillLoaded: '仍然装载至少一根选定的细丝。 请在继续之前卸载它',
			errorSubDirectories: '细丝{0}包含子目录。 请手动删除它们，然后重试。'
		},
		download: {
			title: '正在下载{0} @ {1},已完成{2}%',
			message: '文件已经开始下载，请等待...',
			success: '已成功下载{0}，总计{1}',
			error: '下载{0}失败'
		},
		message: '消息',
		mount: {
			successTitle: 'SD卡已装载',
			errorTitle: '装载SD卡失败'
		},
		newDirectory: {
			errorTitle: '创建目录失败',
			successTitle: '目录已创建',
			successMessage: '创建目录{0}已完成'
		},
		newFilament: {
			errorTitle: '创建细丝失败',
			errorTitleMacros: '创建细丝宏失败',
			successTitle: '细丝已创建',
			successMessage: '创建细丝{0}已成功'
		},
		plugins: {//注释：3.3b2dev更新
			started: '插件已启动',
			startError: '插件启动失败',
			stopped: '插件已停用',
			stopError: '插件停用失败',
			uninstalled: '插件已经卸载',
			uninstallError: '插件卸载失败'
		},
		rename: {
			success: '成功重命名{0}为{1}',
			error: '重命名{0}为{1}失败',
		},
		renameFilament: {
			errorTitle: '重命名细丝失败',
			errorStillLoaded: '选定的细丝已装载。请在继续之前卸载它'
		},
		responseTooLong: '响应时间过长，请查看控制台',
		upload: {
			title: '正在上传{0} @ {1}, 已完成{2}%',
			message: '文件已经开始上传，请等待...',
			success: '已成功上传{0}，总计{1}',
			error: '上传{0}失败'
		}
	},
	panel: {
		atx: {
			caption: 'ATX电源',
			on: '开',
			off: '关'
		},
		babystepping: {
			caption: 'Z轴微步调整',
			current: '当前偏移: {0}'
		},
		extrude: {
			caption: '挤出控制',
			mix: '混合',
			mixRatio: '混合比例：',
			amount: '进给长度{0}:',
			feedrate: '进给速度{0}:',
			retract: '回抽',
			extrude: '挤出'
		},
		extrusionFactors: {
			caption: '挤出系数',
			changeVisibility: '改变可见性',
			extruder: '挤出机{0}',
			noExtruders: '没有挤出机'
		},
		fan: {
			caption: '风扇控制',
			selection: '风扇选择：',
			toolFan: '工具风扇',
			fan: '风扇{0}'
		},
		fans: {
			caption: '风扇',
			changeVisibility: '改变可见性',
			toolFan: '工具风扇',
			fan: '风扇{0}',
			noFans: '没有风扇'
		},
		jobControl: {
			caption: '任务控制',
			cancelJob: '取消任务',
			cancelPrint: '取消打印',
			cancelSimulation: '取消模拟',
			pauseJob: '暂停任务',
			pausePrint: '暂停打印',
			pauseSimulation: '暂停模拟',
			resumeJob: '恢复任务',
			resumePrint: '恢复打印',
			resumeSimulation: '恢复模拟',
			repeatJob: '重新开始',
			repeatPrint: '重新打印',
			repeatSimulation: '重新模拟',
			autoSleep: '启用自动休眠'
		},
		jobData: {
			caption: '采集数据',
			warmUpDuration: '加热持续时间',
			currentLayerTime: '当前层时间',
			lastLayerTime: '最近层时间',
			jobDuration: '任务持续时间'
		},
		jobEstimations: {
			caption: '估算',
			filament: '细丝用量',
			file: '文件进度',
			layer: '层时间',
			slicer: '切片',
			simulation: '模拟'
		},
		jobInfo: {
			caption: '任务信息',
			height: '高度:',
			layerHeight: '层高:',
			filament: '细丝用量:',
			generatedBy: '生成软件:'
		},
		movement: {
			caption: '机器运动',
			compensation: '补偿和校准',
			runBed: '真正的床铺平整(G32)',
			runDelta: 'Delta校准(G32)',
			compensationInUse: '使用补偿: {0}',
			disableBedCompensation: '禁用床补偿(M561)',
			disableMeshCompensation: '禁用网格补偿(G29 S2)',
			editMesh: '定义网格补偿区域(M557)',
			runMesh: '运行网格补偿(G29)',
			loadMesh: '从SD卡加载已保存的高度图(G29 S1)',
			axesNotHomed: '以下轴未归位：|以下轴未归位：',
			noAxes: '没有轴'
		},
		settingsAbout: {
			caption: '关于',
			developedBy: 'Web界面开发：',
			for: ' 适用于：',
			licensedUnder: '中文翻译：宁甲尊  许可条款：'
		},
		settingsAppearance: {
			caption: '外观',
			darkTheme: '黑色主题',
			language: '语言',
			binaryFileSizes: '使用二进制文件大小',
			binaryFileSizesTitle: '文件大小以1024（IEC）而不是1000（SI）为基准显示',
			disableAutoComplete: '禁用自动完成',
			disableAutoCompleteTitle: '输入代码或温度时不显示自动完成列表'
		},
		settingsCommunication: {
			caption: '通讯',
			pingInterval: '空闲时的PING间隔（ms）',
			updateDelay: '更新延迟(ms)',
			ajaxRetries: '最大AJAX重试次数',
			updateInterval: '更新间隔（{0}）',
			extendedUpdateEvery: '扩展状态更新间隔',
			fileTransferRetryThreshold: '文件传输的重试阈值（{0}）',
			crcUploads: '使用CRC32校验和进行上传',
			unavailable: '没有可用的设置'
		},
		settingsElectronics: {
			caption: '电子器件',
			diagnostics: '诊断',
			board: '主板：{0}',
			firmware: '固件：{0} ({1})',
			dwsFirmware: 'Duet WiFi Server版本：{0}',
			updateNote: '注意：您可以在“系统”页面上安装更新。'
		},
		settingsEndstops: {
			caption: '限位开关',
			index: '序号',
			triggered: '触发'
		},
		settingsGeneral: {
			caption: '常规',
			factoryReset: '恢复出厂默认设置',
			settingsStorageLocal: '将设置保存在本地存储中',
			settingsSaveDelay: '设置更改的更新延迟（{0}）',
			cacheStorageLocal: '将缓存保存在本地存储中',
			cacheSaveDelay: '缓存更改的更新延迟（{0}）'
		},
		settingsListItems: {
			caption: '列表项目',
			toolTemperatures: '工具温度',
			bedTemperatures: '热床温度',
			chamberTemperatures: '加热室温度',
			spindleRPM: '主轴转速'
		},
		settingsMachine: {
			caption: '机器特性',
			babystepAmount: 'Z轴微步调整的距离（{0}）',
			moveFeedrate: '移动按钮的运行速度（{0}）'
		},
		settingsNotifications: {
			caption: '通知',
			notificationErrorsPersistent: '不要自动关闭错误消息',
			notificationTimeout: '默认通知超时（{0}）'
		},
		settingsWebcam: {
			caption: '网络摄像头',
			webcamURL: '网络摄像头网址（可选）',
			webcamUpdateInterval: '网络摄像头更新间隔（{0}）',
			webcamLiveURL: '点击网络摄像头图像时打开的网址（可选）',
			webcamFix: '重新加载图像时，请勿附加HTTP限定符',
			webcamEmbedded: '在内联框架中嵌入网络摄像头图像',
			webcamRotation: '旋转网络摄像头图像',
			webcamFlip: '翻转网络摄像头图像',
			flipNone: '没有',
			flipX: '翻转X',
			flipY: '翻转Y',
			flipBoth: '翻转两者'
		},
		speedFactor: {
			caption: '速度系数'
		},
		status: {
			caption: '状态',
			mode: '模式：{0}',
			toolPosition: '工具位置',
			machinePosition: '机器位置',
			extruders: '挤出机',
			extruderDrive: '驱动器{0}',
			speeds: '速度',
			requestedSpeed: '请求速度',
			topSpeed: '最高速度',
			sensors: '传感器',
			mcuTemp: 'MCU温度',
			minMax: '最小值：{0}，最大值：{1}',
			vIn: '输入电压',
			v12: 'V12',
			fanRPM: '风扇转速',
			probe: 'Z轴探针|Z轴探针',
			noStatus: '没有状态'
		},
		tools: {// 注释：3.3b2dev更新部分内容
			caption: '工具',
			controlHeaters: '控制加热器',
			turnEverythingOff: '关闭所有',
			setActiveTemperatures: '设置目标温度',
			setStandbyTemperatures: '设置待机温度',
			setToolTemperatures: '设置工具温度',
			setBedTemperatures: '设置热床温度',
			setChamberTemperatures: '设置加热室温度',
			tool: '工具{0}',
			loadFilament: '载入细丝',
			changeFilament: '更改细丝',
			unloadFilament: '卸载细丝',
			heater: '加热器{0}',
			current: '当前温度',
			active: '工作温度',
			standby: '待机温度',
			bed: '热床{0}',
			chamber: '加热室{0}',
			extra: {
				caption: '其它',
				sensor: '传感器',
				sensorIndex: '传感器 {0}',
				value: '值',
				showInChart: '在图表中显示',
				noItems: '没有其它加热器'
			},
			noTools: '没有工具'
		},
		webcam: {
			caption: '网络摄像头监控',
			alt: '(网络摄像头图像)'
		}
	},
	pluginPermissions: {// 注释：3.3b2dev更新
		commandExecution: '执行通用DSF命令（例如：G/M/T-code代码）',
		codeInterceptionRead: '拦截G/M/T-code代码',
		codeInterceptionReadWrite: '拦截G/M/T-code代码并对其进行操作',
		managePlugins: '安装，加载，停用和卸载第三方插件',
		manageUserSessions: '管理用户会话',
		objectModelRead: '从对象模型中读取',
		objectModelReadWrite: '读取和写入对象模型',
		registerHttpEndpoints: '创建新的HTTP端点',
		readFilaments: '从细丝目录中读取文件',
		writeFilaments: '将文件写入细丝目录',
		readFirmware: '从固件目录读取文件',
		writeFirmware: '将文件写入固件目录',
		readGCodes: '从G-code目录中读取文件',
		writeGCodes: '将文件写入G-code目录',
		readMacros: '从宏目录中读取文件',
		writeMacros: '将文件写入宏目录',
		readMenu: '从菜单目录中读取文件',
		writeMenu: '将文件写入菜单目录',
		readSystem: '从系统目录读取文件',
		writeSystem: '将文件写入系统目录',
		readWeb: '从Web目录读取文件',
		writeWeb: '将文件写入Web目录',
		fileSystemAccess: '访问虚拟SD目录之外的文件',
		launchProcesses: '启动新进程',
		networkAccess: '通过网络通讯',
		superUser: '以root用户身份运行（潜在危险）'
	},
	plugins: {// 注释：dev 3.3更新
		autoUpdate: {
			menuCaption: '更新'
		},
		gcodeViewer: {
			caption: 'G-Code预览器',
			view3D: '预览3D模型',
			fullscreen: '全屏',
			showConfiguration: '显示预览器配置',
			resetCamera: {
				caption: '重置视图',
				title: '重置视图到初始位置'
			},
			cancelLoad: '取消文件载入',
			reloadView: {
				caption: '重新加载预览',
				title: '重新载入当前G-Code文件，当更改模型颜色、进给率颜色等设置时，需要重新加载当前G-Code文件。'
			},
			loadCurrentJob: {
				caption: '载入当前任务',
				title: '载入当前正在打印或者正在模拟的任务'
			},
			unloadGCode: {
				caption: '卸载G-Code文件',
				title: '从预览器移除已加载的G-Code文件'
			},
			loadLocalGCode: {
				caption: '载入本地G-Code文件',
				title: '从本地驱动器载入一个文件到预览器'
			},
			showCursor: '显示光标',
			showTravels: '显示路径',
			renderQuality: {
				caption: '渲染质量',
				title: '调整预览器的可视化质量。等级越高，可用的顶点和渲染模式越多。'
			},
			sbc: '单板机',
			low: '低',
			medium: '中',
			high: '高',
			ultra: '超高',
			max: '最高',
			forceLineRendering: '强制线性渲染',
			transparency: '透明度',
			showSolid: '显示实心',
			spreadLines: '展开线条',
			extruders: {
				caption: '挤出机',
				title: '设置挤出机渲染颜色'
			},
			tool: '工具{0}',
			resetColor: '重置工具颜色|重置工具颜色',
			renderMode: {
				caption: '渲染模式|渲染模式',
				title: '渲染模式允许您在预览器中设置挤出机颜色或进给率线颜色。'
			},
			color: '颜色',
			feedrate: '进给速度',
			minFeedrate: '最小进给速度（mm/s）',
			maxFeedrate: '最大进给速度（mm/s）',
			minFeedrateColor: '最小进给速度颜色',
			maxFeedrateColor: '最大进给速度颜色',
			progress: {
				caption: '进度',
				title: '设置已打印部分颜色以追踪打印进度'
			},
			topClipping: '顶部剪裁',
			bottomClipping: '底部剪裁',
			progressColor: '进度颜色',
			liveZTracking: '实时Z追踪',
			settings: '设置',
			background: '背景',
			bedRenderMode: '热床渲染模式',
			bed: '热床',
			volume: '体积',
			showAxes: '显示轴',
			showObjectLabels: '显示对象标签',
			cameraInertia: '视图惯性',
			showObjectSelection: {
				caption: '显示对象选择',
				title: '如果可以在当前打印中检测到对象则启用'
			},
			renderFailed: '上一次渲染失败，将渲染质量设置为单板机（SBC）。',
		},
		heightmap: {
			menuCaption: '高度图',
			listTitle: '高度图',
			none: '没有',
			scale: '比例：',
			orMore: '更大',
			orLess: '更小',
			axes: '轴：',
			notAvailable: '高度图不可用',
			statistics: '统计',
			numPoints: '探测点数：{0}',
			radius: '探测半径：{0}',
			area: '探测面积：{0}',
			maxDeviations: '最大偏差：{0}/{1}',
			meanError: '平均误差：{0}',
			rmsError: '均方根差：{0}',
			display: '显示',
			colorScheme: '配色方案：',
			terrain: '地形',
			heat: '热力',
			invertZ: '翻转Z轴坐标',
			topView: '顶视图',
		},
		objectModelBrowser: {
			menuCaption: '对象模型'
		}
	},
	tabs: {
		generalSettings: {
			caption: '常规'
		},
		machineSettings: {
			caption: '常规'
		},
		plugins: {//注释：3.3b2dev更新
			generalCaption: '内置插件',
			machineCaption: '第三方插件',
			headers: {
				name: '名称',
				author: '作者',
				version: '版本',
				license: '授权',
				dependencies: '依赖',
				status: '状态'
			},
			optional: '可选的',
			start: '启动',
			partiallyStarted: '部分已启动',
			started: '已启动',
			stop: '停止',
			deactivated: '已停用',
			stopped: '已停止',
			uninstall: '卸载',
			noPlugins: '没有插件',
			refreshNote: '某些DWC插件卸载完成后需要刷新页面'
		}
	}
}
