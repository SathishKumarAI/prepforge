---
qid: ing_230ff663cb__faang__local
question: 'Explain: Load Balancers — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 534
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:44-05:00'
sources: []
---

**Load Balancer (ML context)**  
A load balancer distributes incoming ML inference traffic across multiple model-serving instances or GPU nodes so that no single resource becomes a bottleneck.  

---

### 1️⃣ Clarify  
- *Problem*: We need to keep latency low and throughput high for real‑time predictions while avoiding over‑utilization of any GPU/CPU node.  
- *Assumptions*:  
  - Multiple identical model replicas exist (stateless).  
  - Traffic is bursty; we want graceful degradation.  
  - Metrics (latency, CPU/GPU usage) are available in real time.

### 2️⃣ Approach  
1. **Health checks**: Periodically ping each replica to confirm availability.  
2. **Routing strategy**: Use round‑robin for simplicity or weighted least‑conn/CPU‑aware for dynamic scaling.  
3. **Session stickiness**: If the model is stateful (e.g., caching embeddings), use cookie/session ID hashing.  
4. **Auto‑scaling hooks**: Trigger new replicas when average latency > threshold.

### 3️⃣ Depth  
- *Algorithm*: Weighted round‑robin where weight = 1 / (current queue length + 1).  
- *Complexity*: O(1) per request; memory overhead is O(N) for N replicas.  
- *Trade‑offs*: Simple round‑robin is fast but can overload a hot node; weighted schemes add slight latency but improve fairness.

### 4️⃣ Edge Cases  
- **Replica failure**: Health check fails → route to healthy nodes only.  
- **Cold start**: New replica may be slow initially → temporarily give it lower weight.  
- **Skewed traffic**: Certain requests trigger heavier computation → monitor per‑request cost and adjust weights.

### 5️⃣ Optimize & Communicate  
- Add *predictive scaling*: Use historical load to spin up replicas before a spike.  
- Expose metrics via Prometheus/Grafana for observability.  
- Narrate decisions as “Given our latency SLA, we’ll start with round‑robin and monitor queue lengths; if the 95th percentile exceeds X ms, we switch to weighted least‑conn.”  

This structured approach aligns with FAANG interview expectations: clear problem framing, a well‑thought plan, technical depth, edge‑case awareness, and communication of optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
