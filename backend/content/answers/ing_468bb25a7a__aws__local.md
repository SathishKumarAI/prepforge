---
qid: ing_468bb25a7a__aws__local
question: 'Explain: Split Services Carefully — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 463
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:07-05:00'
sources: []
---

**Situation (S)**  
I led a project to refactor an on‑prem ML inference pipeline that served 3 million daily requests. The monolithic service was hitting latency spikes and had no clear fault isolation.

**Task (T)**  
Redesign the architecture into a clean client‑server model, ensuring **Customer Obsession** (low latency for end users) while maintaining **Ownership** of cost and reliability.

**Action (A)**  
1. *Split services*:  
   - **Client layer** on an Elastic Beanstalk front‑end that validates inputs and performs rate limiting via API Gateway + Lambda Authorizer.  
   - **Server layer**: a containerized inference service on ECS Fargate, autoscaled by CloudWatch metrics (CPU > 70 % → +1 task).  
2. *Model serving*: Deploy the model in SageMaker Endpoint with multi‑model hosting; use GPU‑enabled instances only for high‑throughput batches.  
3. *Data pipeline*: Use Kinesis Data Streams to buffer requests, guaranteeing at‑least‑once delivery and decoupling load spikes from inference latency.  
4. *Observability*: CloudWatch dashboards + X-Ray tracing; set up alerts on 99.9 % SLA.

**Result (R)**  
- Latency dropped from **350 ms** average to **120 ms** (Δ −230 ms).  
- Cost decreased by **18 %** per month due to better instance utilization and serverless scaling.  
- Incident rate fell from 4 incidents/month to zero in the first quarter.

---

### What a bar‑raiser hears
- **Ownership**: I took full responsibility for both design and post‑deployment monitoring.  
- **Dive Deep**: I quantified performance, cost, and fault‑tolerance metrics before & after.  
- **Quantified Impact**: Delivered measurable latency and cost savings.  
- **Learning from Failure**: Initial monolith caused unpredictable spikes; the split architecture isolated failures and simplified rollbacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
