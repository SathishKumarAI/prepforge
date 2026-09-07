---
qid: ing_e83222348a__aws__local
question: 'Explain: MetaData Sharding - Based on VideoID — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 440
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:25-05:00'
sources: []
---

**Situation / Task**  
I was tasked with scaling the metadata layer for a global YouTube‑style streaming service that serves over **50 M concurrent viewers**. The legacy monolith stored all video metadata in a single PostgreSQL instance, causing hot spots and latency spikes when new uploads surged during live events.

**Action (Design)**  
1. **Sharding strategy:** Partition the table by `VideoID % 256` → 256 shards spread across **Amazon Aurora Serverless v2** instances. Each shard hosts a read‑write cluster that auto‑scales based on query volume, ensuring no single node becomes a bottleneck.  
2. **Routing layer:** Implemented a lightweight Lambda function behind API Gateway that resolves the correct shard by hashing `VideoID`. This keeps the client SDK simple and removes any hardcoded host logic.  
3. **Cache & CDN:** Populated a global **Amazon CloudFront** distribution with an origin of the Aurora shards, backed by **ElastiCache‑Redis** for 10 ms read latency on hot keys (e.g., view counts).  
4. **Observability:** Instrumented CloudWatch metrics and X-Ray traces to detect shard‑level anomalies in real time.

**Result**  
- *Latency* dropped from 350 ms average to **90 ms** for metadata lookups.  
- *Throughput* increased 5×, handling 200 k concurrent uploads during peak live events without errors.  
- *Cost* fell by **18%** thanks to Aurora Serverless’ pay‑per‑second model and reduced idle capacity.

**Reflection (Bar‑raiser cues)**  
I owned the end‑to‑end redesign, diving deep into query patterns to justify 256 shards versus a larger number. The quantitative impact on latency and cost demonstrates ownership and bias for action. Failure modes—such as shard imbalance—were logged and auto‑balanced via DynamoDB triggers, showing continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
