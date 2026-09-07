---
qid: ing_37d20d7f02__aws__local
question: 'Explain: Interview questions — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 525
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:51-05:00'
sources: []
---

**Question:** *Explain how you would design a multimodal AI system for an e‑commerce recommendation engine.*

---

### Situation  
I was hired by a mid‑size retailer to replace their single‑modal (text only) recommender. The goal: deliver 30 % higher click‑through rates (CTR) and reduce server cost by 20 %.  

### Task  
Build a **multimodal** model that fuses product images, textual descriptions, and user interaction logs, then deploy it at scale on AWS.

### Action  

| Step | Technical Design | Key AWS Services |
|------|------------------|-----------------|
| Data Ingestion | Use **AWS Glue** to crawl S3 buckets (images) and RDS (text + click history). Normalize into a single **Parquet** table in Lake Formation. | Glue, Lake Formation, S3 |
| Feature Engineering | Spark jobs on EMR extract image embeddings via **Amazon Rekognition**; text embeddings via **AWS Comprehend**; interaction features from Clickstream Kinesis streams. | EMR, Rekognition, Comprehend, Kinesis |
| Model Training | Train a **PyTorch** multimodal transformer on SageMaker, using hyper‑parameter tuning (SM Hyperband). Store the best checkpoint in S3. | SageMaker, S3 |
| Inference | Deploy as a SageMaker endpoint behind an **Application Load Balancer**; use Lambda for feature enrichment and caching with **DynamoDB Accelerator (DAX)**. Auto‑scale based on CloudWatch metrics. | SageMaker Endpoint, ALB, Lambda, DynamoDB/DAX |

*Dive deep*: I profiled GPU utilization, discovered that image preprocessing was the bottleneck, and switched from Pillow to NVIDIA’s RAPIDS, cutting training time 3×.

### Result  
- **CTR increased by 34 %** (from 1.2 % → 1.6 %) in production A/B test.  
- **Cost per recommendation fell 22 %** due to spot‑instance usage and DAX caching.  
- System achieved **99.9 % availability** with multi‑AZ deployment.

### Reflection  
I owned the end‑to‑end pipeline, iterated fast (Bias for Action), and documented lessons on multimodal data skew—an example of *Deliver Results* and *Customer Obsession*.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
