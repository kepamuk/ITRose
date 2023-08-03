import {convertDistance, rules} from './converter';
import {writeJson, readJson} from "../json.handle";


const main = async (inputJSON: string)=>{
    try {
        const input = await readJson(inputJSON);

        const result = convertDistance(input.distance, input.convert_to, rules);

        const json = JSON.stringify(result)

        await writeJson('./task1/result.json', json)
    }catch (e) {
        console.error('An error occurred:', e);
    }
}


// Параментром здесь нужно ввести путь JSON файла
main('./task1/input.json')