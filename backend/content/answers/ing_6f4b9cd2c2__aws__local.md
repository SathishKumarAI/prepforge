---
qid: ing_6f4b9cd2c2__aws__local
question: 'Explain: Linear Backoff — Retry Strategies for System Failures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 360
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:36:55-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a high‑throughput recommendation engine that hit an external ML inference API (AWS SageMaker). After a surge in traffic the API returned *429 Too Many Requests* and occasional *5xx* errors. The service needed < 200 ms latency while keeping cost under $1k/month.

**Action**  
I implemented **Linear Backoff with Exponential Jitter** as the retry policy, using AWS SDK’s `retryer` and a custom `RetryPolicy`.  
- **Linear backoff**: wait 100 ms × attempt number (0–4).  
- **Jitter**: randomize ±20 % to avoid thundering herd.  
I added an *idempotent* wrapper around the API call and logged each retry with CloudWatch metrics.

**Result**  
Post‑deployment, request success rate rose from 86 % to **99.4 %**, while average latency stayed at 180 ms. Monthly cost increased by only 3 % due to minimal additional invocations. The system now gracefully handles spikes without manual intervention, and the retry logic is fully testable in a local Lambda environment.

**Amazon Leadership Principles**  
- **Customer Obsession**: Delivered a reliable experience for end users.  
- **Dive Deep & Ownership**: Diagnosed root causes, engineered a robust solution, and maintained it end‑to‑end.  

**Bar‑raiser notes** – I quantified impact (latency & error rate), showed deep understanding of AWS retry mechanisms, and learned that jitter prevents synchronized retries after large failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
