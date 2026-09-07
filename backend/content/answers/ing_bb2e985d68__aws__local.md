---
qid: ing_bb2e985d68__aws__local
question: 'Explain: Return the Right Status Code — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 424
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:48-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built a webhook service for an e‑commerce marketplace. The goal was to deliver reliable, idempotent event notifications to partner APIs while keeping latency < 200 ms and cost < $0.02 per call.

**Action – Design & Implementation**  
1. **Stateless API Gateway + Lambda** – Exposed `/webhook` endpoint (AWS API Gateway).  
2. **Event Queue (SQS FIFO)** – Each POST pushed a message with `event_id`.  
3. **Processing Lambda** – Consumed the queue, fetched payload from DynamoDB, and attempted to POST to partner URL.  
4. **Status Code Logic**  
   * 200‑299 → success; record in DynamoDB (`status=SUCCESS`).  
   * 429 / 5xx → retry with exponential back‑off (max 3 attempts).  
   * Other 4xx → mark `FAILURE` and stop retries.  
5. **Idempotency** – `event_id` as primary key prevented duplicate sends; Lambda checked status before re‑sending.  
6. **Observability** – CloudWatch metrics (`Webhook.SuccessRate`, `RetryCount`) fed into a Grafana dashboard.

**Result**  
- 99.8 % success rate across 10M events/month.  
- Latency < 180 ms average; peak 260 ms under load.  
- Cost: $18/month vs. projected $35 with a monolithic solution.  
- Reduced partner SLA violations by 40 %.

**Reflection (Bar‑raiser notes)**  
*Ownership*: I owned the end‑to‑end flow, from design to monitoring.  
*Dive Deep*: I dissected failure patterns via CloudWatch logs and adjusted retry logic.  
*Quantified Impact*: Delivered measurable uptime and cost savings.  
*Learning*: Initial over‑retrying caused unnecessary traffic; pivoted to smarter back‑off once metrics surfaced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
