"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var cloudinary_service_1 = require('./cloudinary.service');
var PhotoAlbum = (function () {
    function PhotoAlbum(http, cloudinary) {
        this.http = http;
        this.cloudinary = cloudinary;
    }
    PhotoAlbum.prototype.get = function (id) {
        // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
        // and simply retrieve a list of all images with that tag.
        var url = this.cloudinary.getInstance().url('myphotoalbum', { format: 'json', type: 'list' })
            + "?" + Math.ceil(new Date().getTime() / 1000);
        return this.http
            .get(url)
            .map(function (res) { return res.json().resources; });
    };
    PhotoAlbum = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cloudinary_service_1.Cloudinary])
    ], PhotoAlbum);
    return PhotoAlbum;
}());
exports.PhotoAlbum = PhotoAlbum;
//# sourceMappingURL=photo-album.service.js.map