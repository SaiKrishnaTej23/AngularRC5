import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    IsAuthentic:boolean;
    constructor() { }

    CheckAuth(){
        this.IsAuthentic = true;
    }

}