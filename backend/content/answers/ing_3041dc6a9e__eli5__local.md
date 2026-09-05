---
qid: ing_3041dc6a9e__eli5__local
question: 'Explain: 5.1 Handling Failures and Retries — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 243
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:52:14-05:00'
sources: []
---

Imagine a post‑office that sends postcards to customers.  
Each postcard is a “notification.” If the mailman drops it into the wrong mailbox, the customer never sees it. To avoid this, the office uses a **retry system**: after sending a postcard, it waits for an acknowledgment (the customer’s reply or a return receipt).  

If no acknowledgment arrives within a short window, the office assumes failure and resends the postcard—this is the first retry. If that still fails, it escalates: maybe it tries a different delivery route or switches to email. After a set number of attempts (say three), it gives up and logs the issue for human review.  

In a notification service, “failure” means the message didn’t reach its destination; “retry” is re‑sending after a delay. The system keeps track of each attempt, backs off gradually (longer waits between retries), and finally escalates to alerting or storing the failure for later analysis. This ensures messages are delivered reliably without flooding the network with endless attempts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
