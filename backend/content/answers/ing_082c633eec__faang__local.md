---
qid: ing_082c633eec__faang__local
question: 'Explain: Metrics, SLOs, and the throughput - latency curve'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 595
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:03:15-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level explanation of how we measure AI system quality: what *metrics* we track, how *Service Level Objectives (SLOs)* formalize business expectations, and why the *throughput–latency curve* is central to balancing speed vs. capacity.

---

### 1️⃣ Approach  
- Define key metrics (accuracy, precision‑recall, AUC, F1, latency, throughput).  
- Explain SLOs as quantifiable thresholds tied to those metrics.  
- Illustrate the inverse relationship between throughput and latency via a simple curve.

---

### 2️⃣ Depth  

| Metric | Why it matters for AI |
|--------|-----------------------|
| **Accuracy / AUC** | Overall predictive quality. |
| **Precision/Recall / F1** | Class‑specific performance, especially with imbalance. |
| **Latency (ms)** | User experience; real‑time inference must stay below a cutoff. |
| **Throughput (req/s)** | System capacity to serve concurrent requests. |

**SLOs** translate business goals into SLA‑style numbers: e.g., *99.9 % of predictions < 100 ms* or *≥ 10,000 req/s with ≥ 95 % accuracy*. They guide design trade‑offs and alerting.

The **throughput–latency curve** captures the fundamental resource contention:  
- At low load, latency ≈ constant (CPU bound).  
- As we push throughput toward the hardware limit, queueing builds up → latency rises sharply.  

Mathematically, for an M/M/1 queue: `Latency = 1/(μ – λ)`. This helps decide whether to add replicas (increase μ) or batch requests (reduce λ).

---

### 3️⃣ Edge Cases  
- **Burst traffic** can temporarily violate SLOs; need burst buffers.  
- **Model drift** changes accuracy metrics without affecting latency.  
- **Cold starts** inflate latency for first few requests.

Testing: synthetic load generators, A/B deployments, and monitoring dashboards that auto‑alert on SLO breaches.

---

### 4️⃣ Optimize & Communicate  
- Use **auto‑scaling** to keep λ/μ ratio optimal.  
- Apply **model distillation** to reduce inference time while preserving accuracy.  
- Communicate trade‑offs clearly: “Increasing throughput by 20 % will raise latency from 80 ms to 120 ms, still within the 150 ms SLO.”

This structured view shows how metrics, SLOs, and the throughput–latency curve jointly guide AI system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
