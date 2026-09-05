---
qid: ing_30b4235347__eli5__local
question: 'Explain: Failure modes & mitigations — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 225
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:52:58-05:00'
sources: []
---

Imagine you’re running a busy café that serves coffee (the “LLM”) to customers who order through a digital menu (the gateway). Two common problems can spoil the experience:

1. **Wrong Order Delivery** – The menu asks for “latte,” but the barista hands out an espresso. In AI, this is a *misalignment* error: the model’s answer doesn’t match what was asked.  
2. **Queue Overload** – Too many customers rush in at once and the kitchen stalls. That’s a *resource exhaustion* issue: too many requests overwhelm the server.

Mitigations are like smart café tricks:

- **Checklists (validation)** before serving to catch wrong orders.
- **Speed limits (rate‑limiting)** so the kitchen isn’t flooded.
- **Backup baristas (fallback models)** that can step in if the main machine fails.

By treating the gateway and server as a well‑run café, we keep coffee—and answers—delivered correctly and on time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
