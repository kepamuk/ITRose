// Пример использования
import {findUnknownPoint} from "./search";
import {writeJson} from "../json.handle";


const main = async () => {
    try {
        const result = findUnknownPoint();

        const json = JSON.stringify(result)

        await writeJson('./task3/result.json', json)
    } catch (e) {
        console.error('An error occurred:', e);
    }
}

main()