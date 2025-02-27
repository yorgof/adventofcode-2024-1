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

function parseInput(input: string): { leftList: number[], rightList: number[] } {
  const lines = input.trim().split('\n');
  
  const leftList: number[] = [];
  const rightList: number[] = [];
  
  for (const line of lines) {
    const [left, right] = line.trim().split(/\s+/).map(Number);

    // Check if the left and right values are valid numbers
    if (isNaN(left) || isNaN(right)) {
      throw new Error('Invalid input: left and right values must be numbers');
    }

    // assume that we only accept positive numbers
    if (left < 0 || right < 0) {
      throw new Error('Invalid input: left and right values must be positive');
    }

    // throw an error if either number is larger than the max safe number for javascript
    if (left > Number.MAX_SAFE_INTEGER || right > Number.MAX_SAFE_INTEGER) {
      throw new Error('Invalid input: left and right values must be less than the max safe integer');
    }

    leftList.push(left);
    rightList.push(right);
  }
  
  return { leftList, rightList };
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
