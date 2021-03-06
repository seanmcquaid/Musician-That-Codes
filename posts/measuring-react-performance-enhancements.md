---
title: 'Measuring React Performance "Enhancements"'
date: '2021-03-05'
---

All over the internet, you hear conflicting opinions about the "best" way to approach optimizing performance in React. Instead of just believing what I read previously, I decided to take it upon myself to actually use the Devtools Profiler and compare the actual rendering times for the exact same component trees using the exact same scenarios.

I think the two most common areas where state changes happen are generally speaking : 1) Forms 2) Data Fetching on Load.

### Forms

Steps for Testing Times :

1. First Name - hello
2. Last Name - there
3. Submit

Individual Scenarios :

<table>
  <tr>
    <th>Scenario</th>
    <th>Description</th>
    <th>Rendering Time</th>
  </tr>
  <tr>
    <td>useState with Object</td>
    <td>Using an object with useState to manage state</td>
    <td>22.5ms</td>
  </tr>
  <tr>
    <td>useReducer</td>
    <td>Using a reducer with useReducer to manage state</td>
    <td>19.3ms</td>
  </tr>
</table>

| Scenario                          | Description | Rendering Time |
| :-------------------------------- | :---------: | -------------: |
| useCallback with useState         |    Text     |         15.4ms |
| useCallback with useReducer       |    Text     |         23.6ms |
| React.memo                        |    Text     |          9.1ms |
| Without Performance Enhancements  |    Text     |         21.4ms |
| All with Performance Enhancements |    Text     |         18.5ms |

### Data Fetching

Steps for Testing Times :

1. Wait for data to load

Individual Scenarios :

- Batching Set State - 5.4 ms
- Set State with Object - 5.6 ms
- Use Reducer Example - 6.2ms

### All Together

Steps for Testing Times :

1. Description - python
2. Location - new york
3. Submit
4. Wait for data to load

- No Performance Optimizations - 12.6ms
- Performance Optimizations - 12.2ms

### Conclusion

Reference Dan's article and Kent C Dodds

Dan - https://overreacted.io/before-you-memo/
Kent - https://kentcdodds.com/blog/usememo-and-usecallback

Here is the repo link for some code examples :
https://github.com/seanmcquaid/weighing-performance

[title](https://www.example.com)
