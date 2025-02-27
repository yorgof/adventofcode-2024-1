import { describe, it, expect } from 'bun:test';
import { processInputData } from './list-similarity';

describe('invalid input', () => {
    it('should throw an error if no input is provided', async () => {
        expect(async () => await processInputData('')).toThrow('No input provided');
    });
    it('should throw an error if the input contains non-numeric values', async () => {
        expect(async () => await processInputData('1 2\n3 b')).toThrow('Invalid input: left and right values must be numbers');
    });
    it('should throw an error if the input is formatted incorrectly', async () => {
        expect(async () => await processInputData('123\n4 5 6')).toThrow('Invalid input: left and right values must be numbers');
    });
    it('should throw an error if there are empty lines', async () => {
        expect(async () => await processInputData('1 2\n\n3 4')).toThrow('Invalid input: left and right values must be numbers');
    });
    it('should throw an error if there are negative values', async () => {
        expect(async () => await processInputData('-1 2\n-3 4')).toThrow('Invalid input: left and right values must be positive');
    });
    it('should throw an error if the input contains a number larger than the max safe integer', async () => {
        expect(async () => await processInputData('1 9007199254740992')).toThrow('Invalid input: left and right values must be less than the max safe integer');
    });
});

describe('valid input', () => {
    it('should calculate the correct similarity score for the example in the problem', async () => {
        const result = await processInputData('3 4\n4 3\n2 5\n1 3\n3 9\n3 3');
        expect(result).toBe(31);
    });
    it('should calculate the correct similarity score for simple input', async () => {
        const result = await processInputData('1 2\n3 4');
        expect(result).toBe(0); // 1*0 + 3*0 = 0
    });
    it('should calculate the correct similarity score for matching numbers', async () => {
        const result = await processInputData('1 1\n2 2');
        expect(result).toBe(3); // 1*1 + 2*1 = 3
    });
    it('should handle duplicates in the left list', async () => {
        const result = await processInputData('5 5\n5 10');
        expect(result).toBe(10); // 5*1 + 5*1 = 10
    });
    it('should handle duplicates in the right list', async () => {
        const result = await processInputData('6 6\n7 6\n8 6');
        expect(result).toBe(18); // 6*3 + 7*0 + 8*0 = 18
    });
}); 