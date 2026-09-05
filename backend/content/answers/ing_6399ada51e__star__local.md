---
qid: ing_6399ada51e__star__local
question: 'Explain: um and that''s obviously not going to — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 320
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:54-05:00'
sources: []
---

**Situation** – While leading the recommendation engine for Google Shopping, we hit a wall: our online A/B test results were noisy and never converged, so product owners questioned whether to roll out the new model.  
**Task** – I needed to design an end‑to‑end ML pipeline that could produce stable metrics, provide transparency to stakeholders, and scale to 10 B queries per day without adding latency.  
**Action** – First, I rewrote the feature store in BigQuery with a time‑series schema so every training instance was traceable. Next, I introduced an “online‑offline” evaluation loop: offline metrics were computed on a 1‑hour delayed stream while online metrics ran live on a 5 % traffic slice. We used TensorFlow Serving for low‑latency inference and added a lightweight A/B flagging layer that logged every request to a Pub/Sub topic, enabling real‑time drift detection. Finally, I built a CI/CD pipeline with Cloud Build that automatically retrained the model every night on new data and ran unit tests against a synthetic validation set before promotion.  
**Result** – The new system cut metric variance by 70 %, reduced rollout time from weeks to days, and allowed us to safely deploy a 15 % lift in conversion rate. I learned that investing early in observability and reproducibility pays off faster releases and higher confidence for stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
