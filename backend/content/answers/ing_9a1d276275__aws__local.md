---
qid: ing_9a1d276275__aws__local
question: 'Explain: Trade-offs — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 504
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a recommendation engine that served 4 M daily users. The goal was to cut latency by 40 % while keeping costs < $200k/month.

**Action (Architecture Trade‑offs)**  
I compared three patterns:

| Pattern | Key AWS Services | Scalability | Availability | Cost |
|---------|------------------|-------------|--------------|------|
| **Batch + Lambda** | S3, Glue, Lambda, Step Functions | Linear scaling with data size | 99.9 % (regional) | Low – pay‑per‑invoke |
| **Real‑time microservices** | ECS/EKS, Kinesis, DynamoDB, API Gateway | Elastic via autoscaling | 99.99 % (multi‑AZ) | Medium–High (compute) |
| **Serverless inference** | SageMaker Endpoint, Lambda, CloudWatch | Auto‑scales to traffic spikes | 100 % (managed) | High – per inference |

I chose **real‑time microservices** with ECS + Kinesis because latency was critical. To mitigate cost, I used Spot Instances for batch training jobs and reserved capacity for inference containers.

**Result**  
Latency dropped from 750 ms to 420 ms (−44 %). Monthly spend stayed at $190k, under budget by 5 %. A/B tests showed a 12 % lift in click‑through rate.  

**Reflection & Bar‑raiser cues**  
- **Ownership**: I drove end‑to‑end change and owned the SLA shift.  
- **Dive Deep**: Quantified trade‑offs (latency, cost, throughput) with real data.  
- **Bias for Action**: Rolled out a pilot in 3 weeks instead of waiting for quarterly review.  
- **Learning from Failure**: Early prototype had cold‑start issues; I added a prewarmed cache layer to reduce 30 % of starts.

This demonstrates how I balance scalability, availability, and cost while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
