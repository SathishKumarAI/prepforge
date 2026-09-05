---
qid: ing_184be1de10__star__local
question: What is GraphQL? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 349
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:21-05:00'
sources: []
---

**Situation** – In my last role I was tasked with refactoring the mobile app’s data layer for a news aggregation platform that had been built on REST. Each article, author and comment required multiple endpoints; the front‑end team complained about over‑fetching (up to 3 KB per request) and the backend was hitting rate limits during peak traffic.

**Task** – I needed to reduce payload size by 40 % while keeping API development time under two weeks, and ensure the mobile app could query nested data in a single round trip.

**Action** – I introduced GraphQL. First, I set up Apollo Server on Node.js, defining a schema that mirrored our MongoDB collections but allowed clients to request only the fields they needed. I implemented resolvers with DataLoader to batch database calls and used Redis caching for hot queries. On the mobile side, I swapped Retrofit for Apollo‑Android, enabling single‑request fetching of article + author + top comments. I also added introspection tests and automated schema validation in CI.

**Result** – The average payload dropped from 3 KB to 1.2 KB per request, cutting network usage by ~60 %. API latency improved because we eliminated multiple round trips; the app’s perceived load time fell from 4.5 s to 2.8 s on a 3G connection. I learned that GraphQL’s fine‑grained queries and batching can dramatically improve both developer velocity and user experience when properly coupled with caching layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
