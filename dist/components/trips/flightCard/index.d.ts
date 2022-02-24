export default FlightCard;
declare function FlightCard({ width, height, opacity, onPress, preference, onTapToSetPreferences, flightInfo, }: {
    width: any;
    height: any;
    opacity: any;
    onPress: any;
    preference: any;
    onTapToSetPreferences: any;
    flightInfo: any;
}): JSX.Element;
declare namespace FlightCard {
    namespace propTypes {
        const width: any;
        const height: any;
        const onPress: any;
        const flightInfo: any;
    }
    namespace defaultProps {
        export { deviceWidth as width };
        const height_1: any;
        export { height_1 as height };
        export { flightDetails as flightInfo };
        export function onPress_1(): void;
        export { onPress_1 as onPress };
    }
}
declare const deviceWidth: number;
import { flightInfo as flightDetails } from "./data";
//# sourceMappingURL=index.d.ts.map