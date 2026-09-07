---
qid: ing_4e7b1f6d37__faang__local
question: 'Explain: 93: System Design Interview (13 Minutes)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:46:59-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “Explain a **Machine‑Learning System Design Interview (13 min)**.”  
Assumptions:  
- Interviewer wants to see your *structured thinking*, not just code.  
- Time is tight; you’ll be judged on framing, trade‑offs, and communication.

---

**2️⃣ Approach**  
1. **Define the scope** – What ML problem? (e.g., recommendation, anomaly detection).  
2. **Break it into layers** – Data ingestion → Feature store → Training pipeline → Serving endpoint → Monitoring.  
3. **Pick key decisions** – Storage tech, model choice, latency targets, scalability.  

---

**3️⃣ Depth**  
- *Data layer*: Use Kafka for real‑time streams + S3/BigQuery for batch.  
- *Feature store*: Delta Lake with caching to keep cold‑start low (≈ 50 ms).  
- *Training*: Spark MLlib or TensorFlow on GKE; schedule nightly jobs, keep model lineage in MLflow.  
- *Serving*: TensorFlow Serving + Envoy for routing, 99.9 % SLA, horizontal autoscaling.  
- *Observability*: Prometheus metrics (latency, error rate), MLflow tracking, A/B‑test drift alerts.

*Complexity:*  
- Training: O(n log n) per epoch; serving: O(1) inference latency.  
- Trade‑offs: Batch vs. online training, model size vs. latency, single vs. multi‑model endpoints.

---

**4️⃣ Edge Cases**  
- Cold start when new users/features appear → fallback rules.  
- Data drift → retraining triggers.  
- Model bias → fairness metrics in monitoring.

---

**5️⃣ Optimize & Communicate**  
- Highlight *why* each choice meets business goals (speed, cost, reliability).  
- End with a quick “next‑steps” plan: prototype the pipeline, run load tests, iterate on feedback.  

> **Signal Score:** You’re showing *structured problem‑solving*, clear *communication*, and deep *technical reasoning*—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
