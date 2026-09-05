---
qid: ing_9a19ea9dc4__star__local
question: 'Explain: Use GraphQL if: — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 360
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:55-05:00'
sources: []
---

**Situation:**  
At my last company we built a mobile app that showed real‑time product inventory and pricing for thousands of SKUs across multiple warehouses. The backend was originally a REST API; every screen hit three endpoints—`/products`, `/warehouses`, and `/prices`. On the device we saw 2–3 s load times, high data usage, and stale data after users changed filters.

**Task:**  
I had to redesign the data layer so that each view could request exactly what it needed, reduce round‑trips, and enable real‑time updates without rewriting every endpoint.

**Action:**  
We migrated to GraphQL with Apollo Server. I designed a schema exposing `product(id)`, `products(filter)` and `price(productId, warehouseId)` fields. On the client we used Apollo Client’s cache and subscriptions; the mobile app could fetch a product list with its current price in one query:  
```graphql
query Products($filter:{String}) {
  products(filter:$filter){
    id name
    price{ amount currency }
  }
}
```
For real‑time stock changes we added a subscription that pushed only affected items. We also introduced schema stitching to keep legacy REST services alive while exposing them through GraphQL resolvers.

**Result:**  
Load times dropped from ~2.5 s to <600 ms, data usage fell by 45%, and the app now shows live inventory without page reloads. I learned that choosing GraphQL when multiple resources are tightly coupled and clients need fine‑grained control can drastically improve UX and reduce backend complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
