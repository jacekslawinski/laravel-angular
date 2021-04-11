import {
    BaseModel
} from '@app/common/model/basemodel';

export class Hardware extends BaseModel {
    public id: number;
    public name: string;
    public serial_number: string;
    public production_year: number;
    public system_id: number;
    public user_id: number;
    public system_name: string;
    public user_fullname: string;

    constructor(
        model ? : {}
    ) {
        super(model);
    }

    public fillModelFromData(model: object): Hardware {
        this.id = this.setFieldValue(model['id'], 0);
        this.name = this.setFieldValue(model['name'], '');
        this.serial_number = this.setFieldValue(model['serial_number'], '');
        this.production_year = this.setFieldValue(model['production_year'], 0);
        this.system_id = this.setFieldValue(model['system_id'], null);
        this.user_id = this.setFieldValue(model['user_id'], null);
        return this;
    }
}
