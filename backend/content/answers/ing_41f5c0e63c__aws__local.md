---
qid: ing_41f5c0e63c__aws__local
question: 'Explain: Reject-sample with human spot-check — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 540
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:06-05:00'
sources: []
---

**Situation (S)**  
While building a recommendation engine for our e‑commerce platform, we noticed the AI model was drifting after a surge of seasonal traffic. The risk: a mis‑classified “out‑of‑stock” product could still appear in search results, hurting customer trust.

**Task (T)**  
Implement a *Customer Distillation Pipeline* that rejects low‑confidence samples for human review before they hit production, while keeping latency under 200 ms and cost below $0.01 per request.

**Action (A)**  

1. **Reject‑Sample Module** – A lightweight Lambda function (Python) sits on API Gateway, scoring each request with a pre‑trained SageMaker endpoint.  
2. **Human Spot‑Check Queue** – Samples with confidence < 0.7 are pushed to an SQS FIFO queue; a scheduled Step Functions workflow pulls batches of 50 and stores them in DynamoDB for review.  
3. **Feedback Loop** – After manual label, the updated sample is sent back to SageMaker’s Batch Transform job nightly to fine‑tune the model (AutoML).  
4. **Observability** – CloudWatch metrics track rejection rate, latency, and human turnaround; alerts trigger if < 95 % of requests are auto‑approved.

**Result (R)**  

- Rejection rate dropped from 12 % to 3 %, improving accuracy by **+2.5 pp** in NDCG@10.  
- Customer complaints about false positives fell by **30 %** within two weeks.  
- Cost per request stayed at $0.008, under budget.

---

### AWS Services Used
| Service | Role |
|---------|------|
| Lambda | Real‑time scoring and rejection logic |
| API Gateway | Low‑latency front door |
| SageMaker Endpoint | Inference |
| SQS FIFO | Human review queue |
| DynamoDB | Store flagged samples |
| Step Functions | Orchestrate nightly retraining |
| CloudWatch & SNS | Monitoring & alerting |

**Leadership Principles Highlighted**

- **Customer Obsession** – Prevents customers from seeing incorrect inventory.  
- **Ownership & Dive Deep** – Built a fully automated feedback loop, quantified impact, and iterated on failure (initial high rejection rate).  

This pipeline demonstrates end‑to‑end ownership, deep technical design, measurable ROI, and continuous learning—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
