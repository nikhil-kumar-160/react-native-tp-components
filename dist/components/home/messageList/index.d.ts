export default MessageList;
declare function MessageList({ data, onViewAll, onPress, showViewAllButton }: {
    data: any;
    onViewAll: any;
    onPress: any;
    showViewAllButton: any;
}): JSX.Element;
declare namespace MessageList {
    namespace propTypes {
        const data: any;
        const onViewAll: any;
        const onPress: any;
        const showViewAllButton: any;
    }
    namespace defaultProps {
        export { Data as data };
        export function onViewAll_1(): void;
        export { onViewAll_1 as onViewAll };
        export function onPress_1(item: any): void;
        export { onPress_1 as onPress };
        const showViewAllButton_1: boolean;
        export { showViewAllButton_1 as showViewAllButton };
    }
}
import { Data } from "./data";
//# sourceMappingURL=index.d.ts.map