"use client";

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

const BookView: React.FC = () => {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const isbn = searchParams.get('id');

    console.log({ isbn });

    return (
        <div>BookView</div>
    );
}

export default BookView;