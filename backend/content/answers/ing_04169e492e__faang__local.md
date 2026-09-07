---
qid: ing_04169e492e__faang__local
question: 'Explain: Go beyond editing — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 459
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:51-05:00'
sources: []
---

**Clarify**  
You want a system that lets developers **edit** an email and then **re‑send** it automatically—think of a “draft‑and‑resend” feature in an email client or a marketing tool. Assume we have a persistent email model, an API for sending, and a UI where the user can modify subject/body/recipients.

**Approach**  
1. Store each email as an immutable record with a *status* (`DRAFT`, `SENT`).  
2. When editing, clone the original record (keeping its ID) → new draft.  
3. On “Resend”, call the send‑service with the latest draft’s payload.  
4. Update status to `SENT` and keep a history of all attempts for audit.

**Depth**  
*Data model*:  
```sql
CREATE TABLE emails (
  id UUID PRIMARY KEY,
  subject TEXT,
  body TEXT,
  recipients JSONB,
  status VARCHAR CHECK (status IN ('DRAFT','SENT')),
  parent_id UUID REFERENCES emails(id),
  created_at TIMESTAMP DEFAULT now()
);
```
*API*: `POST /emails/{id}/resend` → triggers send.  
Send service queues the job; if it fails, we retry with exponential back‑off and log each attempt.

Complexity: O(1) for DB writes per resend; queue processing is O(number_of_recipients). Trade‑offs include eventual consistency vs real‑time status updates.

**Edge Cases**  
- Recipient list changes → ensure no duplicates.  
- Large attachments → stream to S3 first.  
- Concurrency: two resends in parallel—use optimistic locking on `status`.  
- Privacy: preserve original timestamps for compliance.

**Optimize & Communicate**  
Add a *resend counter* and lock the email after 5 failed attempts to prevent abuse. Expose an audit log endpoint so developers can see each resend history. In interviews, I’d highlight that this pattern keeps data immutable, simplifies rollback, and scales via async queues—exactly what FAANG teams value for reliability and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
