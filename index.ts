import {readFile} from 'fs/promises';
import { processInputData as processDistanceInputData } from './list-distance';
import { processInputData as processSimilarityInputData } from './list-similarity';

// Run the solution
main().catch(error => {
    console.error('An error occurred:', error);
    process.exit(1);
  });


async function main() {
    const filename = process.argv[2];
    
    if (!filename) {
        throw new Error('No filename provided');
    }
    
    const inputData = await readInput(filename);
    
    const totalDistance = await processDistanceInputData(inputData);
    console.log(`The total distance between the lists is: ${totalDistance}`);

    const similarityScore = await processSimilarityInputData(inputData);
    console.log(`The similarity score between the lists is: ${similarityScore}`);
}

async function readInput(filePath: string): Promise<string> {
    return readFile(filePath, 'utf-8');
}