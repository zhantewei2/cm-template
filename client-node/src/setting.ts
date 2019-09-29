const winplatforms=["win32","win64","win"];

export const iswin:boolean=winplatforms.includes(process.platform);

export const REPOSITORY_NAME=".cm-template";