"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var advertisement_1 = require("../../api/advertisement");
var advertisement_service_1 = require("../../services/advertisement.service");
var router_1 = require("@angular/router");
// import * as AWS from 'aws-sdk';
var CreateAdComponent = /** @class */ (function () {
    function CreateAdComponent(_advertisementService, _router) {
        this._advertisementService = _advertisementService;
        this._router = _router;
        this.userId = 1;
        this.newAd = new advertisement_1.Advertisement();
        this.acceptedMimeTypes = [
            'image/gif',
            'image/jpeg',
            'image/png'
        ];
        this.fileDataUri = '';
        this.errorMsg = '';
        this.hasImage = false;
    }
    CreateAdComponent.prototype.ngOnInit = function () { };
    CreateAdComponent.prototype.postAdvertisement = function () {
        var isValid;
        isValid = this.validate();
        if (isValid) {
            this.createAd();
            this.backToHomePage();
        }
    };
    CreateAdComponent.prototype.validate = function () {
        var isValid = true;
        var title;
        var category;
        var description;
        if (this.title == null || this.title.replace(/\s+/, "").length <= 0) {
            alert("Please enter a title");
            isValid = false;
        }
        else if (this.price == null) {
            alert("Please enter a price");
            isValid = false;
        }
        else if (this.category == null || this.category.replace(/\s+/, "").length <= 0) {
            alert("Please enter a category");
            isValid = false;
        }
        else if (this.description == null || this.description.replace(/\s+/, "").length <= 0) {
            alert("Please enter a description");
            isValid = false;
        }
        return isValid;
    }; //end validate
    CreateAdComponent.prototype.createAd = function () {
        var _this = this;
        // TODO: change so that we take userid from logged in user
        this.newAd.userId = 1;
        this.newAd.title = this.title;
        this.newAd.description = this.description;
        this.newAd.price = this.price;
        this.newAd.category = this.category;
        // TODO: Users should be able to upload multiple images.
        if (this.hasImage == true)
            this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/' + this.image.name; // reference to S3
        else
            this.newAd.imageUrl = 'https://s3.amazonaws.com/kyleteam6best/default.jpg';
        // To validate the new advertisement
        this._advertisementService.createAd(this.newAd).subscribe(function (res) { return _this.res = res; }, function (err) { return _this.error = err; });
    };
    CreateAdComponent.prototype.backToHomePage = function () {
        this._router.navigate([""]);
    };
    __decorate([
        core_1.ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], CreateAdComponent.prototype, "fileInput", void 0);
    CreateAdComponent = __decorate([
        core_1.Component({
            selector: "mobile-createAd",
            moduleId: module.id,
            templateUrl: "./create-ad.component.html",
            styleUrls: ['./create-ad.component.css']
        }),
        __metadata("design:paramtypes", [advertisement_service_1.AdvertisementService, router_1.Router])
    ], CreateAdComponent);
    return CreateAdComponent;
}());
exports.CreateAdComponent = CreateAdComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QseURBQXVEO0FBQ3ZELDhFQUE0RTtBQUM1RSwwQ0FBeUM7QUFDekMsa0NBQWtDO0FBUWxDO0lBMkJJLDJCQUFvQixxQkFBNEMsRUFBVSxPQUFlO1FBQXJFLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBekJ6RixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBTW5CLFVBQUssR0FBbUIsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFNNUMsc0JBQWlCLEdBQUc7WUFDcEIsV0FBVztZQUNYLFlBQVk7WUFDWixXQUFXO1NBQ1YsQ0FBQztRQUdKLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBSThFLENBQUM7SUFFOUYsb0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFJLE9BQU8sQ0FBQztRQUVaLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFMUIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNSLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFJLFdBQVcsQ0FBQztRQUVoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9B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QUFNO09BM0JoRixpQkFBaUIsQ0E2STdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdJRCxJQTZJQztBQTdJWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWR2ZXJ0aXNlbWVudCB9IGZyb20gXCIuLi8uLi9hcGkvYWR2ZXJ0aXNlbWVudFwiXHJcbmltcG9ydCB7IEFkdmVydGlzZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWR2ZXJ0aXNlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJtb2JpbGUtY3JlYXRlQWRcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1hZC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY3JlYXRlLWFkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHVzZXJJZDogbnVtYmVyID0gMTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjsgXHJcbiAgICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gICAgaW1hZ2VVcmw6IHN0cmluZztcclxuICAgIG5ld0FkIDogQWR2ZXJ0aXNlbWVudCA9IG5ldyBBZHZlcnRpc2VtZW50KCk7XHJcbiAgICByZXMgOiBhbnk7XHJcbiAgICBlcnJvcjogYW55O1xyXG5cclxuICAgIC8vIEFkZGluZyBwaWN0dXJlIHRvIFMzXHJcbiAgICBpbWFnZTsgICAgLy8gdGhpcyBpcyB0byBzdG9yZSB0aGUgY3VycmVudCBpbWFnZSBmaWxlLlxyXG4gICAgYWNjZXB0ZWRNaW1lVHlwZXMgPSBbIC8vIGN1cnJlbnRseSBhbGxvd2QgdHlwZXMgb2YgaW1hZ2VzXHJcbiAgICAnaW1hZ2UvZ2lmJyxcclxuICAgICdpbWFnZS9qcGVnJyxcclxuICAgICdpbWFnZS9wbmcnXHJcbiAgICBdO1xyXG5cclxuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBmaWxlSW5wdXQ6IGFueTtcclxuICBmaWxlRGF0YVVyaSA9ICcnO1xyXG4gIGVycm9yTXNnID0gJyc7XHJcbiAgaGFzSW1hZ2UgPSBmYWxzZTtcclxuXHJcbiAgdmFsaWRBZE1zZztcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkdmVydGlzZW1lbnRTZXJ2aWNlIDogQWR2ZXJ0aXNlbWVudFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIHBvc3RBZHZlcnRpc2VtZW50KCl7XHJcbiAgICAgICAgdmFyIGlzVmFsaWQ7XHJcbiAgICBcclxuICAgICAgICBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZSgpO1xyXG5cclxuICAgICAgICBpZihpc1ZhbGlkKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tUb0hvbWVQYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciB0aXRsZTtcclxuICAgICAgICB2YXIgY2F0ZWdvcnk7XHJcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBpZih0aGlzLnRpdGxlID09IG51bGwgfHwgdGhpcy50aXRsZS5yZXBsYWNlKC9cXHMrLywgXCJcIikubGVuZ3RoIDw9IDApeyBcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0aXRsZVwiKTtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMucHJpY2UgPT0gbnVsbCl7IFxyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHByaWNlXCIpO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jYXRlZ29yeSA9PSBudWxsIHx8IHRoaXMuY2F0ZWdvcnkucmVwbGFjZSgvXFxzKy8sIFwiXCIpLmxlbmd0aCA8PSAwKXsgXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmRlc2NyaXB0aW9uID09IG51bGwgfHwgdGhpcy5kZXNjcmlwdGlvbi5yZXBsYWNlKC9cXHMrLywgXCJcIikubGVuZ3RoIDw9IDApeyBcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH0vL2VuZCB2YWxpZGF0ZVxyXG5cclxuICAgIGNyZWF0ZUFkKCl7XHJcbiAgICAgICAgLy8gVE9ETzogY2hhbmdlIHNvIHRoYXQgd2UgdGFrZSB1c2VyaWQgZnJvbSBsb2dnZWQgaW4gdXNlclxyXG4gICAgICAgIHRoaXMubmV3QWQudXNlcklkID0gMTtcclxuICAgICAgICB0aGlzLm5ld0FkLnRpdGxlID0gdGhpcy50aXRsZTtcclxuICAgICAgICB0aGlzLm5ld0FkLmRlc2NyaXB0aW9uID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLm5ld0FkLnByaWNlID0gdGhpcy5wcmljZTtcclxuICAgICAgICB0aGlzLm5ld0FkLmNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUT0RPOiBVc2VycyBzaG91bGQgYmUgYWJsZSB0byB1cGxvYWQgbXVsdGlwbGUgaW1hZ2VzLlxyXG4gICAgICAgIGlmKCB0aGlzLmhhc0ltYWdlID09IHRydWUgKVxyXG4gICAgICAgICAgdGhpcy5uZXdBZC5pbWFnZVVybCA9ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20va3lsZXRlYW02YmVzdC8nICsgdGhpcy5pbWFnZS5uYW1lOyAvLyByZWZlcmVuY2UgdG8gUzNcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLm5ld0FkLmltYWdlVXJsID0gJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9reWxldGVhbTZiZXN0L2RlZmF1bHQuanBnJztcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRvIHZhbGlkYXRlIHRoZSBuZXcgYWR2ZXJ0aXNlbWVudFxyXG4gICAgICAgIHRoaXMuX2FkdmVydGlzZW1lbnRTZXJ2aWNlLmNyZWF0ZUFkKHRoaXMubmV3QWQpLnN1YnNjcmliZShcclxuICAgICAgICAgIHJlcyA9PiB0aGlzLnJlcyA9IHJlcyxcclxuICAgICAgICAgIGVyciA9PiB0aGlzLmVycm9yID0gZXJyLFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgYmFja1RvSG9tZVBhZ2UoKXtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiXCJdKTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vICAgdXBsb2FkRmlsZSgpIHtcclxuICAgIC8vICAgICBjb25zdCBBV1NTZXJ2aWNlID0gQVdTO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlZ2lvbiA9ICd1cy1lYXN0LTEnO1xyXG4gICAgLy8gICAgIGNvbnN0IGJ1Y2tldE5hbWUgPSAna3lsZXRlYW02YmVzdCc7XHJcbiAgICAvLyAgICAgY29uc3QgSWRlbnRpdHlQb29sSWQgPSAndXMtZWFzdC0xOjc2ZjRiNTdmLWIxYWEtNGQzYS05MjEyLWRjMmRkOTJlMTBhYSc7XHJcbiAgICAvLyAgICAgY29uc3QgZmlsZSA9IHRoaXMuaW1hZ2U7XHJcbiAgICAvLyAgIC8vQ29uZmlndXJlcyB0aGUgQVdTIHNlcnZpY2UgYW5kIGluaXRpYWwgYXV0aG9yaXphdGlvblxyXG4gICAgLy8gICAgIEFXU1NlcnZpY2UuY29uZmlnLnVwZGF0ZSh7XHJcbiAgICAvLyAgICAgICByZWdpb246IHJlZ2lvbixcclxuICAgIC8vICAgICAgIGNyZWRlbnRpYWxzOiBuZXcgQVdTU2VydmljZS5Db2duaXRvSWRlbnRpdHlDcmVkZW50aWFscyh7XHJcbiAgICAvLyAgICAgICAgIElkZW50aXR5UG9vbElkOiBJZGVudGl0eVBvb2xJZFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgLy9hZGRzIHRoZSBTMyBzZXJ2aWNlLCBtYWtlIHN1cmUgdGhlIGFwaSB2ZXJzaW9uIGFuZCBidWNrZXQgYXJlIGNvcnJlY3RcclxuICAgIC8vICAgICBjb25zdCBzMyA9IG5ldyBBV1NTZXJ2aWNlLlMzKHtcclxuICAgIC8vICAgICAgIGFwaVZlcnNpb246ICcyMDA2LTAzLTAxJyxcclxuICAgIC8vICAgICAgIHBhcmFtczogeyBCdWNrZXQ6IGJ1Y2tldE5hbWV9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgIC8vSSBzdG9yZSB0aGlzIGluIGEgdmFyaWFibGUgZm9yIHJldHJpZXZhbCBsYXRlclxyXG4gICAgLy8gICAgIHMzLnVwbG9hZCh7IEtleTogZmlsZS5uYW1lLCBCdWNrZXQ6IGJ1Y2tldE5hbWUsIEJvZHk6IGZpbGUsIEFDTDogJ3B1YmxpYy1yZWFkJ30sIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgIC8vICAgICAgaWYgKGVycikge1xyXG4gICAgLy8gICAgICAgIGNvbnNvbGUubG9nKGVyciwgJ3RoZXJlIHdhcyBhbiBlcnJvciB1cGxvYWRpbmcgeW91ciBmaWxlJyk7XHJcbiAgICAvLyAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy8gICB9XHJcbiAgICBcclxuICAgIC8vICAgcHJldmlld0ZpbGUoKSB7XHJcbiAgICAvLyAgICAgLy8gYWN0aXZhdGUgdGhlIHN1Ym1pdCBidXR0b25cclxuICAgIC8vICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlc1swXTtcclxuICAgIC8vICAgICB0aGlzLmltYWdlID0gZmlsZTtcclxuICAgIC8vICAgICBpZiAoZmlsZSAmJiB0aGlzLnZhbGlkYXRlRmlsZShmaWxlKSkge1xyXG4gICAgLy8gICAgICAgdGhpcy5oYXNJbWFnZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlc1swXSk7XHJcbiAgICAvLyAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGVEYXRhVXJpID0gcmVhZGVyLnJlc3VsdDtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICAgIHRoaXMuZXJyb3JNc2cgPSAnJztcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdGhpcy5lcnJvck1zZyA9ICdGaWxlIG11c3QgYmUganBnLCBwbmcsIG9yIGdpZiBhbmQgY2Fubm90IGJlIGV4Y2VlZCA1MDAgS0IgaW4gc2l6ZSc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICBcclxuICAgIC8vICAgdmFsaWRhdGVGaWxlKGZpbGUpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hY2NlcHRlZE1pbWVUeXBlcy5pbmNsdWRlcyhmaWxlLnR5cGUpICYmIGZpbGUuc2l6ZSA8IDUwMDAwMDA7XHJcbiAgICAvLyAgIH1cclxuXHJcbn1cclxuIl19