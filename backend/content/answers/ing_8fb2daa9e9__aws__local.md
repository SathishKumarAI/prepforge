---
qid: ing_8fb2daa9e9__aws__local
question: 'Explain: Retries — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 564
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:02-05:00'
sources: []
---

**Situation (S)**  
While building a real‑time inference pipeline for a recommendation engine, the HTTP endpoint that pulled feature vectors from an external analytics service started returning 5xx errors during peak traffic. The system had to keep up with **50 k requests/sec** without dropping predictions.

**Task (T)**  
Implement a retry strategy that guarantees *high availability* and *data integrity*, while keeping latency under **120 ms** for 95 % of requests.

**Action (A)**  
1. **Design** –  
   *Wrap the external call in an AWS Lambda function behind an API Gateway.*  
   *Use Amazon SQS FIFO queues to buffer incoming requests; each message carries a unique id and retry counter.*  
   *Implement exponential back‑off with jitter (base = 200 ms, max = 2 s) and a hard cap of 3 retries. If retries fail, route the message to an “Dead‑Letter” queue for manual inspection.*  

2. **Idempotency** – store each request id in DynamoDB; before processing, check if the id already exists to avoid duplicate inference.  

3. **Monitoring & Scaling** – CloudWatch metrics (`RetryCount`, `ErrorRate`) trigger an Auto Scaling policy that spins up additional Lambda concurrency when the error rate > 2%.  
4. **Cost & Trade‑offs** – SQS FIFO guarantees ordering at ~$0.50 per million messages; DynamoDB writes add ~$0.25/million but ensure idempotency. The back‑off keeps cost low by avoiding unnecessary retries.

**Result (R)**  
After deployment, the system maintained 99.8 % availability during a 30 min traffic spike and reduced 5xx errors from **12 % to < 0.1 %**. Latency remained below 120 ms for 96 % of requests, meeting SLAs.

---

### What a bar‑raiser looks for  
- **Ownership:** Took end‑to‑end responsibility, including monitoring and failure handling.  
- **Dive Deep:** Chose idempotent storage, precise back‑off math, and FIFO queues after profiling latency vs cost.  
- **Quantified Impact:** Showed concrete SLA improvements and cost figures.  
- **Learning from Failure:** Implemented dead‑letter routing to surface unseen edge cases for future resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
