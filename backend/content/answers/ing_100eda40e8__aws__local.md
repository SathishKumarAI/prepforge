---
qid: ing_100eda40e8__aws__local
question: 'Explain: Ten Thousand Users — AWS Scale - by Neo Kim - The System Design
  Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 494
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:40-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to scale a recommendation engine that served **10 k concurrent users** during peak holiday sales. The existing monolith hit 70 % CPU and 60 GB memory on the same instance, leading to >2 s latency for 80 % of requests.

**Action – Design & AWS services**  
1. **Micro‑service split**: Decomposed into *Data Ingestion*, *Model Training* (batch), *Inference API*.  
2. **Serverless inference** – used **Amazon SageMaker Endpoint** behind an **Application Load Balancer** with **AWS Lambda@Edge** for request routing, guaranteeing 99.9 % availability and auto‑scaling to thousands of concurrent invocations.  
3. **Data layer** – persisted feature store in **DynamoDB Global Tables** (multi‑region) and cached hot features in **Amazon ElastiCache Redis** (cluster mode).  
4. **Batch training** – scheduled nightly jobs on **AWS Glue** + **EMR Spark**, storing checkpoints in **S3**; triggered by CloudWatch events, ensuring cost control.  
5. **Observability** – integrated **CloudWatch Metrics & Logs**, **X-Ray** tracing, and automated alerts for latency >300 ms.

**Result**  
- Latency dropped from 2 s to <200 ms (95th percentile).  
- CPU utilization fell by 80 %, reducing on‑demand instance spend from $1.20/hr to $0.15/hr (~88 % cost saving).  
- Served 50 % more concurrent users during peak without any manual intervention.

**Leadership Principles**  
*Customer Obsession*: focused on user latency and reliability.  
*Ownership & Dive Deep*: engineered a full end‑to‑end solution, validated with real metrics, and iterated based on telemetry.

**Bar‑raiser takeaways**  
- Demonstrated ownership by handling both infra and ML pipeline.  
- Showed depth: chose services that balance scalability, availability, and cost.  
- Quantified impact with clear numbers.  
- Learned from failure: initial monolith had hidden memory leaks; refactoring into stateless services eliminated the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
