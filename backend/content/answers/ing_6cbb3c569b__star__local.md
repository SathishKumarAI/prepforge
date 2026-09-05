---
qid: ing_6cbb3c569b__star__local
question: 'Explain: AWS AppSync — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 307
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:31-05:00'
sources: []
---

**Situation:**  
In a recent product launch I was tasked with building an intelligent recommendation feature for our e‑commerce mobile app. The data pipeline involved pulling user interaction logs from DynamoDB, running a nightly inference job on SageMaker to generate personalized scores, and serving those scores in real time to the app.

**Task:**  
I needed to expose the inference results via a low‑latency API that could scale automatically with traffic spikes during peak shopping periods while keeping operational overhead minimal.

**Action:**  
I chose AWS AppSync as the GraphQL gateway. I defined a schema where each `Recommendation` type referenced a DynamoDB resolver and an AWS Lambda data source that invoked our SageMaker endpoint on demand. Using VTL mapping templates, I merged real‑time score data with user metadata in a single query, eliminating round‑trips. AppSync’s built‑in caching (TTL 60 s) reduced calls to the inference model by ~70%. I also enabled conflict resolution with DynamoDB Streams to keep client caches fresh.

**Result:**  
The API handled 200k concurrent users during Black Friday with <50 ms average latency, and cost dropped from $1.20 per request (REST + Lambda) to $0.32 per request. The team learned that serverless GraphQL can dramatically simplify data orchestration for ML workloads while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
