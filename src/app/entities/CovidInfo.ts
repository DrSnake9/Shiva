export interface CovidInfo {
    code: string;
    date: Date;
    deces: number;
    gueris: number;
    hospitalises: number;
    nom: string;
    nouvellesHospitalisations: number;
    nouvellesReanimations: number;
    reanimation: number;
    source: any;
    sourceType: string;
}