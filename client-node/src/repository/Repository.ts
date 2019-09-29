import {iswin,REPOSITORY_NAME} from "../setting";
import { BadException } from "../Exceptions/BadException";
import {perfectMkdir} from "@ztwx/cm-zip";
import Path from "path";


export interface RepositoryInterface{
    initRepository():void;
    addToRepository():boolean;
    removeFromRepository():boolean;
}



export class Repository implements RepositoryInterface{
    
    constructor(){}

    private userPath:string;
    private repositoryHome:string;
    private repositoryLib:string;

    initRepository():void{
        this.userPath=iswin?"/":process.env["HOME"];
        if(!this.userPath)throw new BadException("INIT Repository failure");
        this.repositoryHome=Path.resolve(this.userPath,REPOSITORY_NAME); 
        this.repositoryLib=Path.resolve(this.repositoryHome,'lib');
        perfectMkdir(this.repositoryHome);
        perfectMkdir(this.repositoryLib);
    }

    addToRepository():boolean{
        
        return true;
    }

    removeFromRepository():boolean{

        return true;
    }

}