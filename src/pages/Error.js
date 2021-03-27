import BackButton from '../components/BackButton'

// Page for if an invalid url is entered to return back to the home page.
const Error = () => {
    return (
        <>
            <BackButton />
            <h1>
                Invalid page url
            </h1>
        </>
    )
}

export default Error
