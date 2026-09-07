---
qid: ing_3172166212__aws__local
question: 'Explain: Cost Metrics — Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 500
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:53-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *“I keep the customer at the center and own the end‑to‑end experience.”*

**Situation (S)**  
When launching a new generative‑AI service for our e‑commerce platform, I noticed that the cost of inference was unpredictable. The team needed real‑time visibility into spend per model, endpoint, and user cohort.

**Task (T)**  
I led a cross‑functional effort to build *Cost Metrics – Observability* so we could see where money was being burned, identify waste, and drive optimization.

**Action (A)**  

| Step | What I did | AWS services used |
|------|------------|-------------------|
| 1️⃣ Capture spend | Instrumented SageMaker endpoints with CloudWatch metrics (`InvocationCost`, `CPUUtilization`) and Lambda to enrich logs. | **SageMaker, CloudWatch, Lambda** |
| 2️⃣ Store & query | Persist raw cost data in a compressed Parquet table on S3; use Athena for ad‑hoc analysis. | **S3, Athena** |
| 3️⃣ Alert & visualize | Created dashboards (Grafana + CloudWatch) and set thresholds to auto‑trigger SNS alerts when spend > $X per hour. | **CloudWatch Dashboards, SNS** |
| 4️⃣ Act on insights | Built a serverless scheduler (EventBridge + Step Functions) that throttles or pauses low‑traffic models during peak hours. | **EventBridge, Step Functions** |

**Result (R)**  

* Within three months we reduced monthly inference spend by **23 % ($120K/year)** while maintaining 99.9 % availability.  
* The observability stack allowed us to identify a single under‑utilized model that accounted for 15 % of the budget and retire it, saving an additional $30K annually.  

**Bar‑raiser notes**

- Demonstrated **ownership** by taking end‑to‑end ownership from instrumentation to operational automation.  
- Showed **dive deep** through data engineering choices (Parquet, Athena) that balanced cost vs. query performance.  
- Quantified impact with clear dollar savings and SLA maintenance.  
- Learned from an initial false‑positive alert cycle; refined thresholds and added anomaly detection to reduce noise.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
