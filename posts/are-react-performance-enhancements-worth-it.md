---
title: 'Are React Performance "Enhancements" Worth it?'
date: '2021-03-05'
---

All over the internet, you hear conflicting opinions about the "best" way to approach optimizing performance in React. Instead of just believing what I read previously, I decided to take it upon myself to use the Devtools Profiler and compare the actual rendering times for the same component trees using the same testing steps.

I think the two most common areas where state changes happen are generally speaking: 1) Forms 2) Data Fetching on Load. I ran through multiple scenarios and documented the rendering times for each scenario.

### Forms

Steps for Testing Times :

1. First Name - hello
2. Last Name - there
3. Submit

<table>
  <tr>
    <th>Scenario</th>
    <th>Description</th>
    <th>Rendering Time</th>
  </tr>
  <tr>
    <td>useState with an Object</td>
    <td>Using an object with useState to manage state</td>
    <td>22.5ms</td>
  </tr>
  <tr>
    <td>useReducer</td>
    <td>Using a reducer with useReducer to manage state</td>
    <td>19.3ms</td>
  </tr>
  <tr>
    <td>useState + useCallback</td>
    <td>Wrapping the onChange functions utilizing useState with useCallback</td>
    <td>15.4ms</td>
  </tr>
  <tr>
    <td>useReducer + useCallback</td>
    <td>Wrapping the onChange functions utilizing the dispatch from useReducer with useCallback</td>
    <td>23.6ms</td>
  </tr>
  <tr>
    <td>React.memo</td>
    <td>Wrapping some components with React.memo to reduce re-rendering</td>
    <td>9.1ms</td>
  </tr>
  <tr>
    <td>Without performance enhancements</td>
    <td>Not utilizing any performance enhancements</td>
    <td>21.4ms</td>
  </tr>
  <tr>
    <td>All with performance enhancements</td>
    <td>Utilizing multiple performance enhancements</td>
    <td>18.5ms</td>
  </tr>
</table>

The data here paints a pretty clear picture. There is minimal difference in performance when using useState and useReducer. The useCallback hook could shave off time when used with useState but not when using the dispatch from useReducer. This is because the dispatch function provided by useReducer inherently doesn't change on each render. React.memo seems to have a lot of potential for shaving off some time but comes with inherent trade-offs of structuring and passing your props to primitive data types when possible. And above all, when I utilized multiple enhancements together, I only saved 2.9ms.

### Data Fetching

Steps for Testing Times :

1. Wait for data to load

<table>
  <tr>
    <th>Scenario</th>
    <th>Description</th>
    <th>Rendering Time</th>
  </tr>
  <tr>
    <td>Batching multiple setState hooks</td>
    <td>Calling multiple setState hooks in the same function</td>
    <td>5.4ms</td>
  </tr>
  <tr>
    <td>useState with an Object</td>
    <td>Using an object with useState to manage state</td>
    <td>5.6ms</td>
  </tr>
  <tr>
    <td>useReducer</td>
    <td>Using a reducer with useReducer to manage state</td>
    <td>6.2ms</td>
  </tr>
</table>

With such a small margin of rendering time between these three methods, I struggle to recommend any of these three explicitly as a catch-all. I believe all three have their use cases and have no real performance edge over the other.

### All Together

Steps for Testing Times :

1. Description - python
2. Location - new york
3. Submit
4. Wait for data to load

<table>
  <tr>
    <th>Scenario</th>
    <th>Description</th>
    <th>Rendering Time</th>
  </tr>
  <tr>
    <td>Without performance enhancements</td>
    <td>Not utilizing any performance enhancements</td>
    <td>12.6ms</td>
  </tr>
  <tr>
    <td>All with performance enhancements</td>
    <td>Utilizing multiple performance enhancements</td>
    <td>12.2ms</td>
  </tr>
</table>

We're looking at just a 0.4ms difference when comparing these more complex and likely instances. So are all of these performance enhancements worth it???

### Take-Aways

All of these scenarios confirmed what I already have heard from people like Kent C. Dodds, don't use performance enhancements or pre-optimize your code unless your UI is slow. I think as programmers we want to be as proactive as possible to prevent potentially poor user experiences, so we WANT to solve performance problems before they're even visible. However, this can create a lot of overhead for our teams and honestly, might not even be beneficial in the end.

I would recommend following some of the following principles :

1. Push state as low as possible
2. Lift Content UP if it doesn't rely on the state in the current component
3. Use the React Component Profiler and MEASURE your rendering time before considering improving performance
4. Try building a production app and see if you experience any issues with lag
5. Don't even think about improving performance unless the user is impacted negatively by the current speed of your code

Some of these principles come straight out of Dan Abramov's article "Before You memo()" (it is seriously amazing), but most of these are fairly common sense if you think about how React handles the entire component tree when state updates.

As React developers, we are SUPER lucky to have access to such an awesome framework that is lightning fast. If we follow best practices and are mindful about how we position state in our component trees, we shouldn't have to be too concerned about performance. As Kent C. Dodds said in his article "When to useMemo and useCallback", "wait until the abstraction/optimization is screaming at you before applying it and you'll save yourself from incurring the costs without reaping the benefit."

Thank you so much for taking the time to read this and if you have any feedback for me, please feel free to reach out!

Signed,
Sean

### Resources to Check out

[Weighing Performance Repo - Sean McQuaid](https://github.com/seanmcquaid/weighing-performance)

Articles :

- [Before You memo() - Dan Abramov](https://overreacted.io/before-you-memo/)
- [When to useMemo and useCallback - Kent C. Dodds](https://kentcdodds.com/blog/usememo-and-usecallback)
