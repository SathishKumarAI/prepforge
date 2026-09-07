---
qid: ing_06afe74825__aws__local
question: 'Explain: Uh, and we also want them to — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 474
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:05-05:00'
sources: []
---

**Situation & Task**  
At a former role I led the migration of Google’s internal recommendation engine (≈ 5 B daily requests) to an AWS‑based pipeline so we could scale globally and reduce cost per inference from $0.02 to <$0.005. The goal was to keep latency <50 ms while handling 200k concurrent users.

**Action**  
- **Design:** Adopted a *model-as-a-service* pattern: trained models on SageMaker, deployed them as containerized endpoints behind an Application Load Balancer with WAF rules for bot protection.  
- **Data Pipeline:** Built an event‑driven ingestion layer using Kinesis Data Streams → Lambda → Glue ETL → Redshift Spectrum for feature store.  
- **Cost & Scalability:** Leveraged spot instances for training, and Aurora Serverless for metadata to auto‑scale with traffic spikes (up to 10×). Implemented *Canary* deployments via CodeDeploy to roll out new models safely.  
- **Monitoring:** Integrated CloudWatch metrics + SageMaker Debugger to track inference latency and error rates; set up alerts that triggered automatic rollback if SLA >95 % dropped.

**Result**  
- Reduced per‑inference cost by 75 %.  
- Latency improved from 120 ms to 45 ms, keeping 99.2 % of requests below 50 ms.  
- Achieved 99.9 % uptime during a 3‑month production run.

**Leadership Principles Reflected**  
1. **Customer Obsession** – focused on user latency and cost savings that directly impacted the end‑user experience.  
2. **Ownership & Dive Deep** – took full responsibility for every layer, from data ingestion to model deployment, and continuously tuned performance based on real metrics.  

**What a bar‑raiser looks for:**  
- Demonstrated *ownership* by owning the entire ML lifecycle.  
- *Dive deep* through concrete architecture choices (SageMaker vs EC2, spot vs OnDemand).  
- Quantified impact (cost, latency, uptime) and clear learning loop (continuous monitoring & rollback strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
