export type FlashcardActions =
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "NEXT_CARD"; payload: boolean } // `payload: boolean` indicates if the answer was correct
  | { type: "RESET" };

export const setCategory = (categoryName: string): FlashcardActions => ({
  type: "SET_CATEGORY",
  payload: categoryName,
});

export const nextCard = (isCorrect: boolean): FlashcardActions => ({
  type: "NEXT_CARD",
  payload: isCorrect,
});

export const reset = (): FlashcardActions => ({
  type: "RESET",
});
