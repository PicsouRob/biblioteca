import { useContext } from "react";

import BookContext from "@/context/bookContext";

interface BookContextProps {
    bookInfo: any;
    setBookInfo: React.Dispatch<React.SetStateAction<any>>;
}

const useBookContext = (): BookContextProps => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error("BookContext is not available");
    }

    return context;
};

export { useBookContext };