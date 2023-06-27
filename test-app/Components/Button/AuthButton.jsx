const AuthButton = ({ title, }) => {
    return (
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-3 w-full"
        >
            {title}
        </button>
    );
}

export default AuthButton;