import fs from "fs";


export const writeJson = (path: string, json: string) => {
    fs.writeFile(path, json, 'utf8', (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log('\x1b[32m%s\x1b[0m', `JSON file has been saved. File path is ${path}\n`);
        }
    });
}

export const readJson = async (path: string) => {
    try {
        const data = await fs.promises.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
        throw e;
    }
};