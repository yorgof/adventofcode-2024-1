import { parseInput } from "./parse-input";

export async function processInputData(input: string) {
    // validate input before processing
    if (!input) {
        throw new Error('No input provided');
    }

    const { leftList, rightList } = parseInput(input);
    // the lists are modified in the calculateTotalDistance function, this is intentional as it is more efficient and we don't need the original lists
    const totalDistance = calculateTotalDistance(leftList, rightList);
    return totalDistance;
}


function calculateTotalDistance(leftList: number[], rightList: number[]): number {
  // Sort both lists in ascending order, modifying the lists
  const sortedLeftList = leftList.sort((a, b) => a - b);
  const sortedRightList = rightList.sort((a, b) => a - b);
  
  let totalDistance = 0;
  
  // Calculate distance between each pair
  for (let i = 0; i < sortedLeftList.length; i++) {
    const distance = Math.abs(sortedLeftList[i] - sortedRightList[i]);
    totalDistance += distance;
  }
  
  return totalDistance;
}
