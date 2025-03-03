export interface IFileTypes {
    [key: string]: IFileType;
}
export interface IFileType {
    key: string;
    label: string;
    extension: string;
    type: string;
}
export interface IStatus {
    key: string;
    label: string;
    color: string;
}
export interface IStatuses {
    [key: string]: IStatus;
}
export interface IGender {
    key: string;
    label: string;
    id: number;
}
export interface IGenders {
    [key: string]: IGender;
}
export interface IContentPosition {
    key: string;
    label: string;
}
export interface IContentPositions {
    [key: string]: IContentPosition;
}
export declare const enums: {
    textTypes: {
        txt: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        html: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        htm: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        css: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        js: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        md: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        xml: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        csv: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
    };
    imageTypes: {
        png: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        jpg: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        jpeg: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        webp: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        gif: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        bmp: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        tiff: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        svg: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        ico: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
    };
    videoTypes: {
        mp4: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        webm: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        ogv: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        avi: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        flv: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
    };
    audioTypes: {
        mp4: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        oga: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        ogg: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        wav: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        weba: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
    };
    applicationTypes: {
        json: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        oga: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        pdf: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        zip: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        tar: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        gz: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        doc: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        docx: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        xls: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        xlsx: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        ppt: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
        pptx: {
            key: string;
            label: string;
            extension: string;
            type: string;
        };
    };
    statuses: {
        finished: {
            key: string;
            label: string;
            color: string;
        };
        loading: {
            key: string;
            label: string;
            color: string;
        };
        inProgress: {
            key: string;
            label: string;
            color: string;
        };
        ready: {
            key: string;
            label: string;
            color: string;
        };
        removed: {
            key: string;
            label: string;
            color: string;
        };
    };
    genders: {
        male: {
            key: string;
            label: string;
            id: number;
        };
        female: {
            key: string;
            label: string;
            id: number;
        };
        other: {
            key: string;
            label: string;
            id: number;
        };
    };
    contentPositions: {
        top: {
            key: string;
            label: string;
        };
        bottom: {
            key: string;
            label: string;
        };
        left: {
            label: string;
            key: string;
        };
        right: {
            key: string;
            label: string;
        };
    };
};
