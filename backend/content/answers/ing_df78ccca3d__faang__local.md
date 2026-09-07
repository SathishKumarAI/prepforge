---
qid: ing_df78ccca3d__faang__local
question: 'Explain: Terminologies/Algorithms — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 659
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:18:44-05:00'
sources: []
---

**Clarify**  
You’re asking how a *load balancer* fits into machine‑learning systems: the components it sits between, why we need it, and which balancing algorithms are common in practice.

---

**Approach**  
1. Define the typical ML workflow that benefits from load balancing (data ingestion → feature store → model inference).  
2. List core terminologies (request, backend pool, health check, session affinity).  
3. Enumerate the most used algorithms and when each shines.  
4. Touch on implementation considerations in cloud‑native stacks.

---

**Depth**

| Term | Meaning |
|------|---------|
| **Load Balancer (LB)** | A network device/service that distributes incoming ML traffic across multiple inference or training workers to avoid bottlenecks. |
| **Backend Pool** | The set of compute nodes (e.g., GPU containers) that actually execute the model. |
| **Health Check** | Periodic probes that ensure a node can serve requests; unhealthy nodes are removed from rotation. |
| **Session Affinity (Sticky Sessions)** | Routing logic that keeps a user’s requests to the same backend, useful for stateful models or caching. |

**Algorithms**

1. **Round‑Robin** – simple cyclic distribution; great for homogeneous workers, O(1) time.  
2. **Least Connections / Weighted Least Load** – routes to the node with fewest active jobs; adapts to variable inference latency.  
3. **Consistent Hashing** – maps request keys (e.g., user ID) to backends; minimizes re‑routing on scaling events, ideal for cache‑friendly models.  
4. **Latency‑aware / Predictive LB** – uses real‑time metrics or ML itself to forecast node load and steer traffic accordingly.

Complexity: O(1) per request for round‑robin; O(log N) if using a balanced tree for weighted least connections. Trade‑offs revolve around latency, cache locality, and operational overhead.

---

**Edge Cases**

- Sudden “cold start” spikes when new GPU pods launch → LB should delay traffic until health checks pass.  
- Non‑idempotent inference calls (e.g., recommendation engines) require strict session affinity to avoid duplicate outputs.  
- Mixed‑precision vs. FP32 workers: weighted LB ensures higher‑throughput nodes receive proportionally more traffic.

---

**Optimize & Communicate**

*Improvements*: Combine latency‑aware routing with adaptive health checks; use a feedback loop where the inference service reports backpressure signals. *Narrative*: “We start with round‑robin for its simplicity, but once we see variable response times, we switch to weighted least connections, and finally layer in predictive metrics so the LB can anticipate spikes before they hit the backend.” This shows an evolution from baseline to sophisticated, aligning with FAANG’s focus on scalable, resilient ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
