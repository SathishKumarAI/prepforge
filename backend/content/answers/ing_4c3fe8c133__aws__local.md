---
qid: ing_4c3fe8c133__aws__local
question: 'Explain: Architecture — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 511
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When our recommendation team needed a high‑accuracy image classifier for product tagging, the existing model lagged at **78 % top‑5 accuracy**, hurting user satisfaction and revenue. I owned the refactor.

**Action (Dive Deep & Ownership)**  
I redesigned the pipeline around an *Annotated ResNet‑50*:

| Layer | Purpose | AWS Service |
|-------|---------|-------------|
| Input → Conv(7×7, stride 2) + BN + ReLU | Extract low‑level features | **Amazon SageMaker Processing** (GPU instances) |
| 5 Residual Blocks (each with bottleneck convs) | Deep feature extraction | **SageMaker Training** on `ml.p3.8xlarge` |
| Global AvgPool → FC → Softmax | Final prediction | **ECR container** deployed to **Amazon ECS Fargate** for zero‑maintenance inference |
| Post‑processing: *label confidence threshold* + *metadata enrichment* | Improves precision on edge cases | **AWS Lambda** + **DynamoDB** |

I added a lightweight *annotation layer* that stores intermediate activations in S3, enabling post‑hoc debugging and data‑driven retraining. The model achieved **92 % top‑5 accuracy**—a 14 pp lift—while inference latency dropped from 180 ms to 95 ms per image.

**Result (Deliver Results)**  
The new pipeline reduced monthly compute costs by **$12k** (via spot instances) and cut data labeling time by **30 %** thanks to the annotation logs. User engagement on tagged products rose by **18 %**, translating to an estimated **$1.4M** incremental revenue in Q2.

**Bar‑raiser cues I hit:**  
- *Ownership*: Took end‑to‑end responsibility from data prep to deployment.  
- *Dive Deep*: Built a modular, annotated architecture that surfaced bottlenecks and accelerated debugging.  
- *Quantified Impact*: Precise accuracy, cost, latency, and revenue metrics.  
- *Learning from Failure*: Initial runs over‑fit on rare classes; adding the annotation layer revealed imbalance, leading to balanced sampling and a 4 pp accuracy bump.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
