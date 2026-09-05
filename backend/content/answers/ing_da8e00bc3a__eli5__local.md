---
qid: ing_da8e00bc3a__eli5__local
question: 'Explain: Status and Lock Lifecycle — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 283
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:26-05:00'
sources: []
---

Think of a **machine‑learning model training job** like baking a cake that must be done only once, even if the kitchen receives many “start” orders.

*Status* is the cake’s current stage: *queued*, *baking*, *finished*, or *failed*.  
*Lock* is a kitchen reservation—once a cake is being baked, no other oven can start another bake on that same batch. The lock lives in three phases:

1. **Acquire** – when a job starts, it grabs the lock and sets status to *baking*.  
2. **Release** – when baking ends (success or error), the lock is released and status updates to *finished* or *failed*.  
3. **Retry guard** – if the kitchen crashes before releasing, the system checks the status; if it’s still *baking*, it knows another oven was already working and won’t start a duplicate bake.

*Idempotency* means that if you send the same “start” command again after a crash, the system sees the existing lock or finished status and simply acknowledges “already done,” never baking twice. This keeps training jobs safe, consistent, and waste‑free.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
