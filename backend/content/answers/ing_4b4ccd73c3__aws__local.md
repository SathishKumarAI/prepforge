---
qid: ing_4b4ccd73c3__aws__local
question: 'Explain: Non-functional — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 473
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:21-05:00'
sources: []
---

**Non‑Functional Requirements for an AI‑powered Customer Support Agent**

*Situation:*  
Our e‑commerce platform serves 2 M daily active users. A pilot of a chatbot was launched to reduce ticket volume, but early adopters reported slow responses and inconsistent accuracy.

*Task:*  
Define non‑functional requirements that ensure the agent is **fast, reliable, secure, and cost‑effective** while delivering a superior customer experience.

*Action:*  

| Requirement | Design | AWS Services | Trade‑offs |
|-------------|--------|--------------|------------|
| **Latency ≤ 500 ms** (95th percentile) | Stateless Lambda + API Gateway + DynamoDB cache | Lambda, API GW, DAX | Cold start → use provisioned concurrency |
| **Availability ≥ 99.99%** | Multi‑AZ deployment, autoscaling, health checks | CloudFront, ELB, Auto Scaling | Extra cost for cross‑region replicas |
| **Accuracy ≥ 90% intent match** | Continuous training pipeline + SageMaker Model Monitor | SageMaker, Step Functions | Larger models → higher inference cost |
| **Data Privacy (GDPR/CCPA)** | Encryption at rest & in transit, fine‑grained IAM | KMS, Secrets Manager | Extra audit overhead |
| **Cost ≤ $0.02 per interaction** | Spot Instances for batch training, on‑demand for inference | EC2 Spot, Lambda, S3 | Spot risk of interruption |

*Result:*  
After implementing the above, response latency dropped to 320 ms (30% improvement), uptime hit 99.999%, and ticket volume decreased by **27 %**, saving ~$1.8M annually in support costs.

**Leadership Principles:**  
- *Customer Obsession*: Prioritized speed & accuracy to delight users.  
- *Ownership*: Took end‑to‑end responsibility for reliability, cost, and compliance.  

Bar‑raiser looks for clear ownership, deep dive into trade‑offs, quantified impact, and lessons learned from early failures (e.g., addressing cold starts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
