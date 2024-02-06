This is a sample git application to learn react app

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Different Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles.

Extensions used : Pretteir code formatter eslint

Sample app build : Food ordering app.
/ JSX - is not HTML in JS
// babel transpile to react.createElement.
// JSX is coverted to react.createelement using babel.
// ClassName
// Functional Components -> New. return react elements or jsx code.
// Component composition -> composing two components into one another
// SUPER POWER --> any js expression inside curly braces{} in jsx code.

//components for my food app
/_
Header -> - logo - nav items - user drop down
Body - search - Restaurant Container
-Restaurnat Card
Footer - Copyright - Links - Address - Contact
_/

Index should be never used as a KEY as it will affect the performance. keys should always be unique key

/_
Header -> -- logo - nav items - user drop down
Body - search - Restaurant Container
-Restaurnat Card
-Img
--Name of res, star rating, cuisne, delivery tinme
Footer - Copyright - Links - Address - Contact
_/

Types of Export/Import

-Default Export/Import
Export default Component;
import component from "path";

-Named Export/Import
export const Component;
import {component} from "path";

# react Hooks

(normal Js utilityfunctions)

- useState()
  -useEffect()
  Reconcilition Alogorithm(React Fiber in REACT 16) will take care of rerendering the change in use state data.
  React creates virtual dom -> a representation of actual dom
  Diff algorithm - find diff between old virtual dom and new virtual dom, calculate the diff and update the dom every render cycle
