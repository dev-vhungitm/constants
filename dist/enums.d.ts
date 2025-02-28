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
export declare const enums: {
    textTypes: IFileTypes;
    imageTypes: IFileTypes;
    videoTypes: IFileTypes;
    audioTypes: IFileTypes;
    applicationTypes: IFileTypes;
    statuses: IStatuses;
};
