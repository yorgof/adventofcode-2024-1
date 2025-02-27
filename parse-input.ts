export function parseInput(input: string): { leftList: number[], rightList: number[] } {
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