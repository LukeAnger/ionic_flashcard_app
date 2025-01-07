import { FlashcardActions } from "../actions/flashcardActions";
import { flashcardData } from "../../data";

export interface FlashcardState {
  category: string | null;
  flashcards: any[];
  currentIndex: number;
  score: number;
}

export const initialFlashcardState: FlashcardState = {
  category: null,
  flashcards: [],
  currentIndex: 0,
  score: 0,
};

export const flashcardReducer = (
  state: FlashcardState,
  action: FlashcardActions,
): FlashcardState => {
  switch (action.type) {
    case "SET_CATEGORY": {
      const category = flashcardData.categories.find(
        (cat) => cat.name === action.payload
      );
      return category
        ? {
            ...state,
            category: category.name,
            flashcards: category.flashcards,
            currentIndex: 0,
            score: 0,
          }
        : state;
    }
    case "NEXT_CARD": {
      const isLastCard = state.currentIndex + 1 === state.flashcards.length;
      return {
        ...state,
        currentIndex: isLastCard ? state.currentIndex : state.currentIndex + 1,
        score: action.payload ? state.score + 1 : state.score,
      };
    }
    case "RESET":
      return {
        ...state,
        currentIndex: 0,
        score: 0,
      };
      default:
        throw new Error(`Unhandled action type: ${(action as FlashcardActions).type}`);
      
  }
};
