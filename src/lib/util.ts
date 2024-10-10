export function convertToPascalCaseWithSpaces(input: string): string {
  const pascalCase = input.replace(/(^\w|[A-Z]|\b\w)/g, (match, index) => {
    return index === 0 ? match.toUpperCase() : ` ${match.toUpperCase()}`;
  }).replace(/\s+/g, '');
  return pascalCase.replace(/([A-Z])/g, ' $1').trim();
}