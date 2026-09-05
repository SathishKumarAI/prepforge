---
qid: ing_d2b7ec1477__eli5__local
question: 'Explain: Summary — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 261
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:03-05:00'
sources: []
---

**Webhooks are like a smart doorbell that only rings when you need it**

Imagine your house has a special doorbell (the webhook). Instead of constantly listening to every visitor (polling), the doorbell waits quietly. When someone actually arrives at the front gate, the doorbell automatically rings and sends a quick note to your phone saying “Visitor here!” You can then decide what to do—open the door, call security, or ask for an ID.

In system design, a webhook works the same way: one service (the sender) watches for a particular event (e.g., a new machine‑learning model is trained). When that event happens, it immediately “rings” by sending a single HTTP request to another service’s URL. The receiving service can then react right away—store results, trigger an alert, or start a downstream job—without the receiver having to keep checking (“polling”) for updates.

**Key terms**

- **Webhook:** A user‑defined callback that sends data automatically when a specific event occurs.
- **Polling:** Continuously asking a server if new data is available; less efficient than webhooks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
