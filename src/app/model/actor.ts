import { film } from './film';

export class Actor {


    id?: number;
    firstname?: string;
    lastname?: string;

    image?: string;

    films ?: [film];
}