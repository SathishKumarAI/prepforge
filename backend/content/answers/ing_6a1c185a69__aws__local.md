---
qid: ing_6a1c185a69__aws__local
question: 'Explain: Architecture Decision Tree — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 579
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:32-05:00'
sources: []
---

**Architecture Decision Tree – Pattern Selection**

When I lead a new AI service (e.g., image‑classification API), I start with an *architecture decision tree* that maps **business intent → technical constraints → pattern choice**.  

| Step | Question | Typical Pattern | AWS Services |
|------|----------|-----------------|--------------|
| 1 | What is the latency requirement? | Low‑latency inference | **Lambda + SageMaker Endpoint** (or EC2 spot for higher throughput) |
| 2 | Is the workload bursty or steady? | Burst: *Serverless*; Steady: *Auto‑Scaling Cluster* | **AWS Fargate**, **ECS/EKS Auto Scaling** |
| 3 | How large is the model? | Small (<500 MB): *Edge*; Large (>5 GB): *SageMaker Neo* for inference on GPU | **SageMaker Neo**, **EC2 G4/G5** |
| 4 | Need real‑time vs batch? | Real‑time: *Event‑driven*; Batch: *Data Pipeline* | **Kinesis + Lambda** or **Glue + EMR** |

**Example Decision Flow**

1. **Latency ≤ 200 ms, bursty traffic** → *Serverless* → `Lambda` ↔ `SageMaker Endpoint`.  
2. **Model = 3 GB, steady 10k QPS** → *Containerized* → `ECS Fargate` with GPU‑enabled instances; autoscale on CloudWatch metrics (CPU >70 % ⇒ add 1 task).  

**Metrics & Impact**

- After refactoring from EC2‑based monolith to Lambda+SageMaker, I cut **response time by 35 %** and reduced **costs by 28 %** (from $12k/month to $8.5k/month) while maintaining >99.9 % availability.

**Bar‑raiser Signals**

- *Ownership*: I own the decision tree and continuously refine it post‑deployment.  
- *Dive Deep*: I validate patterns against real traffic logs, not just assumptions.  
- *Quantified Impact*: Every pattern shift is tied to measurable latency/cost targets.  
- *Learning from Failure*: When Lambda cold starts hurt performance, we pivoted to provisioned concurrency—documenting the trade‑off and updating the tree for future projects.

*Leadership Principles highlighted: Customer Obsession (deliver low‑latency), Ownership (own the decision process), Dive Deep (metric‑driven validation), Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
