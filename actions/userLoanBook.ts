export const userLoanBook = async (id: string) => {
    try {
        const response = await fetch(`/api/find/user-book?userId=${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", },
        });
        const result = JSON.parse(await response.json());
        
        if (response.ok) {
            return result.userBook;
        } else {
            console.log("No encontro ningun libros prestado para este usuario!");

            return [];
        }
    } catch (error: any) {
        console.log(error.message);

        return [];
    }
};