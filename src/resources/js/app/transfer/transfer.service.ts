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
    Transfer
} from './transfer.model';
import { 
    GeneralService 
} from '@app/common/services/general.service';

@Injectable({
    providedIn: 'root',
})
export class TransferService extends GeneralService {
    list(): any {
        return this.get(APP_ROUTES.TRANSFER)
            .pipe(map((response: Response) => {
                return response['result'].map((data: any) => (new Transfer(data)));
            }));
    }

    store(transfer: Transfer): any {
        return this.post(APP_ROUTES.TRANSFER, transfer.getModelData())
           .pipe(map((response: Response) => { return new Transfer(response['result']); }));
    }

    destroy(transfer: Transfer): any {
        return this.delete(APP_ROUTES.TRANSFER, transfer.id);
    }

    update(transfer: Transfer): any {
        return this.put(APP_ROUTES.TRANSFER, transfer.id, transfer.getModelData());
    }
}
