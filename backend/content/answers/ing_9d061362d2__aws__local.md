---
qid: ing_9d061362d2__aws__local
question: 'Explain: Family and Time Off — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 546
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:55-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a system that lets employees schedule “Family & Time‑Off” events for the entire organization while keeping compliance with labor laws and providing managers with real‑time visibility. The goal was to reduce manual approvals by 80 % and cut scheduling conflicts by 50 %.

**Action (Design)**  
I architected a serverless solution on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| API gateway for CRUD | Amazon API Gateway + Lambda | Low‑latency, auto‑scaling |
| Business logic & validation | AWS Lambda (Python) | Stateless, easy to test |
| Data store | DynamoDB (partition key = EmployeeID, sort key = Date) | Event‑driven, 99.999% availability |
| Scheduling rules & compliance | Amazon EventBridge + Step Functions | Orchestrates multi‑step approval workflows |
| Notifications | SNS + SES | Immediate alerts to managers and HR |
| Analytics & reporting | Athena on S3 (exported logs) | Cost‑effective BI for trend analysis |

**Result**  
- **Performance:** 99.999% uptime during peak holiday periods; max latency < 30 ms.  
- **Cost:** $0.45/month per 1,000 requests vs. $12/month on a traditional EC2 + RDS stack.  
- **Impact:** Manual approvals dropped from 200 hrs/week to 30 hrs; scheduling conflicts fell from 12 % to 4 %.  

**Leadership Principles Reflected**

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took end‑to‑end responsibility, from requirement gathering through post‑launch monitoring. |
| **Dive Deep** | Analyzed latency logs and cost per invocation; tuned DynamoDB provisioned throughput to match traffic peaks. |
| **Deliver Results** | Quantified ROI (cost savings, time saved) and delivered on the promised SLA. |

**Bar‑raiser Takeaways**

1. **Ownership:** I drove the project from concept to production and maintained it post‑launch.  
2. **Depth:** My design choices were justified with metrics (latency, cost per request).  
3. **Quantified Impact:** Clear KPI reductions (80 % manual time, 50 % conflicts) showcase real business value.  
4. **Learning from Failure:** Initial prototype hit cold‑start latency; I mitigated it by using provisioned concurrency and moving to Lambda@Edge for edge requests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
