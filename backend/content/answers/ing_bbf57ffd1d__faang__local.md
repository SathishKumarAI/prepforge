---
qid: ing_bbf57ffd1d__faang__local
question: 'Explain: What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 505
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:06-05:00'
sources: []
---

**Clarify**  
You’re asking for a system‑design explanation of *caching* in the context of ML workloads—i.e., how we temporarily store data (model parameters, feature vectors, inference results) to reduce latency or compute cost. I’ll assume you want: why it’s needed, what components it involves, and trade‑offs.

**Approach**  
1. Define caching goals (latency, throughput, cost).  
2. Map the ML pipeline stages that benefit: data ingestion → feature store → model inference.  
3. Identify cache layers (in‑process, local SSD, distributed key‑value stores).  
4. Discuss consistency models and eviction policies.

**Depth**  
Caching stores a copy of expensive artifacts so subsequent requests hit fast storage. For ML:

| Layer | What’s cached | Typical backend | Consistency |
|-------|---------------|-----------------|-------------|
| **Feature store cache** | Pre‑computed feature vectors | Redis, Memcached | Read‑through; TTL |
| **Model artifact cache** | Serialized model weights | EFS or S3 + local SSD | Write‑once (immutable) |
| **Inference result cache** | Prediction outputs for recurring inputs | In‑process LRU or distributed KV | Eventual consistency |

Eviction: LRU for hot features, LFU for stale models. Coherency is usually *write‑through* on model updates; feature caches are refreshed by a background job (e.g., Kafka stream).  

**Edge cases**  
- **Stale data**: If training data changes faster than cache TTL, predictions become inaccurate.  
- **Cold start**: First inference loads model into RAM → latency spike.  
- **Memory pressure**: Over‑aggressive caching can OOM containers.

**Optimize & Communicate**  
Start with a lightweight in‑process LRU for small models; benchmark hit rate (≥95 % ideal). If hit rate drops, add a distributed cache. Use metrics (cache hit ratio, latency percentiles) to iterate. Explain that the trade‑off is between *cost of keeping replicas* vs *latency gains*, and that in ML we often favor *immutable* caches for model artifacts to simplify consistency. This narrative shows clear problem framing, concrete design choices, and measurable KPIs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
