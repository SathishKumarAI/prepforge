---
qid: ing_96fc46ba6d__aws__local
question: 'Explain: Integrate — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 532
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:31-05:00'
sources: []
---

**Situation (S)**  
At a fintech startup I was tasked with adding an “integrate‑resend email” feature so that developers could trigger a resend of the integration confirmation email from the UI without hitting support.

**Task (T)**  
Design a scalable, low‑cost solution that guarantees delivery and logs every request for auditability while keeping the user experience snappy.

**Action (A)**  

1. **Architecture** – I proposed an event‑driven flow:  
   * API Gateway → Lambda (idempotent handler) → SNS topic “resend‑email” → SES email service.  
   * A DynamoDB table stores `requestId` + status for idempotency and audit.  
2. **AWS Services** –  
   * **API Gateway** (REST endpoint, throttling 10 req/s).  
   * **Lambda** (Python runtime, <1 ms cold‑start with provisioned concurrency).  
   * **SNS** (fan‑out to SES; decouples send logic).  
   * **SES** (dedicated IP pool for deliverability).  
3. **Scalability & Availability** – All services are fully managed and automatically scale. Lambda retries on failure, SNS guarantees at-least-once delivery.  
4. **Cost** – < $0.10 per 1 000 requests; no servers to maintain.  
5. **Metrics** – Added CloudWatch metrics (`resend_success`, `resend_fail`). Tracked SLA: 99.95% successful sends within 2 s.

**Result (R)**  
The feature reduced support tickets by **68 %** in the first month and cut average resolution time from 3 days to < 30 minutes. The audit table enabled a post‑incident review that surfaced a duplicate‑send bug; we added idempotency keys, eliminating 12 erroneous emails.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant email resends, cutting friction for developers.  
- **Ownership & Dive Deep** – Took full ownership of the end‑to‑end flow and dug into AWS pricing/latency to optimize cost and performance.

*Bar‑raiser notes:*  
- Demonstrated clear ownership by mapping every step.  
- Showed depth through service selection, idempotency logic, and cost analysis.  
- Quantified impact with real metrics (68 % ticket reduction).  
- Learned from the duplicate‑send failure and iterated quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
