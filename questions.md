1. What is the difference between Component and PureComponent? give an
example where it might break my app.
    > PureComponent implement shouldComponentUpdate() with shallow prop and state comparison, and Component did non implement shouldComponentUpdate().For PureComponents you need to be sure that the children components also are PureComponents. If you have passed objects as props or have tham as state members, you need to be sure that these are immutable, because as I mentioned that PureComponent is doing only shallow comparison, it may not rerender when the references are not changed for object type properties.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?
    > Actually the answer comes from the react documentation, shouldComponentUpdate would not be counted for consumers, so whenever context is changed, consumer components will rerender.

3. Describe 3 ways to pass information from a component to its PARENT.
    > * passing callback the child, which will change data in parent
    > * passing [data, setData] from useState to context, and from consumer component call the setData method
    > * if you are using some third party libraries like redux, sue connect middleware to pass action which will change the data

4. Give 2 ways to prevent components from re-rendering.
   > * use shouldComponentUpdate to prevent re-rendering if it is not needed (and if these are functional components React.memo() instead)
   > * passing right arguments to useEffect() which is also kind of shouldComponentUpdate() alternative in functional components

5. What is a fragment and why do we need it? Give an example where it might
break my app.
    > React.fragment is used whenever you don't want to add some parent html element in your component (as all components should have only one parent element), the only thing that I can think of that fragment can break is stylings?

 6. Give 3 examples of the HOC pattern.
    > * From my experience we used HOC pattern to show spinner when data is loading for the components that are doing async calls, and need to show spinner when data was not ready yet.
    > * Best example would be connect from redux, and even if you are creating your own state manager, like saving in localStorage or read from it
    > * Some toggling components, like show different thing depending on state of some value

7. what's the difference in handling exceptions in promises, callbacks and
async...await.
    > * handling exceptions in callbacks are kind of nightmare, because you need to handle them separately for all the callbacks if you have nested ones
    > * handling exceptions in promises, is easier because you can have one catch on the chain of promises, and you can also add middle catch to the chain, so if for example for the first 3 calls, you need to catch the exception differently, you can just add catch after them, and then continue with .then() chains
    > * in async/await it is more readable because you have try/catch/finally but in this case you can't have multiple catches, like in promises version

8. How many arguments does setState take and why is it async.
   > As I know it take only one argument which can be object, or callback method, it is async because for performance react can do batch updates on state.

9. List the steps needed to migrate a Class to Function Component.
    > * change this.state to useState or useReducer depending on the structure of the state that you have
    > * change lifecycle methods to useEffect()
    > * add useCallback(), useMemo() hooks for performance improvements

10. List a few ways styles can be used with components.
    > * use styled components
    > * use sass/less with webpack configured
    > * use pure css

11. How to render an HTML string coming from the server.
    > * dangerouslysetinnerhtml property can be used, but as name suggests it will be dangerous, you need to be sure that the data from the server is safe.
    > * If you know that you need to handle only some list of tags, in my opinion it will be better to do the string manipulation in client side, split the string by these tags, and replace string tags with html tags/components. Kind of doing whitelisting.