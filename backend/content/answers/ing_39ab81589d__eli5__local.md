---
qid: ing_39ab81589d__eli5__local
question: 'Explain: NFR — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 287
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:42-05:00'
sources: []
---

**NFR – “YouTube‑streaming HLD” (High‑Level Design)**  

Think of a movie theater that wants to show films online.  
The *high‑level design* is the blueprint: it shows where the screen, speakers and seats go, how people will enter, and how the lights will be switched on. It does **not** give every tiny detail (like the exact wiring length), but it tells everyone “this is the big picture of how we’ll build the system.”

In machine‑learning terms, an NFR (Non‑Functional Requirement) for a YouTube‑streaming service says what *quality* the system must have—fast start‑up, low buffering, secure data, or smooth playback on many devices. The HLD then maps that requirement to big parts: content delivery network, caching layer, load balancer, and user interface.

So, the NFR tells us **what** we need (e.g., “streaming must start in 2 seconds”), while the HLD shows the **big blocks** that will make it happen. It’s like a theater map telling you how to get from the lobby to the screen—no seat‑by‑seat details, but enough to see the whole flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
