import { v4 as uuidV4 } from 'uuid';

export abstract class Entity<T> {
    protected _id: string;

    protected props: T;

    get id() {
        return this._id;
    }

    constructor(props: T, id?: string) {
        this._id = id ?? uuidV4();
        this.props = props;
    }
}
