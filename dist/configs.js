"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const imageValidTypes = 'image/webp,image/jpeg,image/png,image/svg+xml,image/gif,image/bmp,image/tiff';
const imageValidTypesPattern = /^image\/(webp|jpeg|jpg|png|svg|gif|bmp|tiff)$/;
const dateFormats = {
    vnDate: 'DD/MM/YYYY',
    date: 'YYYY-MM-DD'
};
exports.configs = {
    dateFormats,
    imageValidTypes,
    imageValidTypesPattern
};
