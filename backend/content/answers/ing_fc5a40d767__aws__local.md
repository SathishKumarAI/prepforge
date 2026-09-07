---
qid: ing_fc5a40d767__aws__local
question: 'Explain: Hate Speech Detection — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 440
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my previous role I led a project for a social‑media client that needed an automated hate‑speech filter to protect user safety while maintaining free expression. The goal was to reduce flagged content by 80 % in real time without raising false positives above 5 %.  

**Action (Dive Deep & Ownership)**  
I assembled a cross‑functional team, defined the data pipeline, and chose a hybrid architecture:  
- **Data ingestion:** Kinesis Data Streams → Lambda for pre‑processing (tokenization, profanity masking).  
- **Feature extraction & model training:** SageMaker Endpoint using a fine‑tuned BERT base on a custom hate‑speech corpus; continuous evaluation with CloudWatch metrics.  
- **Inference layer:** API Gateway + Lambda (serverless) to keep latency < 150 ms per request.  
- **Model monitoring:** Evidently AI for drift detection, triggering retraining automatically.  

I set up an automated CI/CD in CodePipeline and leveraged Spot Instances to cut training cost by 40 %. I also introduced a “confidence‑based throttling” rule: content with scores above 0.95 bypasses moderation, while lower scores are queued for human review—this reduced false positives from 12 % to 4.3 %.  

**Result (Deliver Results)**  
- **Accuracy:** Precision 92 %, Recall 94 %.  
- **Cost:** $1,200/month vs. the previous $2,800.  
- **User impact:** Reported hate‑speech incidents dropped 81 % in three months, and user complaints about over‑moderation fell by 67 %.  

**Bar‑raiser takeaways** – I owned every layer of the stack, dove deep into data quality & model drift, quantified success with clear KPIs, and iterated rapidly after a false‑positive spike that taught us to refine our feature set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
