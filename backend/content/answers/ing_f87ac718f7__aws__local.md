---
qid: ing_f87ac718f7__aws__local
question: Ready to see your complete AI application?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 376
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:14-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, the CEO asked me to build an end‑to‑end AI product that could predict fraud in real time for millions of transactions per day. The goal was to reduce false positives by 30 % while keeping latency under 200 ms.

**Action (Technical Design)**  
I chose **Amazon SageMaker** for model training and inference, leveraging **SageMaker Pipelines** for reproducible MLOps. For data ingestion I used **Kinesis Data Streams** → **Lambda** → **S3** for raw storage, then a **Glue** ETL to build a feature store in **DynamoDB**.  
Inference was served via **Amazon SageMaker Runtime** behind an **API Gateway + Lambda@Edge** layer to guarantee <200 ms latency globally. I enabled **Model Monitor** to auto‑detect drift and retrain weekly, reducing concept drift cost by 15 %.  

**Result**  
Within three months we saw a **32 % drop in false positives**, saving the bank ~$2M annually. The system handled 5 million transactions/day with 99.9 % availability at an average hourly cost of $12, thanks to auto‑scaling and spot instances.

**Reflection (Bar‑raiser notes)**  
I owned every layer—from data pipeline to model drift monitoring—demonstrating *Ownership*. I dove deep into latency bottlenecks, iteratively tuning batch sizes and cache layers, showing *Dive Deep*. Quantifying the cost savings highlighted *Deliver Results*, while the continuous retraining loop was a learning from early failures when the first model version over‑fitted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
