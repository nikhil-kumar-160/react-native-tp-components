export function isEmpty(obj: any): boolean;
export function isPlatformIos(): boolean;
export function getPluralText(number: any, text: any, isCaps: any, isNumberPrefix: any): string;
export const FontFamily: any;
export namespace Specs {
    namespace light {
        const fontFamily: string;
    }
    namespace regular {
        const fontFamily_1: string;
        export { fontFamily_1 as fontFamily };
    }
    namespace medium {
        const fontFamily_2: string;
        export { fontFamily_2 as fontFamily };
    }
    namespace semiBold {
        const fontFamily_3: string;
        export { fontFamily_3 as fontFamily };
    }
    namespace bold {
        const fontFamily_4: string;
        export { fontFamily_4 as fontFamily };
    }
}
export namespace shadowObj {
    const shadowColor: string;
    namespace shadowOffset {
        const width: number;
        const height: number;
    }
    const shadowOpacity: number;
    const shadowRadius: number;
    const elevation: number;
}
export namespace dialogBoxStyle {
    const flexGrow: number;
    const maxHeight: number;
}
declare namespace _default {
    export { FontFamily };
    export { Specs };
    export { shadowObj };
    export { dialogBoxStyle };
    export { isPlatformIos };
    export { getPluralText };
}
export default _default;
