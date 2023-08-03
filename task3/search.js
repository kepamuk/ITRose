"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnknownPoint = void 0;
function f(s, r) {
    return Math.sqrt((s.x - r.x) ** 2 + (s.y - r.y) ** 2 + (s.z - r.z) ** 2);
}
// Основная функция решения задачи
function findUnknownPoint() {
    const epsilon = 1; // Приемлемая точность
    const range = 100; // Максимальный диапазон для координат x, y и z
    const maxIterations = 10000; // Максимальное количество итераций
    let r = { x: Math.random() * range, y: Math.random() * range, z: Math.random() * range };
    let calls = 0; // Счетчик вызовов функции f
    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let minDist = f({ x: 0, y: 0, z: 0 }, r); // Измеряем расстояние до точки (0, 0, 0)
        let newR = null;
        // Поиск наилучшего значения x, y и z
        for (let dx = -range; dx <= range; dx += range / 2) {
            for (let dy = -range; dy <= range; dy += range / 2) {
                for (let dz = -range; dz <= range; dz += range / 2) {
                    calls++;
                    const dist = f({ x: r.x + dx, y: r.y + dy, z: r.z + dz }, r);
                    if (dist < minDist) {
                        minDist = dist;
                        newR = { x: r.x + dx, y: r.y + dy, z: r.z + dz };
                    }
                }
            }
        }
        if (newR === null) {
            // No improvement found, terminate the search
            break;
        }
        r = newR;
        // Проверяем условие выхода из цикла (достижение приемлемой точности)
        if (minDist <= epsilon) {
            break;
        }
    }
    return { point: Object.assign({}, r), calls };
}
exports.findUnknownPoint = findUnknownPoint;
