---
qid: ing_418862f80f__aws__local
question: 'Explain: 134: Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 399
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:00-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a **mobile‑first recommendation engine** that served > 2 M daily active users (DAU). The goal was to shift from server‑side batch scoring to an on‑device inference pipeline, cutting latency < 200 ms and reducing cloud spend by 35 %.

**Action – Design & AWS Services**  
* **Model Packaging** – Trained a LightGBM model in SageMaker, exported to TensorFlow Lite for Android/iOS.  
* **Edge Caching** – Used **AWS IoT Greengrass** to push the latest model version via OTA updates; fallback to S3 on first launch.  
* **Feature Store** – Persisted user‑context features in **DynamoDB Global Tables** (multi‑region) and queried them locally with **AppSync GraphQL** for offline mode.  
* **Scalability & Availability** – Greengrass ensures 99.9 % uptime even on flaky mobile networks; DynamoDB auto‑scales to 10× traffic spikes.  
* **Cost Control** – By moving inference off the cloud, we eliminated 70 % of SageMaker batch transform charges and reduced data egress by 80 %.

**Result**  
Latency dropped from 1.2 s to < 200 ms (user‑perceived), churn fell 12 %, and quarterly cost savings hit $450K.

---

> **Bar‑raiser note:** The candidate shows *ownership* of the entire pipeline, a *deep dive* into edge vs cloud trade‑offs, quantified impact, and a clear learning loop: “If OTA fails, we fall back to DynamoDB sync.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
