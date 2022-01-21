export function prettifySnakeCase(snakeCaseName) {
  return snakeCaseName
    .split("_")
    .map((str) => {
      const firstLetter = str.charAt(0).toUpperCase();
      const rest = str.slice(1);
      return `${firstLetter}${rest}`;
    })
    .join(" ");
}
