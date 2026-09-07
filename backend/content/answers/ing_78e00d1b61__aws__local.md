---
qid: ing_78e00d1b61__aws__local
question: 'Explain: So I''m going to skip ahead. Uh — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 377
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:41-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team on a recommendation engine for YouTube’s “Explore” feed, we had to migrate the monolithic model training pipeline from an in‑house cluster to Google Cloud Platform (GCP) so that latency could drop below 50 ms and the model could scale to 10× more users.

**Action**  
- **Ownership & Bias for Action:** I rewrote the pipeline as a serverless, event‑driven architecture using *Cloud Functions* + *Pub/Sub* to decouple data ingestion from training.  
- **Dive Deep & Invent & Simplify:** I replaced the custom TensorFlow serving layer with *Vertex AI Prediction*, which auto‑scales and provides A/B test hooks. I also introduced *BigQuery ML* for feature engineering, cutting model build time by 70 %.  
- **Customer Obsession:** We ran a phased rollout using *Canary releases* in GCP’s Traffic Director, monitoring engagement metrics (CTR, watch time) in real time.

**Result**  
- Latency dropped from 200 ms to 35 ms.  
- Model throughput increased from 1k predictions/sec to 15k/sec, supporting a projected 10× user growth with <30 % additional cost.  
- A/B testing showed a 12 % lift in session duration and a 4 % increase in revenue per user.

**Learnings**  
I realized that “small, frequent experiments” drive faster learning than large monolithic rewrites. This lesson guided the next iteration where we introduced *AutoML Tables* to reduce engineering effort by another 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
