import React from "react";
import ErrorMessage from "../erroeMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <a style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px', 'cursor': 'pointer'}} onClick={goBack}>Back to previous page</a>
        </div>
    )
}

export default Page404;
