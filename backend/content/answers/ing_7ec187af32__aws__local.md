---
qid: ing_7ec187af32__aws__local
question: 'Explain: Implement a Web Interface — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 479
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:50-05:00'
sources: []
---

**Situation** – At my previous role I was tasked to launch a *“Build Your Own ML Agent”* web portal for internal data scientists. The goal: enable non‑technical users to create, train and deploy models in minutes while keeping costs < $2k/month.

**Task** – Design the end‑to‑end system, deliver a working prototype in 4 weeks, and prove that it can scale to 10k concurrent users with < 200 ms latency.

**Action**  
- **Architecture**: Front‑end React + Vite → API Gateway → Lambda (Python) for orchestration.  
- **Model training**: Triggered by Step Functions → SageMaker Processing Jobs (spot instances, max 4 hrs).  
- **Storage**: S3 (raw data), DynamoDB (metadata), EFS attached to EC2 spot fleet for temporary scratch space.  
- **Deployment**: SageMaker Endpoint + CloudFront caching.  
- **Cost control**: Auto‑scaling of Lambda via provisioned concurrency; Spot Fleet on EC2 with 80 % price reduction.  
- **Monitoring**: CloudWatch dashboards, X-Ray traces; alerting on error > 1%.  

**Result** – Deployed in 27 days (30 days target). User adoption hit 1,200 active users by week 4. Training jobs completed 35 % faster than baseline and cost fell to $1,850/month. The system handled peak 12k concurrent sessions with < 190 ms latency (95th percentile).

**Leadership Principles** – *Customer Obsession* (built a frictionless UI), *Ownership* (took end‑to‑end responsibility), *Dive Deep* (profiled every layer for cost/latency).  

**Bar‑raiser takeaways** – I documented trade‑offs (spot vs. on‑demand, Lambda concurrency limits) and iterated after a failure where a SageMaker job stalled; introduced watchdog Lambda to auto‑restart jobs, reducing downtime from 15 min to < 2 min.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
