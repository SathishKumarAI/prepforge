---
qid: ing_cecb07b415__star__local
question: 'Explain: Rate Limits to Implement — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:38-05:00'
sources: []
---

**Situation**  
At my previous company we launched a public-facing API that generated creative text from a large language model. Within the first week, several users were sending thousands of requests per minute, causing latency spikes and an unexpected surge in token usage that threatened to exceed our compute budget.

**Task**  
I had to design a rate‑limiting strategy that protected system stability, upheld our cost constraints, and maintained a fair user experience without compromising the model’s safety controls (e.g., content filters and hallucination mitigation).

**Action**  
I implemented a token bucket algorithm using Redis Streams for distributed coordination. Each client was allotted 100 requests per minute with burst capacity of 20. I integrated this limiter into our FastAPI gateway, adding a custom middleware that logs exceeded limits to an alerting pipeline (Prometheus + Grafana). To balance safety and governance, the limiter also enforced stricter thresholds for users flagged as high‑risk (e.g., historical misuse) by tying the bucket size to a dynamic risk score. I wrote unit tests with pytest and performed load testing in Locust to validate that latency stayed below 200 ms under peak conditions.

**Result**  
After deployment, we reduced average response time from 350 ms to 140 ms during traffic spikes and cut token consumption by 35 %, keeping us within budget. The rate‑limit logs helped us identify abusive patterns early, improving our overall safety posture. I learned that fine‑grained, risk‑aware throttling is essential for both system resilience and responsible AI governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
