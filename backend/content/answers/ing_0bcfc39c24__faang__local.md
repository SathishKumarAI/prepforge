---
qid: ing_0bcfc39c24__faang__local
question: 'Explain: Cons — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 813
total_tokens: 1045
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:11:33-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Discuss the disadvantages of applying machine‑learning (ML) models when scaling a production system—specifically, how ML can become a bottleneck for throughput, latency, and maintainability.  
*Assumptions to confirm:*  
- We’re deploying supervised models in real‑time services (e.g., recommendation or fraud detection).  
- The data pipeline is batch‑processed but predictions must hit sub‑millisecond SLAs.  
- Multiple teams will own different model versions.

---

**2️⃣ Approach**  
1. Identify scalability axes: **compute, storage, and operational complexity**.  
2. For each axis, enumerate concrete constraints that surface at scale.  
3. Illustrate with typical trade‑offs (e.g., batch vs. streaming inference).  

---

**3️⃣ Depth**

| Axis | Core Cons | Why it hurts scaling |
|------|-----------|---------------------|
| **Compute & Latency** | • Large models (deep nets, ensembles) need GPU/TPU → expensive; <br>• Inference latency grows with depth, violating real‑time SLAs. | • At 10k QPS, a 200 ms inference per request causes queue buildup; <br>• Scaling horizontally adds cost but not linear speedup due to I/O bottlenecks. |
| **Storage & Model Management** | • Storing millions of checkpoints and feature stores increases disk I/O; <br>• Versioning multiple models per user leads to “model drift” confusion. | • Retrieval latency spikes; <br>• Data duplication inflates storage costs (S3/FS). |
| **Operational Complexity** | • Continuous training pipelines (data ingestion → retraining) need orchestration; <br>• Monitoring feature importance, data distribution drifts is non‑trivial. | • More engineers needed for MLOps; <br>• Bugs in data pipelines propagate to all downstream services. |

*Complexity & Trade‑offs:*  
- **Batch inference** (offline scoring) reduces compute cost but sacrifices freshness.  
- **Model distillation** shrinks size, trading off a few percent accuracy for speed.  
- **Edge deployment** lowers latency but increases device heterogeneity.

---

**4️⃣ Edge Cases**

| Scenario | What breaks? | Test strategy |
|----------|--------------|---------------|
| Sudden spike in traffic (e.g., 5× QPS) | GPU queue saturates, request timeouts | Load‑test with bursty patterns; simulate cold starts. |
| Feature drift (new user behavior) | Model accuracy drops sharply | A/B test on a subset of traffic; monitor KL divergence of input distributions. |
| Data pipeline failure | Inference stalls until fallback logic kicks in | Chaos engineering: inject missing feature streams and observe service degradation. |

---

**5️⃣ Optimize & Communicate**

*Improvements:*  
- Adopt **model compression (pruning, quantization)** to fit within CPU budgets.  
- Use **feature caching layers** (Redis) to reduce disk I/O.  
- Implement **canary releases with rollback** for new model versions.

*Narration:*  
“When scaling ML at a FAANG‑level service, the first thing we check is compute latency per request; if a single inference takes >10 ms, we’re already violating our SLA. Next, we audit storage: each checkpoint can be 1–2 GB; storing 100 versions pushes us into terabytes of S3 churn. Finally, operational overhead grows linearly with the number of model teams—so we introduce automated MLOps pipelines and feature store governance to keep drift in check.”  

*Result:*  
By quantifying compute, storage, and ops pain points upfront, we can design a system that balances accuracy with scalability—essential for any high‑traffic ML product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
