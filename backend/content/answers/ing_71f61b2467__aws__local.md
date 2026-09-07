---
qid: ing_71f61b2467__aws__local
question: 'Explain: Example: AI Job Completed Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 467
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:54-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a team that built an “AI‑Job‑Completed” webhook service for a SaaS ML platform. Clients needed real‑time, reliable callbacks when inference jobs finished, but the system had to support 50k concurrent users and 200k events per day.

**Action (A)**  
1. **Requirements & Architecture** – I scoped the event flow: job status → SNS topic → Lambda → webhook HTTP POST.  
2. **AWS Services** –  
   * **SNS** for fan‑out, decoupling producers from consumers.  
   * **Lambda** to serialize the payload and retry on 5xx with exponential backoff.  
   * **API Gateway** (optional) for client registration, throttling, and authentication via Cognito.  
   * **DynamoDB** to store webhook URLs and status, enabling idempotency.  
3. **Scalability & Availability** – SNS scales to millions of messages; Lambda auto‑scales with concurrency limits; DynamoDB global tables guarantee 99.999% availability across regions.  
4. **Cost Optimization** – Use Lambda’s provisioned concurrency only for the top 10 % traffic peaks; enable S3 cold storage for archival logs.  
5. **Monitoring & Failure Handling** – CloudWatch Alarms on `LambdaError` metrics, dead‑letter queues to SNS topics that trigger Ops alerts.

**Result (R)**  
- Reduced average webhook latency from 4.2 s to 0.8 s (90th percentile).  
- Achieved 99.97% success rate over a 3‑month period.  
- Cut operational cost by 35 % versus the legacy polling implementation.

**Leadership Principles** – **Customer Obsession**: delivered sub‑second callbacks; **Ownership**: drove cross‑functional design, risk mitigation, and post‑mortem learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
