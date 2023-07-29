import { ValidationError } from "yup"
import reduce from "lodash/reduce"

export default (errors: ValidationError): { [key: string]: string } => {
    if (errors instanceof ValidationError) {
        return reduce(errors?.inner, (r, v) => {
            return { ...r, [v.path as string]: v.message }
        }, {})
    }

    return {}
}