export type ComponentSchema = {
    name: string;
    category: string;
    categorySection: string;
    fileName: string;
    dependencies?: string[];
    bentoDependencies?: string[];
    isOSS: boolean;
    moveFilesToFolder?: MoveFileToFolder[];
};
type MoveFileToFolder = {
    file: string;
    to: string;
};
export declare const componentsList: ComponentSchema[];
export {};
//# sourceMappingURL=components.d.ts.map