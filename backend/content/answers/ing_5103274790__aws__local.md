---
qid: ing_5103274790__aws__local
question: 'Explain: Architecture — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:03-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession*, *Ownership*  

**Situation / Task** – I was asked to build a “Machine‑Learning System Design Cheat Sheet” that would let data scientists prototype end‑to‑end pipelines in minutes, while keeping costs below \$0.05 per inference and latency under 200 ms.

**Action** –  
1. **Requirements & Trade‑offs**:  
   * Batch training on historical data → S3 + Glue → EMR (Spark) for feature engineering.  
   * Model serving → SageMaker Endpoint with multi‑model endpoint, autoscaling based on CloudWatch metrics.  
   * Monitoring → CloudWatch Alarms + SageMaker Model Monitor to detect drift.  
2. **Scalable Architecture**:  
   * S3 buckets partitioned by date → Athena for quick ad‑hoc queries (no ETL).  
   * Glue Crawlers auto‑discover schemas; AWS Lambda triggers Glue jobs on new data.  
   * Training jobs on SageMaker with spot instances to reduce cost by 70 %.  
   * Inference via SageMaker RealTime endpoint behind an Application Load Balancer for high availability (99.99%).  
3. **Cost & Availability**:  
   * Spot training + reserved endpoints → total inference cost ≈ \$0.04/invocation, latency < 150 ms.  
   * Multi‑AZ deployment; health checks auto‑failover to keep SLA > 4/5 stars.

**Result** – The cheat sheet was adopted by 3+ teams, cutting prototype time from ~2 days to ~6 hours (≈90 % reduction). Training cost dropped 70 %, and inference latency stayed below 200 ms with a 99.99 % uptime SLA.  

**Bar‑raiser takeaways** – I owned the entire flow, dove deep into AWS services for optimal trade‑offs, quantified impact with real numbers, and iterated after a failed first attempt that over‑provisioned GPU instances (learning: spot + reserved mix).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
