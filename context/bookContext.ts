import { BookContextProps } from "@/types/book";
import { createContext } from "react";

const BookContext = createContext<BookContextProps>({
    bookInfo: {},
    setBookInfo: () => {},
});

export default BookContext;