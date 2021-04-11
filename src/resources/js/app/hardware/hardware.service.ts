import {
    Injectable
} from '@angular/core';
import {
    forkJoin
} from "rxjs";
import {
    finalize,
    map
} from 'rxjs/internal/operators';
import {
    APP_ROUTES
} from '@app/common/appsettings/appsettings';
import {
    System
} from '@app/system/system.model';
import {
    User
} from '@app/user/user.model';
import {
    Hardware
} from './hardware.model';
import { 
    GeneralService 
} from '@app/common/services/general.service';

@Injectable({
    providedIn: 'root',
})
export class HardwareService extends GeneralService {
    get(): any {
        this.loaderService.visible();
        return forkJoin(
                this.http.get < any[] > (APP_ROUTES.HARDWARE),
                this.http.get < System[] > (APP_ROUTES.SYSTEM),
                this.http.get < User[] > (APP_ROUTES.USER))
            .pipe(map((response: [any, any, any]) => {
                return [
                    response[0].result.map((hardware: any) => this.mapHardware(hardware)),
                    response[1].result.map((system: System) => new System(system)),
                    response[2].result.map((user: User) => new User(user))
                ]
            }))
            .pipe(finalize(() => { this.loaderService.invisible(); }));
    }

    destroy(hardware: Hardware): any {
        return this.delete(APP_ROUTES.HARDWARE, hardware.id);
    }

    update(hardware: Hardware): any {
        return this.put(APP_ROUTES.HARDWARE, hardware.id, hardware.getModelData());
    }

    store(hardware: Hardware): any {
        return this.post(APP_ROUTES.HARDWARE, hardware.getModelData())
           .pipe(map((response: Response) => { return this.mapHardware(response['result']); }));
    }

    mapHardware(hardware: any): Hardware {
        hardware.system_id = hardware.system ? hardware.system.system_id : null;
        hardware.user_id = hardware.user ? hardware.user.user_id : null;
        return new Hardware(hardware);
    }
}
