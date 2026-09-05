---
qid: ing_bc92cb0c97__star__local
question: 'Explain: Drawbacks of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 328
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:16-05:00'
sources: []
---

**Situation** – While leading a product‑release for our e‑commerce analytics dashboard, the back‑end was built on a classic REST API that served dozens of microservices. Our frontend team hit a wall when building a new reporting feature: every chart required a separate call to fetch dimensions, metrics, and filters, resulting in 12 round‑trips per page.

**Task** – I had to reduce the number of HTTP requests, cut latency, and give developers a single, flexible query interface that could adapt to evolving UI needs without changing the API contract.

**Action** – I introduced GraphQL on top of our existing REST layer. Using Apollo Server, we defined a unified schema exposing all entities (products, orders, users). For each resolver we mapped the underlying REST calls, caching responses with Redis and batching identical requests via DataLoader. I also set up automatic query complexity analysis to prevent expensive queries from overloading the system.

**Result** – The new GraphQL endpoint cut API calls per page from 12 to 2 on average, slashing load times by ~35 %. The frontend team could now request exactly what they needed in a single payload, and future UI changes required only schema tweaks, not new endpoints. I learned that while REST offers simplicity, GraphQL’s fine‑grained querying and batching can dramatically improve performance when dealing with complex, data‑heavy interfaces.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
