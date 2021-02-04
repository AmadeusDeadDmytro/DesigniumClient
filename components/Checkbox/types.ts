export interface CheckboxProps {
    label: string
    checked: boolean
    id: string
    onChange: (value: boolean, id: string) => void
}