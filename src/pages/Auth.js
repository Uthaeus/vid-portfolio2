

function Auth() {
    return (
        <div className="auth-container">
            <h1>Enter Email and Password</h1>

            <form >
                <input type='email' />
                <input type='password' />
                <button>Enter</button>
            </form>
        </div>
    );
}

export default Auth;