export default FlightOptions;
declare function FlightOptions(props: any): JSX.Element;
declare namespace FlightOptions {
    namespace propTypes {
        const departFlightList: any;
        const returnFlightList: any;
    }
    namespace defaultProps {
        const departFlightList_1: {}[];
        export { departFlightList_1 as departFlightList };
        const returnFlightList_1: {}[];
        export { returnFlightList_1 as returnFlightList };
    }
}
