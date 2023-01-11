export function Button(props) {
    const { children, ...attributes } = props;

    return <button {...attributes}>{children}</button>
}