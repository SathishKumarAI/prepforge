---
qid: ing_d8d439ef84__star__local
question: 'Explain: >> So, it''s an honor to have — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 340
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:27-05:00'
sources: []
---

**Situation** – In my last role at a telecom provider, our fraud‑detection team noticed that the monthly charge‑back rate had spiked from 0.8 % to 3.5 %. The billing system processed over 12 million transactions daily, so even a small percentage represented thousands of dollars in losses.

**Task** – I was tasked with building an anomaly‑driven model that could flag suspicious invoices before they hit the customer’s bill, reducing charge‑backs by at least 70 % while keeping false positives below 2 %.

**Action** – First, I extracted transactional features (amount variance, time of day, device fingerprint) and applied a two‑stage approach:  
1. A *Isolation Forest* to capture high‑dimensional outliers in an unsupervised way.  
2. A *One‑Class SVM* trained on the “clean” data to refine the boundary. I tuned both models using cross‑validation, balancing recall against precision via a cost matrix that penalized missed fraud more heavily than occasional false alarms. The final pipeline ran nightly on Spark, scored 12 M rows in under 10 minutes, and produced alerts fed into our rule engine.

**Result** – After deployment, the charge‑back rate fell to 0.9 %—a 71 % reduction—and we saved roughly $1.2 million annually. I learned that combining unsupervised isolation with supervised boundary refinement often yields the best trade‑off in real‑world anomaly detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
