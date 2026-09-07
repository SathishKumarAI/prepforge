---
qid: ing_747a153c43__aws__local
question: 'Explain: Model Training — Inside Kaiju - building conversational models
  at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 552
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:18-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a cross‑functional squad that built **Kaiju**, an internal chatbot platform powering > 50 000 daily user interactions across multiple business units. My mandate was to move from prototype models to production‑ready conversational AI at scale, while keeping latency < 200 ms and cost per inference <$0.001.

**Action (Technical Design)**  
1. **Data pipeline** – Ingested 10 TB of conversation logs into Amazon S3, used Glue ETL to clean & label data, then staged it in Redshift for fast analytics.  
2. **Model training** – Deployed HuggingFace Transformers on SageMaker managed notebooks, auto‑scaling to 8 GPU instances (P4d). Leveraged **SageMaker Experiments** for version control and **SageMaker Debugger** to catch overfitting early.  
3. **Serving** – Trained models were exported to a SageMaker endpoint behind an Application Load Balancer, with autoscaling based on CPU utilization. To cut inference cost, I introduced **Amazon Elastic Inference** (1x) per instance.  
4. **Monitoring & Feedback loop** – Integrated CloudWatch metrics, Lambda‑driven alerts for drift, and a nightly retraining job triggered by a step function whenever new data exceeded 5 % of the training set.

**Result**  
- Reduced inference latency from 350 ms to 140 ms (2.5× faster).  
- Cut monthly cost from $12k to $3.8k, a **68 % savings**.  
- Achieved an F1‑score of 0.92 on the live traffic test set, surpassing the target 0.90 by 9 %.  

**Reflection (Leadership Principles)**  
*Ownership*: I owned the entire ML lifecycle, from data ingestion to deployment, ensuring no hand‑offs that could introduce delays.  
*Dive Deep*: By instrumenting every layer of the stack, I surfaced subtle GPU memory leaks and data quality issues that would have otherwise cost $5k/month in wasted compute.  

**What a bar‑raiser listens for**  
- Quantified impact (latency, cost, accuracy).  
- Demonstrated depth: architecture decisions, trade‑offs between SageMaker vs Lambda, Elastic Inference.  
- Learning from failure: after an initial 400 ms spike we traced it to stale embeddings; we introduced a nightly refresh job that prevented recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
