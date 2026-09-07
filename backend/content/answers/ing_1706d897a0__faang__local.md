---
qid: ing_1706d897a0__faang__local
question: 'Explain: 125: System Design Interview — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 549
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:11-05:00'
sources: []
---

**Clarify**

> *What is the goal of the “ChatGPT system design” interview?*  
We’re asked to sketch a scalable, low‑latency chatbot service that mimics ChatGPT’s behavior (contextual conversation, few‑second response, high throughput).  
Assumptions:  
- We have access to pre‑trained transformer models (e.g., GPT‑3/4).  
- Budget allows for GPU clusters but we must keep cost per request < $0.01.  
- Users may have long conversations (~200 turns) and multiple concurrent sessions.

**Approach**

1. **Request pipeline** – API gateway → session manager → inference engine.  
2. **Session state** – store recent tokens in Redis (TTL 30 min).  
3. **Inference layer** – model shards on GPUs, using model‑parallelism + batching.  
4. **Caching** – cache frequent prompts/answers in Memcached; use speculative decoding to reduce latency.  
5. **Monitoring & autoscaling** – Prometheus metrics → K8s HPA.

**Depth**

- *API*: REST or gRPC with protobuf, versioned endpoints (`POST /chat`).  
- *Session manager*: assigns a unique `session_id`, pulls/updates token window from Redis (O(1)).  
- *Inference engine*: each GPU hosts a shard; we forward‑prop the prompt to all shards and aggregate logits. Batch size 8–16 for GPU utilization; latency ≈ 200 ms per request.  
- *Cost*: 8 V100 GPUs @ $3/h, 4k tokens/s → ~$0.008/req.  
- *Scalability*: stateless inference pods behind a load balancer; Redis cluster shards across nodes.

**Edge Cases**

- Extremely long context > 32K tokens: truncate oldest turns or use hierarchical encoder.  
- Burst traffic (e.g., 10k QPS): autoscaling kicks in, but GPU queue may grow → fallback to CPU inference with higher latency.  
- Model failure: circuit breaker routes to a degraded model version.

**Optimize & Communicate**

Explain trade‑offs: batching improves throughput at the cost of slightly higher latency; sharding keeps memory per GPU manageable. Highlight that monitoring alerts on token count, GPU utilization, and response time allow us to adjust batch size or add shards in real time. Conclude with a diagram (omitted here) and note future enhancements—prompt caching, better context compression, and reinforcement learning for dynamic routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
