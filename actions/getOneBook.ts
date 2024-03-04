export const getOneBook = async (id: string) => {
    try {
        const url: string = `https://www.googleapis.com/books/v1/volumes/${id}`;
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", },
        });
        const result = await response.json();
                
        if (response.ok) {
            return result;
        } else {
            console.log("No encontro ningun libros");
            return {};
        }
    } catch (error: any) {
        console.log("Error: ", error.message);
        return {};
    }
};