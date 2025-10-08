# ShopBest  
A platform which enables you to search and compare goods from different platform

## Installation  
```
npm install
npm start
```

## Design Charts
[Check here for system design](https://lucid.app/lucidchart/58692dfa-5e67-418c-a747-cf526e485fa1/edit?view_items=fLWLGEIqqNfy&invitationId=inv_db6c898e-58eb-4afe-9006-f640e96ffad4)

## Update
### 2025-8-9
craete the whole layout UI/UX and react component using<br>
[Figma make](https://www.figma.com/make/b7TPhDSmWBc1zlZmMk8BMe/Untitled?node-id=0-4&t=V1aVwm6pnx9EWs1n-0), the file has some compatible issue with local environment, but it can be easily fixed by [depcheck](https://www.npmjs.com/package/depcheck). Also, the code generate by AI runs in tailwind and TS
### 2025-8-11
build a backend server using Node.js and fetch data from [SerpApi](https://serpapi.com/), the data is stored in Redux<br>
### 2025-8-12
System design for search input to show results for suggestions, use suggestions for detailed product list<br>
### 2025-8-13
Add auto complete suggestions in search input and get backend data from it<br>
### 2025-8-16
Add side bar and top navi bar function<br>
### 2025-8-18
Make side bar and top bar working<br>
Up to this time, this project could work and function properly. However, it still have many optential problems and uncompleted optimization
1. ~~variable storage may need clearify and optimize<br>~~
2. ~~responsible layout<br>~~
3. find bottleneck of entir system and optimize it<br>
4. abstract shared UI and store logic<br>
5. filter and query logic still have some bug<br>
6. Config and running in online environment<br>
7. Theme change<br>
8. Authority and security<br>
9. Implement the code in React Native and test on both IOS and android<br>
10. Optimize SEO<br>
11. swith between different backend data<br>
### 2025-8-21
Optimize variable management and avoid cyclic update by judging the source of update<br>
### 2025-8-29
Implement Responsive layout to made it fit mobile platform<br>
1. use media query to adjust layout with different side screen<br>
2. use rem and vw vh to adjust font size<br>
3. implement flex shrink and grow to adjust width of side bar<br>
### 2025-9-4
There is a issuse then I try to delete filter. eg:
```
query1: {
    q: razer
    response: {
        filter: nearby
        shoprs: CAESBEoCGAEYAyoFcmF6ZXIyEwgGEgdPbiBzYWxlGAIiBEoCGAEyDAgDEgZOZWFyYnkYAliLtSBgAg
    }
} 
query2: {
    q: razer + nearby
    shoprs: CAESBEoCGAEYAyoFcmF6ZXIyEwgGEgdPbiBzYWxlGAIiBEoCGAEyDAgDEgZOZWFyYnkYAliLtSBgAg
    response: {
        filter: onsale
        shoprs: CAESDZoBCgoIEAA4AUAFSAEYFCoFcmF6ZXIyJQgUEgxHZXQgaXQgdG9kYXkiDZoBCgoIEAA4AUAFSAEqBBABGAFgAg
    }
} 
query3: {
    q: razer + nearby + onsale
    shoprs: CAESDZoBCgoIEAA4AUAFSAEYFCoFcmF6ZXIyJQgUEgxHZXQgaXQgdG9kYXkiDZoBCgoIEAA4AUAFSAEqBBABGAFgAg
} 
```
As you can see, razer + nearby + onsale is not independent parameters, in fact, they are additive on previous results. That would introduce a new problem, if I delete nearby, I can simply return to previous page. But what if I want to delete onsale? There is no way that I can get shoprs for single onsale filter without extra query.<br>
<hr>
I check some blog and article, [Filtering Google Shopping results](https://serpapi.com/blog/filtering-google-shopping-results/?utm_source=chatgpt.com), in previous, filters act independently and combine based on query. However, with more and more products in Google, it would cause high latency to filter them one by one, so google use a strategy that narrow down searach scope before next query arrives.<br>
In the end, there would be two methods<br>
1. when user delete filters, if it is the last one, go back to previous page, if it is not, re-search and remove all filters<br>
2. when user delete filters, use current filters to query for shoprs(extra api) and search using that para<br>
I prefer using the second option as it handle all operation with same logic, which made the system more consistency<br>

### 2025-10-7
Implement a autocomplete on AWS, using DynamoDB and API Gateway to search based on prefix of terms.