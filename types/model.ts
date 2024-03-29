export type User = {
    id: string;
    name: string;
    email: string;
    password: string;

}

export interface Book {
    id: string;
    isbn: string;
    title: string;  
    subtitle: string;  
    author: string[];  
    description: string;  
    image: string;  
    datePublished: string;  
    publisher: string;  
    pageCount: string;  
    categories: string[];  
    state: 'Disponible' | 'Prestado' | 'Reservado';
}

export interface Loan {
    id: string;
    bookId: string;
    title: string;
    image: string;
    comment: string;
    userId: string;           
    dateCreated?: Date;
    dateReturned: string;
    returned?: boolean;
    state?: string; 
};

export type ReservationProps = {
    id: string;
    bookId: string;
    title: string;
    image: string;
    comment: string;
    userId: string;           
    dateCreated?: Date;
    dateUpdated?: Date,
    recuperationDate: string;
    state?: string;
}