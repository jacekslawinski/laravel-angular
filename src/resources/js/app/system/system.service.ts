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
    System
} from './system.model';
import { 
    GeneralService 
} from '@app/common/services/general.service';

@Injectable({
    providedIn: 'root',
})
export class SystemService extends GeneralService {
    list(): any {
        return this.get(APP_ROUTES.SYSTEM)
            .pipe(map((response: Response) => {
                return response['result'].map((data: any) => (new System(data)));
            }));
    }

    destroy(system: System): any {
        return this.delete(APP_ROUTES.SYSTEM, system.id);
    }

    update(system: System): any {
        return this.put(APP_ROUTES.SYSTEM, system.id, system.getModelData());
    }

    store(system: System): any {
        return this.post(APP_ROUTES.SYSTEM, system.getModelData())
           .pipe(map((response: Response) => { return new System(response['result']); }));
    }
}
