---
qid: ing_bc18a87ea9__faang__local
question: 'Explain: Testing in production — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 487
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:22-05:00'
sources: []
---

**Clarify**  
The question asks how a company that serves *50 M uploads/day* can test new ML models in production without breaking the user experience or the pipeline. Key assumptions: we have a distributed upload service, a batch‑processing model serving layer, and a need for A/B testing at scale.

---

**Approach**  
1. **Feature flag + traffic split** – route a small percentage of uploads to the new model.  
2. **Canary pipelines** – run the new inference head in parallel with the baseline; log latency/accuracy side‑by‑side.  
3. **Observability & safety nets** – automatic rollback on SLA breach, anomaly detection on key metrics.  
4. **Incremental rollout** – increase traffic gradually once confidence thresholds are met.

---

**Depth**  
- *Routing*: Use a deterministic hash of user ID to decide model version; ensures consistent experience per session.  
- *Metrics*: Capture per‑request latency, error rate, and domain‑specific scores (e.g., image quality).  
- *Rollback*: A circuit breaker that, if the new model’s error > 2× baseline for 5 min, redirects all traffic back instantly.  
- *Data collection*: Store feature vectors & predictions in a time‑series DB; feed back into offline retraining.  

Complexity: O(1) per request for routing; overhead is dominated by parallel inference cost (~10–15 % CPU increase during canary). Trade‑off: higher latency vs. safety.

---

**Edge Cases**  
- *Cold start*: New model may be slower initially – mitigate with warm‑up workers.  
- *Data drift*: If upload content distribution changes, the new model may underperform; continuous monitoring is essential.  
- *User churn*: Sudden rollback could frustrate users—notify them via UI if feasible.

---

**Optimize & Communicate**  
To improve, add a **dynamic traffic‑shaping policy** that uses real‑time SLA metrics to adjust canary percentage. Communicate progress through dashboards and regular stakeholder demos, highlighting key metrics (latency, accuracy, cost). This structured rollout ensures we scale from zero to 50 M uploads/day while keeping risk low and learning fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
