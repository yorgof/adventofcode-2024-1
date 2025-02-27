import {readFile} from 'fs/promises';
import { processInputData } from './list-distance';

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
    
    const totalDistance = await processInputData(inputData);
    console.log(`The total distance between the lists is: ${totalDistance}`);
}

async function readInput(filePath: string): Promise<string> {
    return readFile(filePath, 'utf-8');
}