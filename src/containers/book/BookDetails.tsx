import React from "react";
import { BookDetailsBox } from "components/Book";
import { useParams } from "react-router-dom";

export const BookDetailsContainer = () => {
    const { bookId } = useParams<{ bookId: string }>();

    return (
        <BookDetailsBox
            id={bookId}
            title="کتاب جز از کل"
            author="استیو تولتز"
        />
    );
};
