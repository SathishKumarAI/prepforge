---
qid: ing_bb59b1cc9c__eli5__local
question: 'Explain: Timeouts and Retries — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 295
total_tokens: 457
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:18-05:00'
sources: []
---

Imagine you’re sending a message through two different walkie‑talkies.

**TCP (the “handshake” walkie‑talkie)**  
Before any data leaves, both sides say “Hey, I’m ready.” If the reply doesn’t arrive within a set time (a *timeout*), the sender assumes the line is broken and tries again. TCP keeps track of every packet it sends; if a packet never gets an acknowledgment, it resends that exact piece. This guarantees that all data arrives in order, just like a reliable courier service.

**UDP (the “quick‑talk” walkie‑talkie)**  
With UDP there’s no handshake or acknowledgments. You shout your message and move on—no waiting for confirmation. If the receiver misses part of it, you simply send the whole thing again after some delay. Because nothing is tracked, retries are simpler but less reliable; it’s like shouting in a noisy room—you might have to repeat yourself many times.

For machine‑learning systems that need *exact* data (e.g., model weights), TCP’s timeout–retry mechanism is essential. For quick, low‑latency updates where occasional loss is acceptable (e.g., streaming sensor readings), UDP with its lighter retry logic can be preferable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
