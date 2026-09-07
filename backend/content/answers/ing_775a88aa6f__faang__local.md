---
qid: ing_775a88aa6f__faang__local
question: 'Explain: Application Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 501
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:20-05:00'
sources: []
---

**Clarify**  
You’re asking how the *application tier* of a machine‑learning service can be made scalable. I’ll assume we’re dealing with an inference API that serves millions of predictions per day, backed by model servers and data pipelines. Key assumptions: stateless request handling, horizontal scaling, eventual consistency for model updates, and low latency (<50 ms).

**Approach**  
1. **Stateless micro‑services** – each instance handles one request; load balancer distributes traffic.  
2. **Model caching & sharding** – keep the most‑used models in memory; shard by model ID or user segment.  
3. **Auto‑scaling policies** – metrics on queue depth, CPU/memory usage, and request latency trigger scaling.  
4. **Blue‑green deployment for model updates** – new models served from a separate pool before switching traffic.  
5. **Observability** – distributed tracing (e.g., OpenTelemetry) and metrics dashboards to spot bottlenecks.

**Depth**  
- *Request path*: API Gateway → load balancer → inference service → vector store ↔ database.  
- *Latency budget*: 10 ms for routing, 20 ms for in‑memory inference, 10 ms for DB fetch.  
- *Complexity*: O(1) per request after caching; memory usage grows with number of hot models (O(N)).  
- *Trade‑offs*: In‑memory caching reduces latency but increases RAM cost; sharding improves throughput but adds consistency complexity.

**Edge Cases**  
- Sudden traffic spike → queue overflow, increased latency.  
- Model drift → stale predictions until rollout completes.  
- Distributed denial‑of‑service → need rate limiting and circuit breakers.

**Optimize & Communicate**  
To improve, introduce *model prefetching* based on usage patterns, employ *GPU acceleration* for heavy models, and use *circuit‑breaker* patterns to fallback to older models if the new ones fail. I would present this roadmap as a slide deck: problem statement → current bottlenecks → proposed architecture with diagrams → cost/latency trade‑offs → next steps (pilot, metrics, rollout). This demonstrates clear structure, depth, and actionable insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
