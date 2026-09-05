---
qid: ing_cca0aa8509__eli5__local
question: 'Explain: Choosing Between TCP, UDP, and QUIC — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 250
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:59:19-05:00'
sources: []
---

Think of sending a package across town.  
**TCP** is the classic post‑office delivery: it keeps track of every parcel, asks for receipts, and will resend anything that gets lost or arrives out of order. It’s reliable but can be slow because of all the back‑and‑forward “thank‑you” messages.  

**UDP** is like dropping a note in a mailbox without any guarantee it reaches its destination. There are no receipts or re‑tries, so it’s fast and simple, but you might not know if the note got through. It’s great for things that can tolerate occasional loss—like live video streams where a few dropped frames aren’t noticeable.

**QUIC** is a hybrid courier that runs on UDP but adds its own quick handshake and built‑in error checking. It keeps the speed of UDP while giving you most of TCP’s reliability, plus extra tricks to avoid delays when switching networks (think mobile data turning off and on).

So pick **TCP** when every byte matters, **UDP** when speed beats completeness, and **QUIC** when you want the best of both worlds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
