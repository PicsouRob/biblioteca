import { boolean } from "yup";

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
    comment: string;
    userId: string;           
    dateCreated?: string;
    dateReturned: string;
    returned?: boolean;
    state?: 'Disponible' | 'Prestado' | 'Reservado'; 
};

export type ReservationProps = {
    id: string;
    bookId: string;
    comment: string;
    userId: string;           
    dateCreated?: Date;
    dateUpdated?: Date,
    recuperationDate: string;
    state?: 'Disponible' | 'Prestado' | 'Reservado';
}