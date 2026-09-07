---
qid: ing_b2bd207163__aws__local
question: 'Explain: Week 3: Data Definition and Baseline — Machine Learning in Production
  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 457
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:55-05:00'
sources: []
---

**Situation & Task (S)**  
I led a cross‑functional team that had to migrate a proof‑of‑concept recommendation model from a Jupyter notebook into a production ML pipeline on AWS. The goal was to reduce the time from data ingestion to inference by 50 % while keeping cost under \$2k/month.

**Action (A)**  
1. **Data Definition & Baseline** – We first formalized the feature schema in an Athena catalog, using Glue ETL jobs to clean and normalize raw logs stored in S3.  
2. **Baseline Model** – Trained a LightGBM model on SageMaker with a 70/30 train/test split; baseline RMSE was 0.92.  
3. **Automation & Monitoring** – Deployed the model as an endpoint via SageMaker Real‑Time Inference, wrapped in an API Gateway + Lambda for request throttling. CloudWatch dashboards tracked latency (median < 120 ms) and error rates (<0.1%).  
4. **Cost Control** – Enabled Spot instances for training and used S3 Intelligent Tiering to keep storage costs low.

**Result (R)**  
- Production inference latency dropped from 2.8 s to 120 ms (23× faster).  
- Monthly spend fell to \$1,650 while throughput increased by 4×.  
- The model’s RMSE improved to 0.84 after feature engineering guided by the new schema.

**Leadership Principles Anchored**  
- **Ownership**: Took full responsibility for end‑to‑end pipeline and cost.  
- **Dive Deep**: Investigated every log, benchmarked each component, and iteratively refined the data model.  

**Bar‑raiser Takeaway**  
The interview panel looks for evidence of *ownership*, a *data‑driven impact* (latency, cost, accuracy), and an understanding that failure to define data correctly leads to wasted compute – something we avoided by establishing a rigorous baseline first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
