import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
import { TopBar } from "components/TopBar";
import { LoadingIndicator } from "components/LoadingIndicator";
import { Book } from "components/BookBox";
/* modules */
import { useBooks } from "services/api/operations/read/readBooks";

const Home: FC = props => {
    const { isLoading, data } = useBooks();

    if (isLoading) {
        return <LoadingIndicator />;
    }

    const books: Book[] = [
        {
            author: "محمود باقری",
            id: "1",
            initialLikeState: false,
            title: "به تو می اندیشم",
            imageSrc: "https://source.unsplash.com/500x500/?book&sig=1",
        },
    ];

    return (
        <Fragment>
            <DocumentTitle title="homepage" />
            <TopBar />
            <BooksGrid books={books} loading={false} />
        </Fragment>
    );
};

export default Home;
