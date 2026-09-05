---
qid: ing_1361e11964__star__local
question: 'Explain: Benefits of GraphQL — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 330
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:09-05:00'
sources: []
---

**Situation:**  
In my last role I was leading a mobile app that pulled product data from a legacy REST API. Every screen required multiple endpoints—`/products`, `/categories`, `/reviews`. The client team complained the network usage was high and the UI lagged when loading complex pages.

**Task:**  
I had to redesign the backend communication so the app could fetch exactly what it needed in one round‑trip, reduce payload size, and improve developer experience for future features.

**Action:**  
I introduced GraphQL. I defined a schema with `Product`, `Category`, and `Review` types, then wrote resolvers that batched database calls using DataLoader to avoid N+1 queries. On the client side, we switched from multiple Axios requests to Apollo Client, crafting queries that requested only the fields required for each screen (e.g., `id`, `name`, `price`, nested `reviews { rating }`). We also set up persisted queries and added a simple caching layer.

**Result:**  
The average payload per request dropped from ~80 KB to 25 KB, cutting data usage by 70%. The number of network round‑trips for a product page went from three to one. Load times improved from 3.2 s to 1.4 s, and the client team could add new UI components without touching the API layer. I learned that GraphQL’s fine‑grained querying and resolver batching can dramatically streamline data flow in mobile environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
