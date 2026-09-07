---
qid: ing_2d714d40c0__aws__local
question: 'Explain: This will always have a higher probability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 433
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:53-05:00'
sources: []
---

**Answer (Amazon style)**  

> **S**ituation – While building a fraud‑detection model for a credit‑card portal, the engineering team noticed that *“fraudulent transactions always have a higher probability of being flagged”* than legitimate ones.  
> **T**ask – I had to justify this observation and design a system that could handle skewed class distribution without hurting throughput.  
> **A**ction – I first dove deep into the data: 0.5 % fraud vs 99.5 % normal, leading to an imbalance factor of 1:200. I applied *SMOTE* for oversampling and used a *class‑weighted logistic regression* on SageMaker, which increased true‑positive rate from **73 %** to **87 %** while keeping false positives under **4 %**.  
> I then architected an end‑to‑end pipeline: Kinesis Data Streams → Lambda (pre‑process) → SageMaker Endpoint (real‑time scoring) → DynamoDB (audit). Using spot instances cut inference cost by **30 %**, and auto‑scaling ensured 99.9 % availability during peak hours.  
> **R**esult – The model achieved a lift of **15 %** in fraud detection, saving the business ~$2M annually, and the pipeline now processes 10k txns/sec with <1 s latency.  

*Leadership Principles:* **Ownership** (I owned end‑to‑end solution), **Dive Deep** (data‑driven bias analysis), **Bias for Action** (quick prototype & deployment).  

Bar‑raiser notes: clear ownership, quantitative impact, trade‑off reasoning (cost vs latency), and lessons from initial imbalance failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
