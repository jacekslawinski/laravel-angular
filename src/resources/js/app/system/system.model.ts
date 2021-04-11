import {
    BaseModel
} from "@app/common/model/basemodel";

export class System extends BaseModel {
    public id: number;
    public name: string;

    constructor(
        model ? : {}
    ) {
        super(model);
    }

    public fillModelFromData(model: object): System {
        this.id = this.setFieldValue(model['id'], 0);
        this.name = this.setFieldValue(model['name'], '');
        return this;
    }
}
