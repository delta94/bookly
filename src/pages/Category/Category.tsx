import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* mocks */
import { mock } from "helpers/mock";
/* modules */
import { useParams } from "react-router-dom";
import { Book } from "components/BookBox";

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();

    return (
        <Fragment>
            <DocumentTitle title="Category" />
            <BooksGrid books={mock<Book>("books")} loading={false} />
        </Fragment>
    );
};

export default Category;
