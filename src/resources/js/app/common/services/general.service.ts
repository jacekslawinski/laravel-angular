import {
    HttpClient
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    finalize
} from 'rxjs/internal/operators';
import {
    LoaderService
} from '@app/common/loader/loader.service';

@Injectable({
    providedIn: 'root',
})
export class GeneralService {
    constructor(
        protected http: HttpClient,
        protected loaderService: LoaderService
    ) {}

    get(url: string): any {
        this.loaderService.visible();
        return this.http
            .get<any>(url)
            .pipe(finalize(() => { this.loaderService.invisible(); }));
    }

    delete(url: string, id: number): any {
        this.loaderService.visible();
        return this.http
            .delete(`${url}/${id}`)
            .pipe(finalize(() => { this.loaderService.invisible(); }));
    }

    put(url: string, id: number, data: object): any {
        this.loaderService.visible();
        return this.http
            .put(`${url}/${id}`, data)
            .pipe(finalize(() => { this.loaderService.invisible(); }));
    }

    post(url: string, data: object): any {
        this.loaderService.visible();
        return this.http
            .post<any>(url, data)
            .pipe(finalize(() => { this.loaderService.invisible(); }));
    }
}
