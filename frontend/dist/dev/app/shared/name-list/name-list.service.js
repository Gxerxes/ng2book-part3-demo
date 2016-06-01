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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/from');
require('rxjs/add/operator/map');
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
        this.names = [];
    }
    NameListService.prototype.get = function () {
        var _this = this;
        if (this.names && this.names.length) {
            return Observable_1.Observable.from([this.names]);
        }
        if (!this.request) {
            this.request = this.http.get('/assets/data.json')
                .map(function (response) { return response.json(); })
                .map(function (data) {
                _this.request = null;
                return _this.names = data;
            });
        }
        return this.request;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    NameListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sMEJBQTBCLENBQUMsQ0FBQTtBQUNsQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFNL0I7SUFtQkUseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBYjlCLFVBQUssR0FBYSxFQUFFLENBQUM7SUFhWSxDQUFDO0lBT2xDLDZCQUFHLEdBQUg7UUFBQSxpQkFhQztRQVpDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7aUJBQzlDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUM1QyxHQUFHLENBQUMsVUFBQyxJQUFjO2dCQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFNRCw2QkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFoREg7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQWlEYixzQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksdUJBQWUsa0JBZ0QzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hbWVMaXN0U2VydmljZSB7XG5cbiAgLyoqXG4gICAqIFRoZSBhcnJheSBvZiBpbml0aWFsIG5hbWVzIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2aWNlLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBuYW1lczogc3RyaW5nW10gPSBbXTtcblxuICAvKipcbiAgICogQ29udGFpbnMgdGhlIGN1cnJlbnRseSBwZW5kaW5nIHJlcXVlc3QuXG4gICAqIEB0eXBlIHtPYnNlcnZhYmxlPHN0cmluZ1tdPn1cbiAgICovXG4gIHByaXZhdGUgcmVxdWVzdDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXG4gICAqIEBwYXJhbSB7SHR0cH0gaHR0cCAtIFRoZSBpbmplY3RlZCBIdHRwLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCBHRVQgcmVxdWVzdCBmb3IgdGhlIEpTT04gcmVzb3VyY2UuIElmIHRoZXJlIHdhcyBhIHByZXZpb3VzIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgKiAodGhlIGxvY2FsIG5hbWVzIGFycmF5IGlzIGRlZmluZWQgYW5kIGhhcyBlbGVtZW50cyksIHRoZSBjYWNoZWQgdmVyc2lvbiBpcyByZXR1cm5lZFxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXG4gICAqL1xuICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIGlmICh0aGlzLm5hbWVzICYmIHRoaXMubmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tKFt0aGlzLm5hbWVzXSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5yZXF1ZXN0KSB7XG4gICAgICB0aGlzLnJlcXVlc3QgPSB0aGlzLmh0dHAuZ2V0KCcvYXNzZXRzL2RhdGEuanNvbicpXG4gICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAubWFwKChkYXRhOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVxdWVzdCA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubmFtZXMgPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBnaXZlbiBuYW1lIHRvIHRoZSBhcnJheSBvZiBuYW1lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIG5hbWUgdG8gYWRkLlxuICAgKi9cbiAgYWRkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm5hbWVzLnB1c2godmFsdWUpO1xuICB9XG59XG5cbiJdfQ==
