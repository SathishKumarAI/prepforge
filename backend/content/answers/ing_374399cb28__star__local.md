---
qid: ing_374399cb28__star__local
question: 'Explain: Three Core Functionalities of GraphQL — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 381
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:49-05:00'
sources: []
---

**Situation:**  
While leading a data‑science team at a fintech startup, we had to expose our recommendation engine to multiple front‑end apps (web, mobile, partner API). The existing REST endpoints were fragmented: each product feature required its own URL and returned fixed JSON shapes that forced the clients to make several round‑trips.

**Task:**  
Design an interface that would let any client request exactly the fields it needed, reduce over‑fetching, and support real‑time updates for the mobile app without breaking legacy consumers.

**Action:**  
I introduced GraphQL with its three core functionalities:

1. **Declarative data fetching** – clients send a single query describing the shape of data they want; I defined resolvers that stitched together our recommendation, user profile, and transaction services using `async/await` in Node.js.
2. **Strongly typed schema** – we used Apollo Server’s SDL to expose a type system that auto‑generated TypeScript types, catching mismatches at compile time and enabling IDE autocompletion.
3. **Real‑time subscriptions** – leveraging WebSocket support in GraphQL, I added a subscription for “new recommendation” events so the mobile app could push updates instantly.

I also built a fallback REST gateway (via Apollo Federation) to preserve existing endpoints while migrating clients gradually.

**Result:**  
Within three weeks, the mobile app’s data payload dropped from 4 KB per request to 1.2 KB, cutting network latency by ~35%. The subscription layer reduced server polling overhead by 70%, freeing compute for batch jobs. I learned that GraphQL’s flexibility can coexist with REST when phased correctly, and that a well‑typed schema dramatically speeds up integration testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
