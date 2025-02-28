const textTypes = {
	txt: {
		key: 'txt',
		label: 'TXT',
		extension: 'txt',
		type: 'text/plain'
	},
	html: {
		key: 'html',
		label: 'HTML',
		extension: 'html',
		type: 'text/html'
	},
	htm: {
		key: 'htm',
		label: 'HTM',
		extension: 'htm',
		type: 'text/html'
	},
	css: {
		key: 'css',
		label: 'CSS',
		extension: 'css',
		type: 'text/css '
	},
	js: {
		key: 'js',
		label: 'JS',
		extension: 'js',
		type: 'text/javascript '
	},
	markdown: {
		key: 'markdown',
		label: 'MARKDOWN',
		extension: 'md',
		type: 'text/markdown '
	},
	xml: {
		key: 'xml',
		label: 'XML',
		extension: 'md',
		type: 'text/xml '
	},
	csv: {
		key: 'csv',
		label: 'CSV',
		extension: 'csv',
		type: 'text/csv '
	}
};

const imageTypes = {
	png: {
		key: 'png',
		label: 'PNG',
		extension: 'png',
		type: 'image/png'
	},
	jpg: {
		key: 'jpg',
		label: 'JPG',
		extension: 'jpg',
		type: 'image/jpg'
	},
	jpeg: {
		key: 'jpeg',
		label: 'JPEG',
		extension: 'jpeg',
		type: 'image/jpeg'
	},
	webP: {
		key: 'webp',
		label: 'WEBP',
		extension: 'webp',
		type: 'image/webp'
	},
	gif: {
		key: 'gif',
		label: 'GIF',
		extension: 'gif',
		type: 'image/gif'
	},
	bmp: {
		key: 'bmp',
		label: 'BMP',
		extension: 'bmp',
		type: 'image/bmp'
	},
	tiff: {
		key: 'tiff',
		label: 'TIFF',
		extension: 'tiff',
		type: 'image/tiff'
	},
	svg: {
		key: 'svg',
		name: 'SVG',
		extension: 'svg',
		type: 'image/svg'
	},
	icon: {
		key: 'icon',
		name: 'ICO',
		extension: 'ico',
		type: 'image/x-icon'
	}
};

const videoTypes = {
	mp4: {
		key: 'mp4',
		label: 'MP4',
		extension: 'mp4',
		type: 'video/mp4'
	},
	webm: {
		key: 'webm',
		label: 'WEBM',
		extension: 'webm',
		type: 'video/webm'
	},
	ogv: {
		key: 'ogv',
		label: 'OGV',
		extension: 'ogv',
		type: 'video/ogg'
	},
	avi: {
		key: 'avi',
		label: 'AVI',
		extension: 'avi',
		type: 'video/x-msvideo'
	},
	flv: {
		key: 'flv',
		label: 'FLV',
		extension: 'flv',
		type: 'video/x-flv'
	}
};

const audioTypes = {
	mp4: {
		key: 'mp4',
		label: 'MP4',
		extension: 'mp4',
		type: 'audio/mpeg'
	},
	oga: {
		key: 'oga',
		label: 'OGA',
		extension: 'oga',
		type: 'audio/ogg'
	},
	ogg: {
		key: 'ogg',
		label: 'OGG',
		extension: 'ogg',
		type: 'audio/ogg'
	},
	wav: {
		key: 'wav',
		label: 'WAV',
		extension: 'wav',
		type: 'audio/wav'
	},
	webpA: {
		key: 'webpA',
		label: 'WEBA',
		extension: 'weba',
		type: 'audio/webm'
	}
};

const applicationTypes = {
	json: {
		key: 'json',
		label: 'JSON',
		extension: 'json',
		type: 'application/json'
	},
	oga: {
		key: 'xml',
		label: 'XML',
		extension: 'xml',
		type: 'application/xml'
	},
	pdf: {
		key: 'pdf',
		label: 'PDF',
		extension: 'pdf',
		type: 'application/pdf'
	},
	zip: {
		key: 'zip',
		label: 'ZIP',
		extension: 'zip',
		type: 'application/zip'
	},
	tar: {
		key: 'tar',
		label: 'TAR',
		extension: 'tar',
		type: 'application/x-tar'
	},
	gz: {
		key: 'gz',
		label: 'GZ',
		extension: 'gz',
		type: 'application/x-gz'
	},
	doc: {
		key: 'doc',
		label: 'DOC',
		extension: 'doc',
		type: 'application/msword'
	},
	docx: {
		key: 'docx',
		label: 'DOCX',
		extension: 'docx',
		type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	},
	xls: {
		key: 'xls',
		label: 'XLS',
		extension: 'xls',
		type: 'application/vnd.ms-excel'
	},
	xlsx: {
		key: 'xlsx',
		label: 'XLSX',
		extension: 'xlsx',
		type: 'application/vnd.ms-powerpoint'
	},
	ppt: {
		key: 'ppt',
		label: 'PPT',
		extension: 'ppt',
		type: 'application/vnd.ms-powerpoint'
	},
	pptx: {
		key: 'pptx',
		label: 'PPTX',
		extension: 'pptx',
		type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
	}
};

const statuses = {
	finished: {
		name: 'finished',
		label: 'Kết thúc',
		color: 'success'
	},
	loading: {
		name: 'loading',
		label: 'Đang tải',
		color: 'warning'
	},
	inProgress: {
		name: 'inProgress',
		label: 'Đang thực hiện',
		color: 'warning'
	},
	ready: {
		name: 'ready',
		label: 'Sẵn sàng',
		color: 'processing'
	},
	removed: {
		name: 'removed',
		label: 'Đã xóa',
		color: 'error'
	}
};

export const enums = {
	imageTypes,
	videoTypes,
	audioTypes,
	applicationTypes,
	statuses
};
