type Category =
  | "film"
  | "music"
  | "animals"
  | "science"
  | "general-knowledge"
  | "sport"
  | "vehicles";

export function useCategoryColor(category: Category) {
  let backgroundColor;
  switch (category) {
    case "film":
      backgroundColor = "#691B1B";
      break;
    case "music":
      backgroundColor = "#34691B";
      break;
    case "animals":
      backgroundColor = "#71691F";
      break;
    case "science":
      backgroundColor = "#5E1B69";
      break;
    case "general-knowledge":
      backgroundColor = "#1A4646";
      break;
    case "sport":
      backgroundColor = "#1B1E69";
      break;
    case "vehicles":
      backgroundColor = "#1B6069";
      break;
    default:
      backgroundColor = "#FFF";
  }
  return { backgroundColor };
}
