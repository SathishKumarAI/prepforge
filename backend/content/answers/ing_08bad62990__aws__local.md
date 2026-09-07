---
qid: ing_08bad62990__aws__local
question: 'Explain: Use RESTful URLs and actions — Best Practices for Designing a
  Pragmatic RESTful API | Vinay Sahni'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 520
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:49-05:00'
sources: []
---

**Situation & Task**  
When I led the migration of our recommendation engine from an internal RPC‑style service to a public REST API (Feb 2024 – Apr 2024), the goal was to expose model predictions to third‑party partners while keeping latency <30 ms and cost per call < $0.0001.

**Action & Design**  
I applied *Customer Obsession* and *Dive Deep*:  

| Requirement | RESTful Design Choice | AWS Service | Rationale |
|-------------|----------------------|--------------|-----------|
| Predict endpoint | `POST /v1/models/{modelId}/predict` (payload JSON) | API Gateway + Lambda@Edge | Keeps URL noun‑centric, POST for state‑changing action; edge caching reduces latency. |
| Model versioning | `GET /v1/models/{modelId}?version=latest` | S3 + DynamoDB | Immutable model artifacts in S3, metadata in DynamoDB – easy rollback. |
| Batch inference | `POST /v1/batch/predict` (array of inputs) | Step Functions → SageMaker batch transform | Handles >10 k rows with autoscaling; cost‑effective. |
| Monitoring | `GET /v1/metrics?modelId=&period=24h` | CloudWatch + Athena | Exposes metrics without extra calls. |

I introduced **idempotency keys** for predict to guard against duplicate requests, and used *Bias for Action* by rolling out a canary in 10% of traffic with automated rollback if latency >35 ms.

**Result**  
- Latency dropped from 70 ms (RPC) to 22 ms (REST).  
- Cost per call fell from $0.0007 to $0.00008, saving ~30 k USD/month.  
- Partner churn decreased by 12 % because of faster integration and clearer docs.

**Bar‑raiser takeaways**  
- **Ownership**: I owned the entire migration, coordinated DevOps, ML Ops, and security teams.  
- **Dive Deep**: Detailed analysis of traffic patterns guided our choice of API Gateway vs. Lambda@Edge.  
- **Quantified Impact**: Clear metrics (latency, cost) proved business value.  
- **Learning from Failure**: Initial attempt used a single Lambda function; it hit concurrency limits, prompting the switch to Step Functions for batch jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
