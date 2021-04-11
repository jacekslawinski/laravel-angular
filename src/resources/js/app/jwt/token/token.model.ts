import {
    BaseModel
} from "@app/common/model/basemodel";

export class TokenModel extends BaseModel {
    public accessToken: string;
    public refreshToken: string;
    public email: string;

    constructor(
        model ? : {}
    ) {
        super(model);
    }

    public fillModelFromData(model: {}): TokenModel {
        this.accessToken = model['accessToken'] ? model['accessToken'] : '';
        this.refreshToken = model['refreshToken'] ? model['refreshToken'] : '';
        this.email = model['email'] ? model['email'] : '';
        return this;
    }
}
