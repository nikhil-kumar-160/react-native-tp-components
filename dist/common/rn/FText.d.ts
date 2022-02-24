export default FText;
declare function FText({ children, type, style, ...props }: {
    [x: string]: any;
    children: any;
    type: any;
    style: any;
}): JSX.Element;
declare namespace FText {
    namespace propTypes {
        const type: any;
    }
    namespace defaultProps {
        export const children: string;
        const type_1: string;
        export { type_1 as type };
    }
}
