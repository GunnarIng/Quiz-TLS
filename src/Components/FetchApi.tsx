import { useEffect } from "react";

//  https://opentdb.com/api_category.php - Returnerar alla kategorier och IDs
//  https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE - Returnerar antal frågor i en kategori



export function FetchApi() {
  
  return ( useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, [])
  )

}


