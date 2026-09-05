---
qid: ing_2a6da04f64__eli5__local
question: 'Explain: Retry capabilities — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 231
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:42:43-05:00'
sources: []
---

Imagine you’re sending a series of postcards across the country, but some post offices can lose them in transit.  
**Saga** is like a “step‑by‑step” plan: you write one postcard, wait for confirmation that it reached the next office, then send the next. If a postcard gets lost, you can retry only that step without starting over.  

**CDC (Change Data Capture)** watches the mailboxes for new postcards and copies any changes to a **Transactional Inbox/Outbox**—a safety net that keeps a record of what was sent or received in one atomic transaction.  
If sending fails, the inbox still has the postcard; you can resend it later. If receiving fails, the outbox still shows it wasn’t delivered, so the system knows to retry.  

Together, they give your “mail system” (your software) a reliable way to keep moving even when hiccups happen—just like a resilient postal service that never loses track of a letter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
