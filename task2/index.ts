import {readJson, writeJson} from "../json.handle";
import {processData} from "./rules";


const main = async (inputJSON: string) => {
    try {
        const input = await readJson(inputJSON)

        const result = processData(input.data, input.condition);

        const json = JSON.stringify(result)

        await writeJson('./task2/result.json', json)
    } catch (e) {
        console.error('An error occurred:', e);
    }
}

// Параментром здесь нужно ввести путь JSON файла
main('./task2/input.json')