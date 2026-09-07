---
qid: ing_cf123c9f0a__aws__local
question: 'Explain: Job postings are up, but the title is shifting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 416
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:08-05:00'
sources: []
---

**Situation (S)** – At my previous company we ran a job‑matching engine that pulled millions of postings from partner sites every hour. In Q2 the volume jumped 40 % and the title field started showing “Senior” or “Junior” inconsistently, hurting our relevance score.

**Task (T)** – I had to build an automated system that detected title drift, corrected it, and kept the model’s precision above 92 %.

**Action (A)**  
1. **Data‑drift detection**: Ingested raw titles into S3, ran a SageMaker **BatchTransform** job nightly to predict “canonical” titles using a fine‑tuned BERT model. Compared predictions with actual tags and logged drift metrics in CloudWatch.  
2. **Real‑time correction**: Deployed the inference endpoint behind an Application Load Balancer; used Lambda@Edge to rewrite titles before they hit downstream services.  
3. **Cost & scalability**: Leveraged spot instances for batch jobs (cost ↓ 70 %) and reserved instances for the endpoint (latency < 30 ms). Auto‑scaling on CPU utilization kept 99.9 % availability.

**Result (R)** – Drift alerts reduced manual triage from 12 hrs/day to 15 min, title accuracy rose from 78 % to 94 %, and downstream recommendation precision improved by **3.5 pp**, boosting click‑through rates by 18 %.  

*Leadership Principles*: **Ownership** (took full responsibility for the end‑to‑end pipeline), **Dive Deep** (analyzed drift patterns at the token level), **Bias for Action** (implemented Lambda@Edge within 48 hrs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
