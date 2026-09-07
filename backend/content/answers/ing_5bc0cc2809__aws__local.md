---
qid: ing_5bc0cc2809__aws__local
question: Want Results with Deep Learning for Computer Vision?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 450
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:42-05:00'
sources: []
---

**Situation & Task**  
I led a startup’s vision‑analysis product that needed to detect defects in 4K manufacturing footage with < 1 % false positives. The goal was to deliver real‑time inference (≤ 30 ms) while keeping cloud spend under $5k/month.

**Action**  
*Designed an end‑to‑end pipeline on AWS:*  
- **Data ingestion:** S3 + Kinesis Video Streams, auto‑tagging with SageMaker Ground Truth.  
- **Pre‑processing:** Lambda + Elastic Transcoder to crop/resize frames; store artifacts in EFS for parallel training.  
- **Training:** SageMaker distributed training (Multi‑GPU `ml.p3.8xlarge`) on a ResNet‑50 backbone fine‑tuned with transfer learning. I introduced a custom loss that penalized false positives, reducing them from 4.2 % to 0.7 %.  
- **Inference:** Deployed as a SageMaker endpoint behind an Application Load Balancer; autoscaling based on CPU/GPU metrics. For burst traffic, we added Lambda‑based warm‑up and spot instances (`ml.g5.2xlarge`) to cut inference cost by 35 %.

**Result**  
Achieved **99.3 % precision**, 98 % recall, and < 30 ms latency at peak load. Monthly spend fell from $12k to **$4.8k**, while the defect‑detection rate increased by **15 %**, directly boosting revenue.

**Learning & Ownership**  
I held weekly “post‑mortem” reviews with the ML team, documenting every failure point (e.g., data imbalance) and iterating on the loss function. This continuous feedback loop exemplified *Customer Obsession* and *Ownership*, ensuring our model truly met production needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
