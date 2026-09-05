---
qid: ing_62118a1810__eli5__local
question: How do WebSockets work? — What are WebSockets and Why are they Used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 204
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:55-05:00'
sources: []
---

**What are WebSockets?**  
Think of a phone call instead of texting. With texting (the usual HTTP way), you send a message, wait for the other side to reply, then close the line. Each new message needs a new call—slow and wasteful.

A **WebSocket** is like holding that phone line open forever. Once the two computers agree to start chatting, they keep a single, steady connection alive. Either can speak at any time without re‑establishing the link.  

**Why use them?**  
Because real‑time apps (chat rooms, live dashboards, online games) need instant, two‑way updates. WebSockets let data flow instantly in both directions, saving bandwidth and reducing latency compared to repeatedly opening new HTTP connections. In short, they’re a lightweight, always‑open channel for fast, interactive communication on the web.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
