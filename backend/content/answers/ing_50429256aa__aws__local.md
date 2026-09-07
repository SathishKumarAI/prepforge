---
qid: ing_50429256aa__aws__local
question: 'Explain: Anti-Patterns to Avoid — Framework Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 520
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:46-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team that had to choose an AI framework for a real‑time fraud‑detection service used by 15 M+ daily users. The deadline was tight (4 weeks) and we couldn’t afford a costly “research‑and‑deploy” cycle.

**Action – Anti‑Pattern Checklist & Design**  
I created a lightweight **Anti‑Patterns Framework Selection Guide** that focused on:  

| Anti‑pattern | Why it hurts | Mitigation | AWS services |
|--------------|--------------|------------|--------------|
| *“Choose the most popular framework”* | Popularity ≠ fit.  Popular libraries may be over‑engineered for our latency budget. | Map **use case** → **model size** → **latency**. Use SageMaker Neo or AWS Inferentia to compile models. | SageMaker, Inferentia, Lambda |
| *“Treat AI as a black box”* | Lack of observability leads to blind deployments and SLA breaches. | Embed model explainability (SHAP) and monitoring (CloudWatch). | SageMaker Experiments, CloudWatch |
| *“Ignore data drift”* | Models degrade quickly on live traffic. | Continuous retraining pipeline with SageMaker Pipelines + Kinesis Data Streams. | SageMaker Pipelines, Kinesis |
| *“Scale horizontally without cost control”* | Unlimited autoscaling can blow the bill. | Use **spot instances** + **reserved capacity**; set budget alerts. | EC2 Spot, Auto Scaling, Budgets |

I presented this guide to stakeholders, then piloted **TensorFlow Lite on Inferentia** with 1 ms inference latency and <0.5% error drift over a month—down from the previous 10 ms/3% drift.

**Result**  
Deployment was 30 % faster than the original plan, cost‑saved $120K annually, and reduced false positives by 18%.  

**Bar‑raiser notes**  
- **Ownership**: I owned the entire decision cycle, from problem framing to monitoring.  
- **Dive Deep**: Quantified latency, error drift, and cost per inference.  
- **Learning from Failure**: The first pilot with a generic framework increased latency by 7×; that failure drove the shift to specialized hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
