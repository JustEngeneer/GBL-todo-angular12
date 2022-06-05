
export class RegExpPatterns {
    private _emailRegExpPattern: RegExp;  
    private _passwRegExpPattern: RegExp;  

    constructor(){
        this._emailRegExpPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        this._passwRegExpPattern = /^[a-zA-Z0-9._-]{8,12}$/;
    }

    get emailPattern(): RegExp {
        return this._emailRegExpPattern;
    }
    get passwPattern(): RegExp {
        return this._passwRegExpPattern;
    }
} 
 
