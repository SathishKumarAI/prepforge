---
qid: ing_83a8fd9bfd__eli5__local
question: Define SLOs for a customer support agent. Every span returns 200 and latency
  is fine. What do you actually alert on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 237
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:32-05:00'
sources: []
---

Imagine a pizza‑delivery service that promises customers their order will arrive within **30 minutes** (that’s the Service Level Objective, or *SLO*). If every delivery shows “delivered” on the tracking app and the time stamp is fine, you still need to watch two things:

1. **Failure rate** – the percentage of orders that are lost, late, or marked wrong. Even if most deliveries look perfect, a small spike in failures can break trust.
2. **Customer‑perceived delay** – how long people actually wait after ordering before they feel “satisfied.” A tiny lag in the tracking update (say 5 seconds) might not be noticeable by the system but could annoy users.

So, even with clean “200” responses and low latency, alert on *high failure rates* or *increasing customer‑reported delays*. These are the real signals that your support team is meeting—or missing—the promised service level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
