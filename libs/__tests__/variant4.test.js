import {
    isIndexNode,
    isNode,
    isObjectNode,
    isOperatorNode,
    isParenthesisNode,
    isRangeNode,
    isRelationalNode,
    isSymbolNode,
    isChain,
    typeOf
} from "../variant4";
import { isBigNumber } from "../variant1";

jest.mock("../variant1", () => ({
    isBigNumber: jest.fn(),
}));

describe("variant4.js tests", () => {
    test("isIndexNode returns true for valid IndexNode", () => {
        const mockNode = { isIndexNode: true, constructor: { prototype: { isNode: true } } };
        expect(isIndexNode(mockNode)).toBe(true);
    });

    test("isIndexNode returns false for invalid IndexNode", () => {
        const mockNode = { isIndexNode: false, constructor: { prototype: { isNode: true } } };
        expect(isIndexNode(mockNode)).toBe(false);
    });

    test("isNode returns true for valid Node", () => {
        const mockNode = { isNode: true, constructor: { prototype: { isNode: true } } };
        expect(isNode(mockNode)).toBe(true);
    });

    test("isNode returns false for invalid Node", () => {
        const mockNode = { isNode: false, constructor: { prototype: { isNode: true } } };
        expect(isNode(mockNode)).toBe(false);
    });

    test("isObjectNode returns true for valid ObjectNode", () => {
        const mockNode = { isObjectNode: true, constructor: { prototype: { isNode: true } } };
        expect(isObjectNode(mockNode)).toBe(true);
    });

    test("isOperatorNode returns true for valid OperatorNode", () => {
        const mockNode = { isOperatorNode: true, constructor: { prototype: { isNode: true } } };
        expect(isOperatorNode(mockNode)).toBe(true);
    });

    test("isParenthesisNode returns true for valid ParenthesisNode", () => {
        const mockNode = { isParenthesisNode: true, constructor: { prototype: { isNode: true } } };
        expect(isParenthesisNode(mockNode)).toBe(true);
    });

    test("isRangeNode returns true for valid RangeNode", () => {
        const mockNode = { isRangeNode: true, constructor: { prototype: { isNode: true } } };
        expect(isRangeNode(mockNode)).toBe(true);
    });

    test("isRelationalNode returns true for valid RelationalNode", () => {
        const mockNode = { isRelationalNode: true, constructor: { prototype: { isNode: true } } };
        expect(isRelationalNode(mockNode)).toBe(true);
    });

    test("isSymbolNode returns true for valid SymbolNode", () => {
        const mockNode = { isSymbolNode: true, constructor: { prototype: { isNode: true } } };
        expect(isSymbolNode(mockNode)).toBe(true);
    });

    test("isChain returns true for valid Chain", () => {
        const mockNode = { constructor: { prototype: { isChain: true } } };
        expect(isChain(mockNode)).toBe(true);
    });

    test("typeOf returns 'null' for null input", () => {
        expect(typeOf(null)).toBe("null");
    });

    test("typeOf returns 'BigNumber' for BigNumber input", () => {
        isBigNumber.mockReturnValue(true);
        expect(typeOf({})).toBe("BigNumber");
    });

    test("typeOf returns constructor name for object input", () => {
        class BigNumber { }
        const instance = new BigNumber();
        expect(typeOf(instance)).toBe("BigNumber");
    });

    test("typeOf returns primitive type for non-object inputs", () => {
        expect(typeOf("string")).toBe("string");
        expect(typeOf(123)).toBe("number");
        expect(typeOf(true)).toBe("boolean");
        expect(typeOf(() => { })).toBe("function");
    });
});