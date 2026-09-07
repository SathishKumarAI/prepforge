---
qid: ing_24c87d9006__aws__local
question: 'Explain: Building on top of regional capacity management foundations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 486
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:50-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that had to add an ML inference layer on top of our existing Regional Capacity Management (RCM) platform, which already handled demand forecasting and resource allocation across AWS regions. The goal was to predict spot‑instance price spikes with 95 % precision so we could auto‑scale workloads before costs surged.

**Action – Design & Implementation**  
* **Data pipeline:** Extracted daily spot‑price logs + EC2 usage metrics from CloudWatch → stored in an S3 data lake (partitioned by region, hour).  
* **Feature store:** Built a Glue catalog and Athena queries to surface lagged price, region‑specific utilization, and macroeconomic indicators.  
* **Model training:** Used SageMaker Pipelines with a LightGBM model; hyper‑parameter tuning via SageMaker Experiments.  
* **Serving layer:** Deployed the model as a real‑time endpoint on SageMaker Runtime, fronted by API Gateway for low‑latency (≤30 ms).  
* **Integration with RCM:** The inference result feeds into our Lambda‑based capacity scheduler, which triggers Auto Scaling groups and Spot Fleet requests.

**Result**  
After 3 months of production use:  
* **Cost savings:** 18 % reduction in spot‑instance spend across 12 regions.  
* **Availability:** Model uptime >99.9 %, with a built‑in fallback to rule‑based thresholds when the endpoint is down.  
* **Scalability & cost trade‑offs:** Using SageMaker’s on‑demand endpoints kept compute costs <10 % of the savings achieved, while the Athena query layer stayed under $0.02/hr.

**Reflection (Bar‑raiser focus)**  
I took full ownership: from data ingestion to model monitoring, I implemented automated drift checks and scheduled retraining every 30 days. The dive deep into feature importance revealed that region‑specific utilization lag explained >70 % of variance—an insight we leveraged to simplify the model later. When a sudden API outage occurred, I quickly switched to the rule‑based fallback, learned to add health checks, and now have a CI/CD pipeline that tests failover paths before deployment.

> *Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
