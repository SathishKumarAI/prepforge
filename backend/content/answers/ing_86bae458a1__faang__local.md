---
qid: ing_86bae458a1__faang__local
question: 'Explain: So we had to take some extraordinary — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 480
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:08-05:00'
sources: []
---

**Clarify**  
You’re asked to describe how a large‑scale video platform like YouTube can handle exponential traffic growth while keeping latency low and costs under control. I’ll assume we need to keep the end‑to‑end request path fast (≤ 200 ms), support millions of concurrent streams, and serve content globally.

**Approach**  
1. **Content Distribution Network (CDN)** – cache videos at edge servers worldwide.  
2. **Micro‑service architecture** – split ingestion, transcoding, recommendation, playback into independent services that can scale horizontally.  
3. **Stateless API gateways** – route requests to the nearest service instance and handle load balancing.  
4. **Auto‑scaling & spot instances** – spin up compute during peak hours; shut down when idle.  
5. **Observability** – distributed tracing, metrics, alerts to detect latency spikes early.

**Depth**  
*CDN*: Use a multi‑layer cache (client, edge, regional). Employ intelligent eviction (LRU + popularity) and prefetching based on watch patterns.  
*Transcoding*: Parallelize per‑segment, use GPU clusters; store multiple bitrates in object storage with “range” support for adaptive streaming.  
*Recommendation*: Run inference in batch for cold starts, serve via a low‑latency model cache (Redis).  
*Data pipeline*: Kafka for ingestion, Spark for analytics, Cassandra/BigTable for session state.  
Complexity: O(1) request routing; overall cost ≈ $X per TB served, scalable by adding edge nodes.

**Edge cases**  
- Sudden traffic spikes from viral content → auto‑scale triggers may lag.  
- Regional censorship or network failures → fallback to origin.  
- Content ownership changes requiring rapid revocation of cached copies.

**Optimize & communicate**  
To reduce cost, we could adopt *edge computing* for transcoding (run on CDN nodes), and use *serverless functions* for lightweight micro‑services. I’d present this as a layered diagram, quantify latency reductions, and show how each layer contributes to reliability. This narrative aligns with FAANG’s emphasis on clear structure, depth, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
