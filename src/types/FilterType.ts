export interface Filter {
    stat: string;
    operator: "=" | ">" | ">=" | "<" | "<=";
    value: number | string | null;
    condition: "AND" | "OR";
}