---
qid: ing_febf9b8f0f__eli5__local
question: 'Explain: UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 210
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:24-05:00'
sources: []
---

Imagine you’re sending postcards to a friend.

**TCP (Transmission Control Protocol)** is like mailing those postcards with a registered‑post service. The post office keeps track of every card, confirms it was received, and if one gets lost it’s automatically resent. This guarantees that all your messages arrive in the right order, but each step takes time—like waiting for receipts.

**UDP (User Datagram Protocol)** is like tossing postcards into a mailbox without tracking them. You send them out quickly, no wait for confirmation, and they can arrive out of order or not at all. That’s fine when you need speed and can tolerate occasional missing data—think live video or gaming where a few lost packets barely matter.

In system design, choose **TCP** when reliability matters (file transfers, emails). Choose **UDP** when latency is king and some loss is acceptable (streaming, online games).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
