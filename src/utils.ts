export function getType(value: any): string {
  if (Array.isArray(value)) {
    // Assuming homogeneous array
    const arrType = value.length ? getType(value[0]) : "any";
    return `${arrType}[]`;
  } else if (typeof value === "object" && value !== null) {
    return "object"; // return 'object' will trigger the recursive call
  }

  return typeof value;
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
