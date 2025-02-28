"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const imageValidTypes = 'image/webp,image/jpeg,image/png,image/svg+xml,image/gif,image/bmp,image/tiff';
const imageValidTypesPattern = /^image\/(webp|jpeg|jpg|png|svg|gif|bmp|tiff)$/;
exports.configs = {
    imageValidTypes,
    imageValidTypesPattern
};
