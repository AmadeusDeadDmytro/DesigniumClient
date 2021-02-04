type Types = 'text' | 'password' | 'email'

export interface InputComponentProps {
    type: Types
    id: string
    value: string
    onChange: (value: string, id: string) => void
    placeholder?: string
}

export interface FormGroupProps {

}