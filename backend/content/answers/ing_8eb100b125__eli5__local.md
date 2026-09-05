---
qid: ing_8eb100b125__eli5__local
question: What Is a Webhook? — Webhooks | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 226
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:01-05:00'
sources: []
---

Imagine you’re watching a live sports game on TV, but instead of waiting for the broadcast to tell you every score change, you have a special alert system that sends you a text message as soon as a goal is scored. That’s essentially what a **webhook** does in software.

A webhook is a way for one computer program (the “sender”) to give another program (the “receiver”) an instant notification when something happens—like a new comment on a blog, a file upload, or a payment being processed. The sender sets up a URL that the receiver owns; whenever the event occurs, the sender sends a small data packet (“payload”) directly to that URL via HTTP. The receiver then reacts right away—perhaps updating a database or triggering a machine‑learning model.

Think of it as a “push” service: instead of the receiver constantly checking (polling) for updates, the webhook pushes the update to them instantly, saving time and resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
