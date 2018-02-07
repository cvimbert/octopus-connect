/**
 * Created by Christophe on 10/10/2017.
 */
import {LocalStorageConfiguration} from "./data-interfaces/local-storage/local-storage-configuration.interface";
import {ExternalInterface} from "./data-interfaces/abstract-external-interface.class";
import {EndpointConfig} from "./endpoint-config.interface";
import {HttpConfiguration} from "./data-interfaces/http/http-configuration.interface";

export interface DataConnectorConfig {
    defaultInterface:string;
    configuration: {
        localstorage?:LocalStorageConfiguration,
        http?:HttpConfiguration
    };
    declarations?:any;
    map?:{[key:string]:string|EndpointConfig};
    cached?:string[];

    // ici déclaration des structures octopusModel
    structures?:{[key:string]:string};
    interfaces?:{[key:string]:ExternalInterface}
}