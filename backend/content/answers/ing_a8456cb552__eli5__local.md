---
qid: ing_a8456cb552__eli5__local
question: 'Explain: Online Games — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 239
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:50-05:00'
sources: []
---

Imagine a racing game as a live concert in a crowded stadium.  
**TCP (Transmission Control Protocol)** is like a ticket‑checking guard at the entrance. Every packet of data must be verified and acknowledged before the next one goes through, so nothing gets lost or duplicated. That guarantees everyone sees exactly the same track, but it also adds delays—like waiting in line for each song to start.

**UDP (User Datagram Protocol)** is like a free‑flowing crowd chant: messages are sent straight out without checking, so they arrive quickly and in order most of the time. If a chant gets dropped or arrives late, the game just keeps moving; it doesn’t pause the whole race.

In game design you choose **UDP** for fast, real‑time updates (player positions, shots) because occasional packet loss is acceptable. For critical data—like login credentials or inventory changes—you use **TCP** to ensure perfect delivery. Balancing both lets your “concert” run smoothly: high speed with reliability where it matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
