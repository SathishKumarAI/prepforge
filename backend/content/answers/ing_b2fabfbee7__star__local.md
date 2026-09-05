---
qid: ing_b2fabfbee7__star__local
question: 'Explain: Part 2 - Register a Query — How GraphQL Works at LinkedIn'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 340
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:39-05:00'
sources: []
---

**Situation** – At LinkedIn I was tasked with adding a new profile‑view analytics feature that needed real‑time data from our internal GraphQL API. The existing query engine was heavily cached and didn’t expose the fine‑grained metrics we required.

**Task** – I had to register a custom query on the GraphQL service, ensuring it could accept dynamic filters (date range, user segment) while staying within our 30 ms latency SLA for UI rendering.

**Action** – First, I defined a new schema type `ProfileViewStats` and added a resolver that pulled data from the ClickHouse analytics store. To register the query, I used LinkedIn’s internal GraphQL registry service: created a YAML descriptor with the operation name, input arguments, and caching policy (`noCache`). Then I updated our service discovery config so that the frontend could resolve the new endpoint via the `QueryRegistry`. I also added a rate‑limit guard in the resolver to throttle burst traffic, and instrumented Prometheus metrics to monitor latency. Finally, I ran a load test with 5k concurrent requests, tuning the ClickHouse query to use indexed columns.

**Result** – The new query returned within 22 ms on average under peak load, dropping UI lag from 120 ms to 35 ms. We saw a 17% increase in profile‑view engagement metrics over two weeks, and I documented the registration process for future feature teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
