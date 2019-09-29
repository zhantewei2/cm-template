export class BadException extends Error{
    private msg:string;
    constructor(msg:string){
        super();
        this.msg=msg;
    }
    public getMsg():string{
        return this.msg;
    }
}