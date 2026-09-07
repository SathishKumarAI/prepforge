---
qid: ing_e3424ed2ad__aws__local
question: 'Explain: Your provider deprecates the model your product depends on, with
  90 days'' notice. Walk me through what you''d do - or a migration you actually ran.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 448
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:03-05:00'
sources: []
---

**Situation / Task**  
When my team’s recommendation engine relied on an ML model hosted in the vendor’s managed service, they announced a 90‑day deprecation. The product generated ~2 M daily clicks and drove $1.5 B annual revenue; any downtime would hit our SLAs and churn.

**Action**  
*Ownership & Bias for Action*: I formed a cross‑functional squad (data science, infra, ops) and drafted a migration plan with a 30‑day sprint cadence.  
*Dive Deep*: We profiled the existing model’s inference latency (avg 120 ms), accuracy (AUC 0.87), and data pipeline (Kafka → Lambda → SageMaker).  
1️⃣ **Model Replacement** – Built an identical architecture in SageMaker Pipelines, using the same pre‑trained weights but training on our own 5 TB clickstream dataset to improve AUC to 0.91.  
2️⃣ **Infrastructure** – Deployed the new endpoint behind a CloudFront distribution with Lambda@Edge for request throttling, ensuring <200 ms latency and 99.999% availability.  
3️⃣ **Rollback & Validation** – Ran A/B tests against production traffic; captured click‑through and conversion metrics. The new model increased CTR by 4.2% and revenue lift of $12 M over the next quarter.  
4️⃣ **Cost Optimisation** – Leveraged Spot Instances for training (×3 cost savings) and reserved capacity for inference, keeping total spend <5% above baseline.

**Result**  
Completed migration in 75 days, meeting the vendor’s deadline with zero service interruption. Post‑migration, we observed a 12 % uplift in revenue and reduced model latency by 35 %. Learned that early data‑driven validation is critical; next time we’ll add a “shadow” inference stage earlier to catch drift sooner.

**Leadership Principles** – *Customer Obsession*, *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
