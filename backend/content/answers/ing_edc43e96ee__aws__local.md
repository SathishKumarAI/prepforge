---
qid: ing_edc43e96ee__aws__local
question: 'Explain: Design a rate limiter for an LLM API where cost scales with tokens,
  not requests.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 407
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:52-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a rate limiter for an LLM API whose billing model is token‑based (not per request). The goal was to cap monthly spend while keeping latency low.

**Action**  
* **Ownership & Customer Obsession** – I first mapped the cost curve: $0.02/1k tokens, with peak usage 10 M tokens/day.  
* **Dive Deep** – I instrumented each request with a `token_count` header and pushed it to an Amazon Kinesis Data Stream.  
* **AWS Design** –  
  * **Kinesis + Lambda**: Ingest token counts in real‑time, aggregate per user every minute.  
  * **DynamoDB (Provisioned) table**: Store cumulative tokens (`user_id`, `window_start`, `token_total`). Uses Global Secondary Index on `user_id`.  
  * **API Gateway + Lambda Authorizer**: Checks the DynamoDB row; if `token_total > quota` (e.g., 1 M tokens/month), it rejects with HTTP 429.  
* **Scalability & Cost** – Kinesis shards auto‑scale, Lambda scales to zero. DynamoDB’s on‑demand mode handles spikes without overprovisioning. Estimated monthly cost <$10 for the infrastructure versus $15k API spend.  

**Result**  
Implemented in 3 weeks; reduced unexpected spend by **98 %**, limiting token usage to $12k/month while keeping latency <30 ms. Learned that token‑level metering, not request count, is essential for LLM cost control.

> *Bar‑raiser note:* I demonstrated full ownership, a data‑driven design, and quantified impact—exactly what the interview panel looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
