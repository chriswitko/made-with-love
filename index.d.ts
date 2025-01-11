declare module "@chriswitko/made-with-love" {
  // Extend JSX Intrinsic Elements
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        "made-with-love": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }

  // Define the MadeWithLove class
  export class MadeWithLove extends HTMLElement {}
}
