---
qid: ing_0c4b2d24bf__star__local
question: 'Explain: What Is GraphQL? REST vs. GraphQL'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 387
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:14-05:00'
sources: []
---

**Situation:**  
At my last startup we had a mobile app that fetched user data from a legacy REST API. Every screen hit multiple endpoints: `/users`, `/posts`, `/comments`. The network latency was high—about 350 ms per call—and the client over‑fetched data (e.g., pulling all comments when only the first ten were needed). Our engineering lead flagged this as a blocker for the upcoming quarterly release.

**Task:**  
I was tasked with redesigning the API layer to reduce payload size, cut round‑trips, and make it easier for front‑end developers to request exactly what they need—all while keeping the backend logic unchanged.

**Action:**  
I introduced GraphQL using Apollo Server on Node.js. I defined a schema that mirrored our existing database models but added query arguments (`first`, `after`) for pagination. On the client side, we switched to Apollo Client and wrote a single `GET_USER_PROFILE` query that fetched the user’s basic info plus only the first ten posts and their comments in one round‑trip. I also set up persisted queries to avoid sending the full query string over the wire.

**Result:**  
The mobile app’s average data transfer dropped from 1.2 MB per screen to 350 KB, cutting load times by ~45 %. The team could iterate faster because adding a new field in GraphQL didn’t require changing endpoints—just expanding the schema. I learned that GraphQL shines when clients need flexible, fine‑grained data, whereas REST is simpler but can lead to over‑fetching or under‑fetching if not carefully designed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
