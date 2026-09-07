---
qid: ing_834564ae32__aws__local
question: 'Explain: But with that caveat, here are the — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 388
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:47-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team tasked with detecting fraud in real‑time ad bidding. The goal was to reduce false positives by 30 % while keeping latency under 50 ms.

**Action**  
I built an anomaly detection pipeline that combined **Isolation Forest** (fast, unsupervised) for bulk batch scoring and a lightweight **One‑Class SVM** model deployed in AWS Lambda for per‑request inference. To provide explanations we added SHAP values, surfacing the most influential features (bid price, user agent entropy). The models were trained on daily data stored in **Amazon Redshift**, updated nightly via **AWS Glue**, and served through an API Gateway + **AppRunner** container that auto‑scales based on CloudWatch metrics.

I chose this mix because:
- Isolation Forest scales to millions of records with O(n log n) complexity, keeping costs low on **EC2 Spot Instances**.
- One‑Class SVM runs in under 5 ms per inference in Lambda, satisfying the latency SLA.
- SHAP explanations improve analyst trust and reduce investigation time.

**Result**  
Within three months we cut false positives by **32 %**, increased fraud detection rate from 78 % to 87 %, and lowered infrastructure spend by 18 %. Stakeholders praised the explainability layer, which enabled a new compliance dashboard in QuickSight.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering accurate, explainable alerts that protect advertisers’ ROI.
- **Ownership & Dive Deep** – Architected from data ingestion to production inference, iterating on model choice and cost trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
