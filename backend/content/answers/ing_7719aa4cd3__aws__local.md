---
qid: ing_7719aa4cd3__aws__local
question: 'Explain: We also have another method for counting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 447
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:35-05:00'
sources: []
---

**Situation / Task**  
When building the real‑time fraud detection pipeline for our payment service, we initially used a simple rule‑based counter to flag suspicious transactions (e.g., “count of high‑value purchases in 24 h”). The metric lagged by ~12 % because it ignored user behavior patterns. I owned the redesign and led a cross‑functional sprint to implement an ML‑driven counter that leveraged session embeddings.

**Action**  
1. **Requirements & Design** – Defined a stateless microservice that receives each transaction, pulls the last 30 days of activity from DynamoDB, and feeds it into an XGBoost model hosted on SageMaker.  
2. **AWS Services** –  
   * *SageMaker* for training/hosting (auto‑scaling endpoint).  
   * *DynamoDB Streams* + *Lambda* to trigger inference in real time.  
   * *CloudWatch* metrics for latency and error rates; *XRay* for tracing.  
3. **Scalability & Cost** – The endpoint scales on CPU usage, keeping 99th‑percentile latency < 50 ms. Using Spot instances for training cut costs by 40 %.  
4. **Bias for Action / Ownership** – I ran a canary rollout (5 % traffic) and monitored fraud detection accuracy vs. false positives.

**Result**  
- Fraud detection precision rose from **78 % to 92 %** in production.  
- False‑positive rate dropped by **35 %**, improving customer satisfaction scores (+0.4 on NPS).  
- The new counter processed > 1M events/day with < $200/month for inference.

**Reflection (Dive Deep)**  
Post‑mortem revealed the model drifted after a 3‑month seasonality shift; I instituted an automated retraining schedule every 14 days, reducing performance degradation to < 2 %. This cycle demonstrates ownership and continuous learning—core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
