---
qid: ing_1adc8c01d4__aws__local
question: 'Explain: Lock on messages and manual handling of the complexity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 460
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:59-05:00'
sources: []
---

**Situation:**  
At my last role I led a team that had to process millions of customer‑feedback events in real time. The system used **Amazon SQS** for decoupling producers from workers, but the default *auto‑visibility timeout* caused duplicate processing and occasional message loss when downstream ML inference services (AWS SageMaker endpoints) timed out.

**Task:**  
I was tasked to build a robust “lock‑and‑retry” mechanism that would guarantee at‑most‑once semantics while keeping latency low.

**Action:**  
1. **Visibility Timeout Tuning** – I set the queue’s timeout to 30 s, double the longest SageMaker inference time, and added an *auto‑extend* Lambda triggered by the `ReceiveMessage` event that refreshed the lock if processing was still ongoing.
2. **Manual Retry State** – I introduced a DynamoDB table (`ProcessingState`) keyed by MessageId with attributes `Status`, `Retries`, and `LastAttempt`. Workers write a “processing” flag before invoking SageMaker; on success they delete the item, on failure they increment `Retries` and re‑queue via SQS.
3. **Dead‑Letter Handling** – After 5 retries I moved messages to an SNS topic that triggered a Lambda alerting ops and archived the payload for later analysis.

**Result:**  
Duplicate processing dropped from ~12 % to <0.1 %, overall latency improved by 18 %, and we avoided SLA violations on 99.9 % of requests. Cost increased only 3 % due to additional DynamoDB writes, which was acceptable given the critical business impact.

**Learnings:**  
*Ownership*—I owned the end‑to‑end flow and drove cross‑team coordination. *Dive Deep*—analyzed CloudWatch metrics to pinpoint the exact timeout window. I also documented a failure scenario (SageMaker outage) that informed our fallback strategy, reinforcing a culture of learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
