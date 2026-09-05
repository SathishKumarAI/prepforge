---
qid: ing_8329f34bf0__eli5__local
question: 'Explain: Streaming — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 255
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:45-05:00'
sources: []
---

Imagine you’re at a concert and the band sends one song after another over a radio channel. Each song starts playing as soon as it arrives, even though the whole set isn’t finished yet. That’s “streaming” in computing: data is sent bit by bit so the receiver can use it immediately.

With **HTTP/HTTPS streaming**, the web server opens a single connection and keeps it open, sending chunks of information (like music tracks) as they’re ready. The client—your browser or app—reads each chunk right away, rendering text, images, or playing audio, while the rest of the page continues to load. This saves time because you don’t have to wait for the whole file before seeing anything.

In system design, you choose streaming when you need real‑time updates (live video, chat, stock feeds). You set up a *persistent* HTTP/HTTPS connection, often using protocols like WebSockets or Server‑Sent Events, so both sides can keep sending and receiving data without repeatedly opening new connections. The result is fast, responsive interaction that feels almost instantaneous to the user.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
