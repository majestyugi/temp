import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Image } from './image';

@Injectable()
export class ImageService {
    private serviceUrl = 'api/image/images-response.txt'; //'/api/feeds/photos_public.gne';
    
    private format: string = 'json';

    constructor(private _http: Http) { }

    getImages(tags: string): Observable<Array<Image>> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('format', this.format);
        params.set('tags', tags);
        let options = new RequestOptions();
        return this._http.get(this.serviceUrl, options).map((response: Response) => <Array<Image>> response.json())
        //.do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    //TODO find a way to extract the data into correct json format and map the type
    private extractData(response: Response) {
        let body = response.text();
        return body && body.substring(15, body.length - 1) || '{}';
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}