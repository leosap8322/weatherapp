import type { IErrorMessageProps } from "./error-message.interface"

function ErrorMessage(
    {message}: IErrorMessageProps
) {
    return <p>{message}</p> 
} export default ErrorMessage