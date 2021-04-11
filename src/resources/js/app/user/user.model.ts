import {
    BaseModel
} from "@app/common/model/basemodel";

export class User extends BaseModel {
    public id: number;
    public firstname: string;
    public lastname: string;
    public email: string;
    public hardware_id: number;

    constructor(
        model ? : {}
    ) {
        super(model);
    }

    public fillModelFromData(model: object): User {
        this.id = this.setFieldValue(model['id'], 0);
        this.firstname = this.setFieldValue(model['firstname'], '');
        this.lastname = this.setFieldValue(model['lastname'], '');
        this.email = this.setFieldValue(model['email'], '');
        this.hardware_id = this.setFieldValue(model['hardware_id'], null);
        return this;
    }
    
    public getFullname(): string
    {
        return `${this.firstname} ${this.lastname}`;
    }
}
