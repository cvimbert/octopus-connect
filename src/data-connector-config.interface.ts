/**
 * Created by Christophe on 10/10/2017.
 */
import {LocalStorageConfiguration} from "./data-interfaces/local-storage/local-storage-configuration.interface";
import {ExternalInterface} from "./data-interfaces/abstract-external-interface.class";

export interface DataConnectorConfig {
    defaultInterface:string;
    configuration: {
        localstorage?:LocalStorageConfiguration
    };
    declarations?:any;
    map?:{[key:string]:string};
    cached?:string[];

    // ici déclaration des structures octopusModel
    structures?:{[key:string]:string};
    interfaces?:{[key:string]:ExternalInterface}
}