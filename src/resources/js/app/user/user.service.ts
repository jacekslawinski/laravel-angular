import {
    Injectable
} from '@angular/core';
import {
    map
} from 'rxjs/internal/operators';
import {
    APP_ROUTES
} from '@app/common/appsettings/appsettings';
import {
    User
} from './user.model';
import { 
    GeneralService 
} from '@app/common/services/general.service';

@Injectable({
    providedIn: 'root',
})
export class UserService extends GeneralService {
    list(): any {
        return this.get(APP_ROUTES.USER)
            .pipe(map((response: Response) => {
                return response['result'].map((data: any) => (new User(data)));
            }));
    }

    destroy(user: User): any {
        return this.delete(APP_ROUTES.USER, user.id);
    }

    update(user: User): any {
        return this.put(APP_ROUTES.USER, user.id, user.getModelData());
    }

    store(user: User): any {
        return this.post(APP_ROUTES.USER, user.getModelData())
           .pipe(map((response: Response) => { return new User(response['result']); }));
    }
}
