import { textAlign } from '@mui/system'
import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main style={{ padding: "1rem", textAlign: "center"}}>
            <p>404 Not Found</p>
            <Link to="/">Back Home</Link>
        </main>
    )
}

export default NotFound