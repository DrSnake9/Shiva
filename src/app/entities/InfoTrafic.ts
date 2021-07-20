import { Metro } from "./Metro";
import { Rer } from "./Rer";
import { Tramway } from "./Tramway";

export interface InfoTrafic {
    metros: Metro[];
    rers: Rer[];
    tramways: Tramway[];
  
}