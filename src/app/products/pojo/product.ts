import { Assesst } from "./assesst";
import { Signal } from "./signal";

export class Product {
    id: number;
    name: string;
    description: string;
    productImage: string;
    assests: Array<Assesst>;
    signals: Array<Signal>;
    expanded: boolean;
}