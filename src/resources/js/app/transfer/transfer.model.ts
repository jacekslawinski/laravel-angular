import {
    BaseModel
} from "@app/common/model/basemodel";

export class Transfer extends BaseModel {
    public id: number;
    public user_id: number;
    public hardware_id: number;
    public hardware_name: string;
    public type: number;
    public date: any;
    public remarks: string;

    constructor(
        model ? : {}
    ) {
        super(model);
    }

    public fillModelFromData(model: object): Transfer {
        this.id = this.setFieldValue(model['id'], 0);
        this.user_id = this.setFieldValue(model['user_id'], 0);
        this.hardware_id = this.setFieldValue(model['hardware_id'], 0);
        this.hardware_name = this.setFieldValue(model['hardware_name'], '');
        this.type = this.setFieldValue(model['type'], 0);
        this.date = this.setDateValue(model['date'], '');
        this.remarks = this.setFieldValue(model['remarks'], '');
        return this;
    }

    public getModelData(): object {
        return {
            id: this.id,
            user_id: this.user_id,
            hardware_id: this.hardware_id,
            hardware_name: this.hardware_name,
            type: this.type,
            date: this.date.format('YYYY-MM-DD'),
            remarks: this.remarks,
        };
    }
}
