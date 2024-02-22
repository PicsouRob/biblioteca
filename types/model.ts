export type User = {
    id: string;
    name: string;
    email: string;
    password: string;

}

export interface Book {
    id: string;
    isbn: string;
}

export interface Loan {
    id: string;
    userid: string;
    bookIssbn: string;
}

export type Reservation = {
    id: string;
    userid: string;
    bookIssbn: string;

}