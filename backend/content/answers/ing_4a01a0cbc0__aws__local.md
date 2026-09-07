---
qid: ing_4a01a0cbc0__aws__local
question: 'Explain: Sources — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 509
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:41-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a production‑grade recommendation engine for an e‑commerce platform that had ~2 M active users and 30 k SKUs. The key challenge was sourcing high‑quality, scalable training data while keeping latency <100 ms for real‑time inference.

**Action (Dive Deep + Ownership)**  
1. **Data inventory** – catalogued all internal sources: clickstream logs (Kinesis), purchase history (RDS Aurora), product metadata (S3).  
2. **Feature extraction pipeline** – used Glue to transform raw events into a feature table in Redshift; added external signals (public weather API, social‑media sentiment via Comprehend) to enrich context.  
3. **Sampling strategy** – applied reservoir sampling + importance weighting so each user’s recent 30 actions had 5× higher probability of inclusion, reducing training set from 10 billion rows to 300 million while preserving distributional fidelity.  
4. **Model training** – leveraged SageMaker Pipelines with a distributed XGBoost job (8 g4dn.xlarge) that converged in <30 min; evaluated on hold‑out using AUC‑ROC (0.87 vs baseline 0.82).  
5. **Deployment & monitoring** – deployed the model as a Lambda@Edge function behind CloudFront, ensuring sub‑100 ms latency and auto‑scaling to 50k requests/sec at <$1.20/day.

**Result (Deliver Results)**  
- Click‑through rate on recommended products increased by **12%** (from 3.4% to 3.8%).  
- Revenue lift of $2.6M/month attributed to the engine.  
- Cost per inference dropped 40 % compared to previous batch‑processing approach.

**Bar‑raiser notes**  
- Demonstrated *ownership* by taking end‑to‑end responsibility for data pipeline and model lifecycle.  
- Showed *dive deep* with concrete sampling math, feature engineering steps, and AWS service choices.  
- Quantified impact (CTR lift, revenue) and highlighted lessons: early validation of external signals prevented costly feature drift.

> **Leadership Principles**: Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
