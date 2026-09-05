---
qid: ing_aa89b01eb7__eli5__local
question: 'Explain: Dead Letter Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 265
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:07-05:00'
sources: []
---

Think of a mailroom that delivers packages (your messages) from one office to another. Sometimes a package can’t be delivered—maybe the address is wrong, the box is full, or the recipient has moved. Instead of tossing it away, the mailroom places it in a special “dead‑letter” bin so you can investigate later.

In message‑queue systems, a *Dead Letter Queue (DLQ)* works exactly like that bin. When a consumer tries to process a message but keeps failing—perhaps due to bad data or an unexpected error—the system moves the message from the main queue into the DLQ instead of discarding it. This lets developers inspect why the failure happened and decide whether to fix, discard, or re‑send the message later.

Key terms:  
- **Message Queue** – a buffer that holds messages until they’re processed.  
- **Consumer** – a program that reads and handles messages.  
- **Dead Letter Queue (DLQ)** – a secondary queue for failed messages so nothing is lost and issues can be debugged.  

By keeping problematic messages separate, you avoid clogging the main flow while still learning from mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
