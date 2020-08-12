declare class Switch {
    cases: Array<boolean>;
    conditions: Array<any>;
    add(condition: boolean, callback: any): void;
    isValid(): any[];
}
declare const formChecker: Switch;
declare const value = "test";
