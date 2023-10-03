/**
 * Template Literal Types
 *
 * <https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html>
 */

export {}

type Sizes = "xs" | "sm" | "md" | "lg" | "xl"
type Widths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type ResponsiveColumns = `col-${Sizes}-${Widths}`
//                   ^?

type OffsetColumns = `offset-${Sizes}-${Widths}`


const size: ResponsiveColumns = "col-md-12"
