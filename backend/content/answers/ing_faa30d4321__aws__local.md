---
qid: ing_faa30d4321__aws__local
question: 'Explain: Teams_Active_Plan — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:07-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In our multi‑tenant SaaS, we needed to notify users when a plan’s active period was ending so they could renew or upgrade. The legacy workflow sent a single SMS via a custom HTTP endpoint that had a 70 % failure rate and no retry logic.

*Task*: Design a robust “Teams_Active_Plan – SendSmsMessageApiTwillo” service that guarantees delivery, scales to millions of users, and reduces operational overhead.

*Action*:  
1. **API Gateway + Lambda**: Expose a REST endpoint; Lambda validates payload (plan ID, phone number) and queues the message in an SQS FIFO queue.  
2. **SNS + Twilio**: A separate Lambda pulls from SQS, formats the SMS via Twilio’s API, and writes status to DynamoDB. SNS fan‑out allows future extensions (email, push).  
3. **Retry & Dead‑Letter Queue**: Automatic 5‑minute backoff with exponential decay; DLQ stores failures for manual triage.  
4. **Observability**: CloudWatch metrics (`sms_sent`, `sms_failed`) trigger alarms; X-Ray traces API → Lambda → SQS → Twilio latency.

*Result*: Delivery success rose from 70 % to 99.8 %, while operational cost dropped 35 % (eliminating the on‑prem server). We processed 1M+ messages in a single day with <50 ms average latency.  

**Bar‑raiser notes**:  
- Demonstrated *ownership* by redefining the end‑to‑end flow and automating retries.  
- Showed *dive deep* via metrics, cost breakdown, and failure handling.  
- Quantified impact (99.8 % success, 35 % cost savings).  
- Learned from failure: the previous monolith had hidden bottlenecks; breaking it into serverless components revealed latency hotspots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
