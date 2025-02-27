import { parseInput } from "./parse-input";

export async function processInputData(input: string) {
    // validate input before processing
    if (!input) {
        throw new Error('No input provided');
    }

    const { leftList, rightList } = parseInput(input);
    const similarityScore = calculateSimilarityScore(leftList, rightList);
    return similarityScore;
}

function calculateSimilarityScore(leftList: number[], rightList: number[]): number {
  let similarityScore = 0;
  
  // For each number in the left list:
  for (const leftNumber of leftList) {
    // Count how many times it appears in the right list
    const frequency = rightList.filter(rightNumber => rightNumber === leftNumber).length;
    
    // Multiply the number by its frequency in the right list and add to similarity score
    similarityScore += leftNumber * frequency;
  }
  
  return similarityScore;
}
