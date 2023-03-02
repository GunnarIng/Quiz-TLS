export function useCategoryName(category: string | undefined) {
  let categoryName;
  switch (category) {
    case "film":
      categoryName = "Film";
      break;
    case "music":
      categoryName = "Music";
      break;
    case "animals":
      categoryName = "Animals";
      break;
    case "science":
      categoryName = "Science";
      break;
    case "general-knowledge":
      categoryName = "General Knowledge";
      break;
    case "sport":
      categoryName = "Sport";
      break;
    case "vehicles":
      categoryName = "Vehicles";
      break;
    default:
      categoryName = "Unknown";
  }
  return categoryName;
}
