---
qid: ing_76ff725bf2__star__local
question: Which one should you use? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 284
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:56-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had an analytics dashboard that pulled user transaction data from multiple microservices. The team was pulling over 30 endpoints per page load, and the front‑end developers complained about latency and redundant data.

**Task:** I needed to redesign the API layer so the dashboard could retrieve exactly what it required in one round trip while keeping our backend infrastructure stable and secure.

**Action:** I evaluated REST’s rigid endpoint structure against GraphQL’s flexible queries. I set up a proof‑of‑concept GraphQL server using Apollo Server, added resolvers that aggregated data from existing REST services, and introduced persisted queries to mitigate payload size. We also implemented caching at the DataLoader layer to batch database calls. On the front end, we switched to Apollo Client, enabling developers to request only the fields they needed.

**Result:** The new GraphQL endpoint cut the number of HTTP requests per dashboard load from 30+ to 1, reducing latency by 60 % and bandwidth usage by 45 %. Developer satisfaction rose, and the system now scales better for future feature additions. I learned that choosing between REST and GraphQL hinges on data granularity needs and the complexity of client requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
