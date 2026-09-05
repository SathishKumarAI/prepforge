---
qid: ing_710eedfa04__star__local
question: 'Explain: Supported Services — Pubsubmodel'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 336
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:35-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an automated fraud‑detection pipeline that needed to ingest transaction streams from multiple payment gateways in real time. The existing batch ETL was too slow – alerts took hours to surface.

**Task**  
I had to design a low‑latency data ingestion layer that could scale with peak traffic (up to 50k events per second) and feed the ML model for instant scoring, while ensuring reliability and observability.

**Action**  
I chose Google Cloud Pub/Sub as our pub/sub backbone. I defined a topic hierarchy: `transactions.raw` for raw logs and `transactions.enriched` for pre‑processed features. Using Dataflow (Apache Beam), I built two streaming pipelines—one that parsed the raw JSON, enriched it with user profile lookups via BigQuery, and published to the enriched topic; another that subscribed to `transactions.enriched`, ran a TensorFlow model served on Vertex AI, and wrote predictions back to Cloud Storage. I added dead‑letter topics for malformed messages, set retry policies, and instrumented metrics (latency, drop rate) in Stackdriver.

**Result**  
Latency dropped from 30 minutes to under 2 seconds per transaction, increasing the fraud detection window by 99%. The system handled a 200% traffic spike during a holiday promotion with no outages. I learned that careful topic design and observability are key to scaling ML pipelines in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
