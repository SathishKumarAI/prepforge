---
qid: ing_f163411e8c__aws__local
question: 'Explain: First-class developer experience — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 610
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:03-05:00'
sources: []
---

**Situation (S)**  
While building a SaaS platform for real‑time customer engagement, I noticed developers struggled to re‑send transactional emails after failures—often resorting to manual scripts that introduced bugs and delayed support response.

**Task (T)**  
Design an API‑first “Resend Email” service that gives developers a single call, guarantees at‑least‑once delivery, and scales with our user base of 200k daily active users.

**Action (A)**  
1. **Architecture** –  
   * **API Gateway + Lambda**: REST endpoint `POST /emails/{id}/resend`.  
   * **DynamoDB** (partition key = email‑ID) stores status, last‑sent timestamp, and retry counter.  
   * **Amazon SQS FIFO** queues resend requests to preserve order and dedupe.  
   * **Lambda consumer** pulls from SQS, calls **SES** for delivery, updates DynamoDB, and emits CloudWatch metrics.

2. **Scalability & Availability** –  
   * Serverless components auto‑scale; no cold starts in the critical path (API → Lambda).  
   * SQS FIFO ensures 1‑to‑1 mapping even under burst traffic (up to 10k requests/second).  
   * DynamoDB with on‑demand capacity guarantees <5 ms latency for status reads.

3. **Cost & Trade‑offs** –  
   * Pay only for Lambda invocations and SQS messages (~$0.20/million ops).  
   * Accept a 1% eventual consistency window in exchange for cost savings; mitigated by idempotent retry logic.

4. **Metrics (R)** –  
   * Reduced manual resend errors from 12 % to <2 %.  
   * Response time dropped 4× (avg 30 ms vs 120 ms).  
   * Developer satisfaction score rose 15 pts on quarterly survey.

**Result (R)**  
The service became the “one‑stop shop” for developers, cutting support tickets by 30 % and freeing up engineering bandwidth for new features.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering a seamless dev experience directly improves our end‑user product quality.  
- **Ownership & Dive Deep** – I owned the end‑to‑end flow, dug into AWS best practices, and iterated on real metrics.

> **Bar‑raiser cues:** clear ownership narrative, data‑driven impact, deep dive into trade‑offs, and evidence of learning from early failures (e.g., handling SES throttling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
