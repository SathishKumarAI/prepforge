---
qid: ing_160abf0302__eli5__local
question: 'Explain: A Structured Streaming job reads Kafka and writes to a Delta table.
  The cluster is killed mid-batch and restarts. Does the customer get duplicate rows?
  Explain at the level of the checkpoint and the transaction log.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 223
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:29-05:00'
sources: []
---

Think of the streaming job like a cashier who takes cash (Kafka messages) and puts it into a safe deposit box (the Delta table). Every time the cashier finishes a batch, she writes down exactly what she put in on a receipt (a checkpoint) and also stamps the deposit box with that same record (Delta’s transaction log).

If the server crashes mid‑batch, the cashier has not yet written the new receipt or stamped the box. When the system restarts it reads the last good receipt from the checkpoint. It knows which messages were already safely recorded in the deposit box and only processes the missing ones. Because both the checkpoint and the transaction log are consistent, the same message can never be written twice—there’s no duplication.

So, even if the cluster dies halfway through a batch, the customer does **not** get duplicate rows; the system uses the checkpoint to resume exactly where it left off and relies on Delta’s atomic commit logs to guarantee each row is stored only once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
