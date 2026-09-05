---
qid: ing_93aba3eb59__star__local
question: 'Explain: Subscriptions → Real-Time Updates — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 385
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:07-05:00'
sources: []
---

**Situation** – In a fintech app I was tasked with adding live market‑price feeds for users’ portfolios. The existing backend exposed a set of REST endpoints that returned the last snapshot every minute; our analytics team needed sub‑second updates without polling.

**Task** – Build a subscription system that pushes price changes to clients in real time, while keeping bandwidth low and ensuring compatibility with the legacy REST API.

**Action** – I evaluated GraphQL subscriptions (WebSocket + Apollo) versus a lightweight REST‑over‑WS approach. I benchmarked payload size, latency, and server load using a mock data stream of 10 k tickers. With GraphQL, each subscription carried an opaque connection ID; with REST‑over‑WS we could push only the delta. I prototyped both: GraphQL delivered updates in ~120 ms but sent 2× the payload (including type metadata); REST‑over‑WS achieved <90 ms latency and cut bandwidth by 60%. I integrated a hybrid solution: keep the core REST API for batch pulls, add a dedicated WebSocket endpoint that streams JSON deltas. Clients subscribe with a simple “watch” message; the server pushes only changed fields.

**Result** – The new system reduced client‑side CPU usage by 35 % and cut data transfer from 15 MB/day to 6 MB/day for a user base of 50k. We also lowered API costs, as we no longer needed expensive GraphQL query parsing. I learned that while GraphQL is elegant for complex schemas, a tuned REST‑over‑WS approach can outperform it in high‑frequency real‑time scenarios when payload size matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
