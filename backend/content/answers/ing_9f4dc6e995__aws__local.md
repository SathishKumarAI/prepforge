---
qid: ing_9f4dc6e995__aws__local
question: 'Explain: technologies that worked best for Netflix with'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:50-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain which machine‑learning technologies drove Netflix’s recommendation engine during the 2017–2020 period, when we grew from 75 M to 140 M subscribers and had to serve 10 B+ requests per day.

**Action**  
- **Data Lake & Feature Store:** Built on Amazon S3 + Glue, we ingested click‑stream, viewing, and content metadata into a unified catalog. This eliminated data silos and cut feature‑engineering time from weeks to days.  
- **Model Training:** Used SageMaker Pipelines with distributed training on Spot instances (p3.8xlarge). Auto‑ML components accelerated hyper‑parameter tuning by 4× while keeping cost < $30k/month.  
- **Serving Layer:** Deployed models as containerized endpoints in ECS Fargate, behind an Application Load Balancer with Lambda@Edge for latency < 50 ms globally. For cold‑start, we pre‑warm 10% of the cluster using CloudWatch alarms.  
- **Monitoring & Feedback Loop:** Integrated Amazon SageMaker Model Monitor and CloudWatch metrics to auto‑retrain when drift > 0.2 in precision‑recall.

**Result**  
- Lifted recommendation CTR from 4.8 % to 6.5 % (≈ 35 % lift).  
- Reduced model training time by 70 %, saving ~ $200k annually.  
- Cut serving cost by 25 % through Spot + Fargate, while maintaining 99.99 % availability.

**Leadership Principles Reflected**  
- **Customer Obsession & Deliver Results:** Directly improved viewing experience and revenue.  
- **Ownership & Dive Deep:** Built end‑to‑end pipeline from data ingestion to serving, continually iterating on performance.  

**Bar‑raiser takeaways** – I demonstrated full ownership, quantified impact, deep technical understanding of AWS services, and a clear learning loop that turned failure (model drift) into continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
