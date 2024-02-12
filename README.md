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

  https://www.swiggy.com/dapi/restaurants/lists/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

API key
IBLhllP93Kp2uBT9ZWTPxlviJ8QNwBH3r_eBP7SNO4iD9DrxWpc54iMiwsQu35YwmeCsEITcGXo4iThYw56LYs0AFe4AU9CXhpGfie_QPqgNkRFRLDjK5yx2MGLCZXYx

Client ID
sfjT8vAoPi7aOPI5uLuypw

https://www.reddit.com/r/learnjavascript/comments/10mhzej/put_together_a_list_of_awesome_free_apis_you_can/ free apis for testing

Whenever state variable update react triggers a reconcilitaion cycle (rerenders the component)

HOOKS:
useState and useEffect without dependency([]) call the effect everytime component is rendered. using empty dependency it will not call when component is renedered, we can give the component name so it will render only for that component.

React-Router-Dom -
this will provide us the routing mechanism for routing through different applications;
createBrowserRouter will be used to create all the routers which will take 3 parameters: path, elemet:(page to be loaded, we give component), errorElement will show which page to be loaded when there is an error.

Outlet is the router provied thing which will render the slected pathe element.
we have to render RouterProvider with the path object for loading navigation

https://wavez.github.io/react-hooks-lifecycle/

Different css frameworks, libraries : MaterialUi, Styled css, Bootstrap, Ant design, Chakra ui, Tailwind css.

https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9347299&lng=77.6161863&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

lift the state up // need to learn
props drilling
