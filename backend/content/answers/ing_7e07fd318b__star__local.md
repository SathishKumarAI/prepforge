---
qid: ing_7e07fd318b__star__local
question: 'Explain: How GraphQL Works — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 293
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:42-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping the product‑recommendation API for a mobile app that served 1 M daily users. The existing REST endpoints returned huge payloads, causing sluggish load times and excessive data usage on cellular networks.

**Task** – My goal was to reduce bandwidth by allowing clients to request exactly what they needed while keeping the API simple for developers. I decided to switch from the old REST architecture to GraphQL.

**Action** – I designed a single `/graphql` endpoint and defined a schema that mirrored our recommendation domain (queries, mutations, subscriptions). Using Apollo Server with Node.js, I mapped resolvers to existing microservices. The client could now send queries like `{
  product(id: "123") { name price rating reviews{ id comment } }
}` which returned only the fields required. I also added persisted queries and caching via DataLoader to batch database calls, cutting duplicate round‑trips.

**Result** – After deployment, payload size dropped by ~60 %, API latency improved from 350 ms to 140 ms, and mobile data usage fell by 40 %. I learned that GraphQL’s flexibility can dramatically improve performance when combined with proper batching and caching strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
