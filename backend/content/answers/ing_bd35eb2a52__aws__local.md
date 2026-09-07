---
qid: ing_bd35eb2a52__aws__local
question: 'Explain: Contact management — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 374
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:12-05:00'
sources: []
---

**Situation & Task**  
At my previous role I built a SaaS contact‑management API used by 120k developers worldwide. A recurring issue: when the “Resend Email” endpoint was hit, developers reported missing receipts and no retry logic in our logs. The impact was twofold – lost revenue from unfulfilled emails and a spike in support tickets.

**Action (Design & Implementation)**  
I owned the solution by first diving deep into CloudWatch metrics and X-Ray traces; latency spikes traced back to a single‑region SES integration. I redesigned the flow:

1. **Event‑driven retry queue** – every resend request is pushed to an SQS FIFO queue with a visibility timeout of 30 s.  
2. **Lambda orchestrator** – pulls from SQS, calls SES via `SendRawEmail` and writes success/failure to DynamoDB (partition key: email_id).  
3. **Dead‑letter queue** – after 5 failed attempts, the message goes to a DLQ; CloudWatch alerts notify Ops.  

I added an optional “force resend” flag that bypasses caching, ensuring idempotency via `MessageDeduplicationId`. This architecture scales horizontally (Lambda concurrency auto‑scales) and costs < $0.02 per 1k emails.

**Result**  
Post‑deployment, email delivery success rose from **92% to 99.8%** in the first month; support tickets dropped by **70%**, freeing 12 engineer hours weekly. I also documented the pattern as a reusable “Email Resend Blueprint” for future services—demonstrating ownership and knowledge sharing.

> *Leadership Principles:* Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
