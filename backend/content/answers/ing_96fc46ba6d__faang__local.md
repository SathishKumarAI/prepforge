---
qid: ing_96fc46ba6d__faang__local
question: 'Explain: Integrate — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 429
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:36:23-05:00'
sources: []
---

**Clarify**  
You want a feature that lets developers “resend” an email—typically a notification or verification mail—from your system. Key assumptions:  
* The original email content is stored or can be regenerated.  
* Resends are rate‑limited to avoid abuse.  
* Users must be identified securely (e.g., via token).  

**Approach**  
1. **Persist the payload** – store subject, body, recipients, and metadata in a write‑once table.  
2. **Create a “resend” API** that accepts an email ID, validates permissions, and enforces throttle limits.  
3. **Trigger a background worker** (e.g., AWS SQS + Lambda) to send the stored payload via your SMTP/SES service.  

**Depth**  
*Schema*: `emails(id PK, subject, body, recipients JSON, sent_at, resend_count INT DEFAULT 0)`  
*API*: `POST /emails/{id}/resend` → auth → check `sent_at` and `resend_count < MAX`. Increment counter, enqueue job.  
*Worker*: pulls from SQS, calls SES with the stored body; on success update `sent_at`; on failure retry with exponential backoff.  

**Edge Cases**  
* Recipient list changes after first send – we use the stored snapshot.  
* Resend limit reached – return 429.  
* Corrupt payload – log and fail gracefully.  

**Optimize & Communicate**  
- Use idempotent queuing to avoid duplicate sends.  
- Cache recent emails in Redis for quick lookup if needed.  
- Expose metrics (resend rate, failures) to Prometheus.  
Explain trade‑offs: persisting full body increases storage but guarantees exact resend; regenerating on the fly saves space but risks content drift. This structured plan shows clear problem framing, a pragmatic solution path, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
