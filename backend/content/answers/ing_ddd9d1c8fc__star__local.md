---
qid: ing_ddd9d1c8fc__star__local
question: 'Explain: What to Log — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 341
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:58-05:00'
sources: []
---

**Situation** – In my last role as a ML Ops engineer at a fintech startup, we were launching an automated loan‑approval model that had to comply with new regulatory guidelines on bias and explainability. The risk team flagged that our current logging was insufficient for post‑deployment audits.

**Task** – I needed to design a comprehensive logging framework that captured every inference, the underlying data features, and any mitigation steps taken by the safety module, all while keeping performance overhead below 5 ms per request.

**Action** – I first mapped the regulatory “right to explanation” requirements onto a schema: each log entry included user ID (hashed), model version, input feature vector, confidence score, and a flag for any counter‑measure invoked. Using Kafka as a low‑latency stream, I built a sidecar service that enriched logs with metadata from our governance API (e.g., bias risk score). I implemented rolling retention policies in Elasticsearch to keep raw data for 90 days while archiving older logs to S3 Glacier. To validate, I ran a synthetic load test: latency increased by only 2.7 ms per request and CPU usage stayed under 12 %.

**Result** – The new system enabled auditors to trace every decision within seconds, reducing audit time from two weeks to three days. We passed the compliance review with no penalties, and the team adopted the same logging pattern for all future models, improving overall safety culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
