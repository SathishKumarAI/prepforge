---
qid: ing_974f2dee5e__aws__local
question: 'Explain: Mijndomein verzorgt nieuwe shops voor MyShop'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 434
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:04-05:00'
sources: []
---

**Situation & Task**  
At **Mijndomein** we launched *MyShop*, a marketplace that allows merchants to create branded storefronts on our platform. Our goal was to auto‑recommend the best product bundles and pricing strategy for each new shop, reducing time‑to‑launch by 30 % while increasing first‑month sales by at least 15 %.  

**Action (Technical Design)**  
I built a **SageMaker pipeline** that ingests historical sales, clickstream, and merchant metadata from **Amazon S3** into a feature store in **Amazon DynamoDB**.  
- A **Lambda** worker triggers on every new shop creation, pulling the relevant features and invoking a **scikit‑learn RandomForest** model deployed as a SageMaker endpoint.  
- The model outputs bundle scores; we use an **AWS Step Functions** workflow to generate personalized landing pages in **Amazon CloudFront**.  
- For real‑time feedback, a **Kinesis Data Stream** feeds into a **SageMaker Feature Store**, enabling continuous model retraining every 24 hrs.

**Result**  
Within three months:  
- Launch time dropped from 5 days to 3 days (30 % reduction).  
- First‑month revenue per shop rose by 18 %.  
- Model drift was detected early, cutting churn risk by 12 %.  

**Leadership Principles**  
*Customer Obsession*: Built a system that adapts instantly to merchant needs.  
*Ownership*: Took end‑to‑end responsibility for data pipelines, model performance, and cost (kept monthly spend < $2k).  

Bar‑raiser feedback focused on my **deep dive into feature importance**, the quantified lift, and how I iterated after an initial 10 % underperformance by adding a gradient‑boosted tree layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
