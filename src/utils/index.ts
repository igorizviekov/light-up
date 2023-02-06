export function getClassByCondition(condition: boolean, class1: string): string;
export function getClassByCondition(
  condition: boolean,
  class1: string,
  class2: string
): string;
export function getClassByCondition(
  condition: boolean,
  class1: string,
  class2?: string
): string {
  if (class2) {
    return condition ? class1 : class2;
  } else {
    return condition ? class1 : "";
  }
}
