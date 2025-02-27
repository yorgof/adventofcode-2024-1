import { describe, it, expect } from 'bun:test';
import { processInputData } from './list-distance';

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
    it('should return the correct total distance', async () => {
        const result = await processInputData('1 2\n3 4');
        expect(result).toBe(2);
    });
    it('should return the correct total distance', async () => {
        const result = await processInputData('100 500\n200 300');
        expect(result).toBe(500);
    });
    it('should work with a single line of input', async () => {
        const result = await processInputData('100 500');
        expect(result).toBe(400);
    });
    it('shold work with extremly large numbers', async () => {
        const result = await processInputData('1000000000 2000000000');
        expect(result).toBe(1000000000);
    });
    it('should work when the left number is larger than the right number', async () => {
        const result = await processInputData('12567890 1');
        expect(result).toBe(12567889);
    });
});








