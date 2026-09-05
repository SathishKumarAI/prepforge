---
qid: ing_dde2438e97__eli5__local
question: 'Explain: TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 219
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:54-05:00'
sources: []
---

Imagine you’re sending a long, important letter across town.  
**TCP (Transmission Control Protocol)** is like mailing the letter through a trusted courier service: it keeps track of each page, confirms every one arrives, and if a page gets lost it’s resent until the whole story is complete. That guarantees delivery and order, but takes extra time and paperwork.

**UDP (User Datagram Protocol)** is like tossing a postcard in the mailbox. The postcard just drops in; you don’t get confirmation, and if the mail carrier misses it, you’re out of luck. It’s fast and lightweight because there’s no back‑and‑forth handshaking.

In system design, choose **TCP** when data must arrive intact—think file transfers or web pages. Use **UDP** when speed matters more than perfection—like live video, online gaming, or IoT sensors sending periodic readings. The trade‑off is the same: reliability versus latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
