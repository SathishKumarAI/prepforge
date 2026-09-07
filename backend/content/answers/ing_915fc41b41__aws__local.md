---
qid: ing_915fc41b41__aws__local
question: 'Explain: Int8 — Inside Kaiju - building conversational models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 387
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:45-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI team, we had a legacy *Kaiju* pipeline that trained conversational agents on 200 GB of user logs nightly. The models were accurate but training took ~48 h on an on‑prem GPU cluster, delaying feature rollouts and inflating infra costs by $12K/month.

**Action (Dive Deep & Bias for Action)**  
I spearheaded a migration to **Int8 quantization** inside Kaiju, rewriting the data‑flow in PyTorch with *torch.quantization* and integrating **AWS SageMaker Ground Truth** for automated labeling. I introduced **EFS** for shared storage, **EC2 Spot Instances (g4dn.xlarge)** for cost‑effective compute, and **S3 Lifecycle Policies** to archive older checkpoints. To ensure availability, I deployed the pipeline in a **multi‑AZ VPC** with **Auto Scaling Groups**.

**Result (Customer Obsession & Deliver Results)**  
Training time dropped from 48 h to **5 min**, cutting monthly compute spend by **70% ($8.4K saved)** while maintaining <1% accuracy loss on downstream NLU tasks. The faster cadence enabled weekly A/B tests for new dialog flows, directly improving user satisfaction scores (NPS ↑15).  

**Learning & Bar‑Raiser Insight**  
Ownership drove me to audit the entire data pipeline; I discovered a bottleneck in S3 read throughput and replaced it with **S3 Transfer Acceleration**, which further shaved 2 min from training. The bar‑raiser would note my clear ownership, deep technical dive, quantifiable impact, and iterative learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
