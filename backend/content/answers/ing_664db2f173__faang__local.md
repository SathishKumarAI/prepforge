---
qid: ing_664db2f173__faang__local
question: 'Explain: Protect the System Under Load — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 496
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:10-05:00'
sources: []
---

**Clarify**

You’re asked how to keep a client‑server ML service stable under heavy load—think inference serving at scale.  
Assumptions:  
* Stateless request/response API (REST/gRPC).  
* Model weights are large but loaded once per worker.  
* Clients generate bursts; we need low latency and high throughput.

**Approach**

1. **Horizontal scaling of workers** – run multiple inference containers behind a load balancer.  
2. **Request queuing & back‑pressure** – use a message broker (Kafka/RabbitMQ) to buffer spikes.  
3. **Resource isolation** – GPU/CPU pinning, memory limits per pod; use Kubernetes HPA for auto‑scaling.  
4. **Caching** – memoize frequent predictions with Redis or in‑memory LRU.  
5. **Graceful degradation** – fall back to a lighter model or approximate inference when resources are saturated.

**Depth**

* Load balancer distributes requests round‑robin; latency < 50 ms for baseline traffic.  
* Each worker loads the model once (O(1) per request).  
* Queue size limits prevent OOM: `max_queue_size = 1000`.  
* HPA scales pods based on CPU/Memory > 70 % and queue length.  
* Cache hit ratio ~30 %; reduces GPU usage by 40 %.  
* Complexity: O(N) in number of workers; queue operations O(1).  
* Trade‑off: added latency from queuing vs. higher throughput.

**Edge Cases**

* Sudden traffic spike > cap → queues back‑pressure to clients (429/503).  
* Model reload failure → fallback to previous checkpoint.  
* Cache eviction policy errors → stale predictions; use versioned keys.

**Optimize & Communicate**

Explain that the system balances *throughput*, *latency*, and *resource efficiency*. Highlight how autoscaling reacts to load, queuing protects against overload, and caching cuts GPU usage. Conclude with monitoring: Prometheus metrics (queue depth, cache hit ratio) trigger alerts; A/B testing on fallback models ensures quality. This structured plan demonstrates clear problem framing, sound architecture, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
