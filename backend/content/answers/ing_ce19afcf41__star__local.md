---
qid: ing_ce19afcf41__star__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 343
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:30-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping our internal analytics platform that powered the real‑time recommendation engine for a social media client. The existing monolith was choking on tweet ingestion spikes and had no clear strategy for scaling the core services.

**Task:**  
I needed to design the core components—ingestion, storage, and serving layers—that could handle 10 M tweets per day while keeping latency under 200 ms for user requests.

**Action:**  
First, I mapped out a publish/subscribe pipeline using Kafka for decoupled ingestion. For storage I chose a hybrid approach: hot data in Redis Streams for low‑latency reads and cold logs in HDFS with Parquet for batch analytics. The serving layer was split into two microservices—one written in Go for high‑throughput tweet retrieval, the other in Python/Flask for complex recommendation queries. I also introduced a sharded key‑value store (Cassandra) to maintain user timelines, ensuring linear scalability and eventual consistency. Throughout, I used circuit breakers and backpressure mechanisms to protect downstream services during traffic surges.

**Result:**  
The new architecture handled 12 M tweets/day with <180 ms average latency for user feeds, a 40% reduction in infrastructure cost due to better resource isolation, and enabled the recommendation engine to process data 3× faster. I learned that clear separation of concerns, coupled with thoughtful trade‑offs between consistency and availability, is critical when designing large‑scale social platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
