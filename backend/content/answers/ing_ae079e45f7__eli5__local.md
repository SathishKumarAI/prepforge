---
qid: ing_ae079e45f7__eli5__local
question: 'Explain: Choose TCP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 221
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:19-05:00'
sources: []
---

Imagine you’re sending a package through a courier service.  
**TCP (Transmission Control Protocol)** is like a signed‑for delivery that keeps a log of every step: the courier confirms each handoff, checks that nothing was lost or out of order, and will retry if any piece goes missing. It’s perfect when the package must arrive intact—think online banking, file downloads, or any system where data loss would break things.

**UDP (User Datagram Protocol)** is like a simple drop‑off: you hand the parcel to a driver who just drops it off at your door and leaves. There’s no confirmation that it reached you, no ordering guarantees, and no retries. It works well for live video, gaming, or DNS queries where speed matters more than perfect accuracy; a few dropped packets are tolerable.

So, choose **TCP** when reliability, order, and integrity matter most. Choose **UDP** when you need low latency and can afford occasional data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
