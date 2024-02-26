export const calculateFrequency = (extractedNumbers: any): any => {

    const counter: any = {};
    extractedNumbers.forEach((number: number) => {
        if (number in counter) {
            counter[number]++;
        } else {
            counter[number] = 1;
        }
    });
    return counter;
}