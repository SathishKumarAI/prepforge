---
qid: ing_7baca08593__star__local
question: 'Explain: How GraphQL Differs from REST — REST vs GraphQL - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 350
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:19-05:00'
sources: []
---

**Situation**  
At my previous company we built a mobile app that fetched product listings, user profiles, and order history from our backend. The REST endpoints were heavily over‑fetching: the “/products” call returned 120 KB of JSON, yet the UI only needed 8 fields. Every screen hit multiple endpoints, leading to >30 % higher bandwidth usage during peak traffic.

**Task**  
I was tasked with redesigning the API layer to reduce payload size, improve cacheability, and give front‑end teams fine‑grained control over data without increasing server complexity.

**Action**  
I introduced GraphQL using Apollo Server. I defined a schema that mirrored our existing entities, added resolvers that batched database calls via DataLoader, and leveraged query complexity analysis to guard against expensive requests. On the client side we switched from Axios to Apollo Client, allowing developers to declare exactly which fields they needed per screen. We also set up persisted queries in production to keep the network payloads tiny.

**Result**  
Payload size dropped by 70 % (from 120 KB to ~36 KB on average), and our API hit count fell from 3 calls per page to a single GraphQL call. The app’s data‑loading time improved by 25 %, and we gained a single source of truth for the UI, reducing maintenance overhead. I learned that while REST is simple, GraphQL shines when front‑end flexibility and network efficiency are critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
