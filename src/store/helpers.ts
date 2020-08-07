/**
 * Заменяет элемент массива на другой, не модифицируя исходный массив
 */
export const replaceArrayReduxAction = (array: object[], changedIndex: number = 0, replacedItem?: object) => {
    return [
        ...array.slice(0, changedIndex),
        replacedItem,
        ...array.slice(changedIndex + 1)
    ];
};
