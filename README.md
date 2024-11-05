# GlobiFYE-assessment

#### Conceptual Questions:

##### JavaScript

1. What are the differences between `==` and `===` in JavaScript?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `==` is the equality operator and `===` is the strict equality operator.
The main difference between these two comparison operators is how they compare values.
`==` compares two values after doing a type conversion.
`===` compares two values without doing a type conversion

For example:

```js
let num = 10;
let str = '10';

console.log(num == str); //This would output true because the values are the same after type conversion
console.log(num === str); //This would output false because the values are two different types
```

##### React

1. What is the purpose of React's `useEffect` hook? Provide an example use case

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The `useEffect` hook is used to perform side effects in your components. Some examples include data fetching, DOM manipulation, subscribing to events, etc
One example use case is on our counter code, we can use useEffect to console.log the count number.
A "side effect" of incrementing or decrementing our counter.

```js
useEffect(()=>{
    console.log("the count number: ", count)
}, [count])
```

##### Node.js

1. How does Node.js handle asynchronous operations, and why is this beneficial?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node.js is able to handle asynchronous operations through an event loop and it's non-blocking architecture. When operations like reading a file or a network request is initiated, Node.js offloads that work to the system so it doesn't impede on the main execution code. Then it uses callbacks to get that information whenever the main thread is available.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is beneficial because it has better performance since asynchronous operations can be run without blocking the main thread and it improves scalability allowing Node.js to handle simultaneous connections which is ideal for use cases with APIs and real-time applications.

##### Next.js

1. What is the difference between `getStaticProps` and `getServerSideProps` in Next.js?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Both are functions for data fetching but operate differently.*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`getStaticProps` is used for static site generation and allows you to fetch data at build time. This is good for when data doesn't change often and can be pre-rendered, thus faster load times for the end user.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`getServerSideProps` is used, as you can expect, for server-side rendering and fetches data on each request.This is good for data that changes constantly, for example, user data. This data is good since it's the most up to date but can have performance drawbacks, since each request needs server processing.

##### PostgreSQL

1. What is a primary key in PostgreSQL, and why is it important?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A primary key in PostgreSQL is a column or a set of columns of uniqely identifies each row in a table. It's important because primary keys enforce data integrity by preventing duplicates and null values. Querying is also more efficient because helps locate specific rows, since each row has a unique identifier.

##### Azure App Services

1. Describe the steps to deploy a simple Node.js application to Azure App Services.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Have Node.js, npm, azure app service extension installed*

```txt
1. Create a simple Node.js application with express
2. Sign into Azure and create a new web app
3. Configure your settings like webapp name, resource group, runtime, operating system, and location
4. Select yes for "Always deploy the workspace.." to ensure Visual Studio Code deploys to the same App service
5. Wait for the deployment to complete and select browse website in the popup to see your page
```

2. What is a common benefit of using Azure App Services for hosting applications?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The most common benefits of using Azure App Services is it's a managed platform. It has built-in support for CI/CD, scalability, and maintenance through integrated monitoring making it very easy for rapid development.

##### WordPress

1. What is the difference between a WordPress post and a page?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Posts and pages are both content types but show content differently.

- Posts are for more dynamic content like articles, blog posts, and recipes. Meant to be updated regularly.
- Pages are for more static content like an about me page. Which stay relatively the same.
