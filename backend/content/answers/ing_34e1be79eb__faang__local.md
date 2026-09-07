---
qid: ing_34e1be79eb__faang__local
question: 'Explain: Choosing the Right Approach — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 558
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:08-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question*: How do we decide between a **stateful** or **stateless** ML inference architecture?  
Assumptions: (a) we have a deployed model that receives user requests; (b) latency, throughput, fault‑tolerance, and cost are key constraints; (c) state may include session embeddings, caching, or incremental learning.

---

**2️⃣ Approach**  
1. Enumerate use‑cases where past data influences current prediction.  
2. Map each to architectural primitives: stateless = independent micro‑service, stateful = service that stores/updates context.  
3. Evaluate trade‑offs (latency vs consistency, scaling vs complexity).

---

**3️⃣ Depth**  

| Use‑case | Preferred Architecture | Why |
|----------|------------------------|-----|
| **Real‑time recommendation with session embeddings** | Stateful (e.g., Redis + model service) | Embeddings need to be updated per request; caching reduces recomputation. |
| **Batch scoring of millions of items** | Stateless (containerized inference, autoscaling) | No cross‑request dependency → horizontal scaling, simpler deployment. |
| **Online learning / model drift detection** | Stateful (feature store + training pipeline) | Requires persistent feature vectors and versioning. |
| **Stateless microservice for pure inference** | Stateless | Lowest operational overhead; ideal for high‑volume, low‑latency APIs. |

*Complexity*:  
- Stateful: O(1) read/write to KV store per request; consistency costs (replication lag).  
- Stateless: O(1) compute only; scales linearly with replicas.

---

**4️⃣ Edge Cases**  

- **Cache miss / cold start** → fallback to stateless inference.  
- **Data privacy**: stateful storage may violate GDPR if not anonymized.  
- **Failure isolation**: a stateful node failure can cascade unless replicated.

---

**5️⃣ Optimize & Communicate**  

*Improvements*:  
- Use *event sourcing* to replay state changes for recovery.  
- Hybrid pattern: keep core model stateless, push session data to a lightweight cache (e.g., Memcached).  
- Auto‑scale stateless workers based on request latency thresholds.

*Narrative*: “We start by asking whether the prediction depends on prior interactions. If it does, we lean stateful; otherwise, stateless gives us elasticity and lower ops cost. We then quantify trade‑offs in latency, consistency, and cost, and finally add fallbacks for edge cases.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
