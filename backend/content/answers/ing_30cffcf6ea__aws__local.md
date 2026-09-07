---
qid: ing_30cffcf6ea__aws__local
question: 'Explain: 109: What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 492
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:39-05:00'
sources: []
---

**Context Engineering**  
*(Amazon Leadership Principles: Customer Obsession & Dive Deep)*  

During my last role as a ML Solutions Architect for a retail platform, I was tasked with improving recommendation accuracy across millions of SKUs while keeping latency under 50 ms. The problem turned out to be *missing contextual signals*—user device type, time‑of‑day, and inventory freshness—so our models were treating every request the same.

**S – Situation:**  
We had a batch‑trained model that served predictions via Lambda@Edge, but click‑through rates (CTR) plateaued at 1.8 % despite A/B testing new features.

**T – Task:**  
Implement a scalable *context engineering* pipeline to enrich each request with real‑time metadata and retrain the model accordingly.

**A – Action:**  
1. **Data Capture**: Added DynamoDB Streams + Kinesis Data Firehose to ingest user session logs (device, locale) in real time.  
2. **Feature Store**: Deployed SageMaker Feature Store for low‑latency feature retrieval; cached device‑type and inventory freshness in ElastiCache Redis with TTL 5 s.  
3. **Model Update**: Scheduled nightly SageMaker training jobs that merged batch features (historical sales) with the new real‑time context, using Hyperparameter Tuning on EC2 Spot Instances to keep costs <$300/day.  
4. **Serving Layer**: Updated Lambda@Edge to query Feature Store first; if miss, fall back to default values.

**R – Result:**  
CTR increased from 1.8 % to **3.6 %** (+100 %) in two weeks, translating to an estimated $12M annual revenue lift. Cost per prediction dropped by 15 % thanks to spot‑instance tuning. The solution also reduced model drift by 40 %, as context features captured seasonal shifts.

*Learning:*  
I realized that *context is not a feature you add later—it's the foundation*. Early involvement of data engineering and product teams ensured we captured the right signals, avoiding costly rework. This experience sharpened my bias for action while maintaining ownership over end‑to‑end ML delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
