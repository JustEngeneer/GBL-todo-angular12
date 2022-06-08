
export class RegExpPatterns {
    private readonly _emailRegExpPattern: RegExp;
    private readonly _pswRegExpPattern: RegExp;

    constructor(){
        this._emailRegExpPattern = /^[a-zA-Z\d._-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;
        this._pswRegExpPattern = /^[a-zA-Z\d._-]{8,12}$/;
    }

    get emailPattern(): RegExp {
        return this._emailRegExpPattern;
    }
    get pswPattern(): RegExp {
        return this._pswRegExpPattern;
    }
}

