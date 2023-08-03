export  interface ConversionRules {
    [unit: string]: {
        [toUnit: string]: number;
    };
}

export interface IConvertDistance {
    unit: string;
    value: number
}
