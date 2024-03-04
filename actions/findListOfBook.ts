export const findListOfBook = async (url: string ) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json", },
            });
            const result = await response.json();
            
            if(response.ok) {
                return result.items;
            } else {
                console.log("No se encontro ningun libros");
                return [];
            }
        } catch (error: any) {
            console.log("Error: ", error.message);

            return [];
        }
    }