export interface RepositoryInterface {
    initRepository(): void;
    addToRepository(): boolean;
    removeFromRepository(): boolean;
}
export declare class Repository implements RepositoryInterface {
    constructor();
    private userPath;
    private repositoryHome;
    private repositoryLib;
    initRepository(): void;
    addToRepository(): boolean;
    removeFromRepository(): boolean;
}
