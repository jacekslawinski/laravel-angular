import moment from "moment";

export abstract class BaseModel {
    constructor(model ? : {}) {
        this.fillModelFromData(model ? model : {});
    }

    abstract fillModelFromData(_model: {}): {};

    protected setFieldValue(value: any, entry: any) {
        return (undefined === value) ? entry : value;
    }

    protected setDateValue(value: any, entry: any) {
        return (undefined === value) ? entry : moment(value);
    }
    
    public getModelData(): object {
        return Object.assign({}, this);
    }
}
