---
qid: ing_3c91cddb4a__faang__local
question: 'Explain: Distributed Systems — Software Engineer Interview Learning Resources
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 570
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:04:50-05:00'
sources: []
---

**Distributed‑Systems Design for ML Engineers – Study Guide**

---

### 1️⃣ Clarify  
*Goal:* Build a scalable ML inference pipeline that can serve millions of requests per second with sub‑50 ms latency and 99.9 % availability.  
*Assumptions to confirm:*  
- Model size (e.g., 2 GB) & update frequency.  
- Traffic pattern (peak vs. tail).  
- Budget constraints for compute/infra.  

---

### 2️⃣ Approach  
1. **Requirements & Constraints** – Write a non‑functional spec (latency, throughput, consistency).  
2. **High‑level Architecture** – Load balancer → request router → inference microservice cluster + cache layer → storage for models & metrics.  
3. **Component Design** – Detail each service: model registry, versioning, autoscaling policy, health checks.  
4. **Data Flow & Fault Tolerance** – Use message queues (Kafka) for async updates, circuit breakers, retries.  
5. **Observability** – Metrics, tracing, alerting.

---

### 3️⃣ Depth  
- **Model Serving:** Containerized inference workers (e.g., TorchServe). Use *model warm‑up* and *GPU pooling* to reduce cold starts.  
- **Caching:** In‑memory cache (Redis) for frequent inputs; use LRU + Bloom filters to avoid model lookups.  
- **Scalability:** Horizontal scaling via Kubernetes, autoscaler triggered by CPU/latency thresholds.  
- **Consistency:** Stale‑read tolerant – serve older model version until new one fully warmed.  
- **Complexity:** O(1) request routing; cache hit O(1), miss O(log n) for lookup.  
- **Trade‑offs:** GPU vs. CPU cost, latency vs. consistency.

---

### 4️⃣ Edge Cases  
- Sudden traffic spike → burstable scaling limits.  
- Model drift or corruption → fallback to previous stable version.  
- Cache stampede on cold start – mitigate with request coalescing.  
- Network partitions – ensure graceful degradation.

---

### 5️⃣ Optimize & Communicate  
1. **Profile**: Use latency histograms to spot outliers.  
2. **Iterate**: Start with a single node, add replication only after bottleneck analysis.  
3. **Explain Choices**: “We chose Redis for cache because…”, “Circuit breaker protects downstream services from cascading failures.”  

> *Result:* A production‑ready ML inference system that balances speed, reliability, and maintainability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
