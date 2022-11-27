# Part 2 Questions

####    1. What is the difference between Component and PureComponent? give an example where it might break my app.

A React Component will be rendered every time __setState()__ is called, on the other hand, PureComponent will first do a shallow comparison of the
current and the next state and if they are equal(it will check only the memory references) then it will not be re-rendered. This might cause a problem when you have nested objects inside the component's state and some of their values have been changed, then you will probably want to rerender the component, but if it is a Pure one then the comparison will return __true__ and the rerender will not be executed.



####    2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
If the Component that uses `shouldComponentUpdate`, has a child that uses some of the provided contextes then the parent might block falsely its child's rerender.




####    3. Describe 3 ways to pass information from a component to its PARENT.
1.  Using inside parent `const someref = createRef()` and pass it to the children as prop named '**ref**', then you can access for example its state by `someRef.curren`
2.  Passing a function as prop to the child component, that the child must use to return the 'information' you want.
3.  Wrap parent component(and children will be wrapped obviously), inside a context provider that the children will use to update it with their 'information' and parrent will use it to read this 'information'.



####    4. Give 2 ways to prevent components from re-rendering.
1. You can use a Component with `React.memo()`  e.g. `const SomeComponent2 = React.memo(SomeComponent)`, then SomeComponent2 will only be rerendered if there are changes in its props.
2.  Using `shouldComponentUpdate()`, that runs before a class component rerender and you could return __true__ if you want to rerender it or __false__ differently.



####    5. What is a fragment and why do we need it? Give an example where it might break my app.
You might need to create a Component that returns multiple elements on the outer hierarchy, this is not possible with jsx, with jsx you need to return only one outer element. You can use <React.Fragment> or just empty tag <> as the outter element and this will not make any difference on the DOM, it will just add the children of the outer element to it. If you use it with children that expect a certain kind of parent element(e.g. __tr__ expects __table__)  then there is no guaranty that the parent component will be the right one.


####    6. Give 3 examples of the HOC pattern.
```
interface HocProps {
  children: React.ReactNode;
}


const DisableClickHoc = ({ children }: HocProps) => {
  return (
    <div>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          onClick: ()=>{/*nothing*/} 
        })
      )}
    </div>
  );
};

const HideHoc = ({ children }: HocProps) => {
  return (
    <div style={{display:"hidden"}}>
     {children}
    </div>
  );
};

const DecimateHoc = ({ children }: HocProps) => {
  return (
    <div style={{display:"hidden"}}>
     {Children.map(children, (child, index) =>
       {if(index % 10 != 0)  return child})}
    </div>
  );
};
```



####    7. what's the difference in handling exceptions in promises, callbacks and async...await.
I do not think there is any difference beside the syntax.


####    8. How many arguments does setState take and why is it async.
setState takes as argument an object with the keys and the values of the properties that you want to be changed in the state. You can also use a callback function as second argument that will be called after the update. setState is async for performance reasons, batches of setState calls will be executed together from react to avoid unecessary rerenders. It could change the states and do asynchronously only the rerender but this could lead to other problems.





####    9. List the steps needed to migrate a Class to Function Component.

* Use Functional Component syntax.
* Replace lifecycle functions like `componentWillUpdate`  with hooks such as `useEffect`
* Handle the state of the component with the `useState` hook.

####    10. List a few ways styles can be used with components.

*   By applying an __id__ or a __classname__ to the Component and importing a css.
*   Using __style__ property.

####    11. How to render an HTML string coming from the server.
You have to use the HTML string with `dangerouslySetInnerHTML` property, for example inside a div. You have to rerender the component that returns that div when the html comes from the server.
```
const MyComponent = ()=>{
    const [htmlString, setHtmlString] = useState("");
    useEffect(()=>{
        bringMeMyStringAsyncCall().then(newString=>setHtmlString(newString))
    },[])
    
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
}

```

