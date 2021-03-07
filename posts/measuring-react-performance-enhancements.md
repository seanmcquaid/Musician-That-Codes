---
title: 'Measuring React Performance "Enhancements"'
date: '2021-03-05'
---

All over the internet, you hear conflicting opinions about the "best" way to approach optimizing performance in React. Instead of just believing what I read previously, I decided to take it upon myself to actually use the Devtools Profiler and compare the actual rendering times for the exact same component trees using the exact same scenarios.

I think the two most common areas where state changes happen are generally speaking : 1) Forms 2) Data Fetching on Load. I ran through mutliple scenarios and documented the rendering times for each scenario.

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

The data here paints a pretty clear picture. There is minimal difference in performance when using useState and useReducer. The useCallback hook could shave off time when used with useState but not when using the dispatch from useReducer. This is due to the fact that the dispatch function provided by useReducer inherently doesn't change on each render. React.memo seems to have a lot of potential for shaving off some time but comes with inherent trade offs of structuring and pass your props to primitive data types when possible. And above all, when I utilized multiple enhancements together, I only saved 2.9ms.

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

With such a small margin of rendering time between these three methods, I really struggle to recommend any of these three explicitly as a catch all. I believe all three have their use cases and clearly have no real performance edge over the other.

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

We're looking at just a 0.4ms difference when comparing these more complex and likely instances. So are all of these enhancements really worth it???

### Take Aways

This all confirmed what I already have heard from people like Kent C Dodds, don't use performance enhancements or pre-optimize unless your code is obviously slow. Dan Abramov has a GREAT article on some solid principles to apply before even considering these concepts as well that I will provide.

I think as programmers we want to be as proactive as possible to prevent poor user experiences, however, this can create a lot of overhead for our teams and honestly, might not even be beneficial.

Recommendations :

Reference Dan's article and Kent C Dodds

Dan - https://overreacted.io/before-you-memo/
Kent - https://kentcdodds.com/blog/usememo-and-usecallback

Here is the repo link for some code examples :
https://github.com/seanmcquaid/weighing-performance

[title](https://www.example.com)
