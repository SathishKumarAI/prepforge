---
qid: ing_6b3f63f608__star__local
question: 'Explain: AdTech & Personalization — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 363
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:49-05:00'
sources: []
---

**Situation:**  
At my last role, our ad‑tech team was tasked with delivering real‑time personalized display ads for a large e‑commerce client. Their existing key/value store couldn't handle the millions of user events per day, and latency spikes were hurting CPM rates.

**Task:**  
I needed to design a low‑latency storage layer that could ingest high‑velocity clickstream data, support quick aggregation of user interests, and feed those signals into our recommendation engine—all while keeping cost under budget.

**Action:**  
I chose Apache HBase as the backbone. First, I modeled each user as a row key and stored recent interaction metrics (page views, time spent) in column families keyed by category. Using HBase’s region‑splitting, we automatically balanced load across 30 nodes. For real‑time reads, I implemented Bloom filters to avoid unnecessary disk lookups and leveraged the Put/Batch API for bulk ingestion of Kafka events. To enable quick personalization, I wrote a MapReduce job that pre‑aggregated top interests per user into a secondary table, reducing downstream compute time by ~70%. Finally, I set up JMX monitoring and tuned memstore flush sizes to keep read latency under 20 ms.

**Result:**  
The new HBase layer processed 5 M events/second with <25 ms query latency. The recommendation engine’s click‑through rate improved from 1.8% to 3.4%, a 90% lift in revenue per user. I learned that thoughtful schema design and native HBase features can turn a noisy clickstream into actionable personalization at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
