---
qid: ing_eac277f9bf__star__local
question: 'Explain: Idempotency Keys — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 337
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:41-05:00'
sources: []
---

**Situation:**  
While leading a production recommender‑system team, we launched an API that accepted user feedback to fine‑tune our model nightly. After the rollout, a buggy network glitch caused duplicate POSTs of the same feedback, and the training job would ingest the same data twice, skewing the loss curve and inflating metrics by ~12 %.

**Task:**  
Implement a robust mechanism so that repeated requests with identical payloads wouldn’t alter the model state—essentially guaranteeing idempotency for the training pipeline while keeping latency low.

**Action:**  
I introduced an **idempotency key** header generated client‑side from a hash of user ID, timestamp, and feedback content. On the server, each incoming request was routed through a Redis cache that stored the key with a 24‑hour TTL. Before queuing a training job, we checked Redis; if the key existed, we returned the cached success response instead of re‑queuing. The key also triggered an atomic flag in our message broker (Kafka) to prevent duplicate messages. We added logging and metrics to track hit rates—achieving >99.5 % idempotent handling with <2 ms extra latency.

**Result:**  
Duplicate feedback ingestion dropped from 12 % to near zero, stabilizing loss curves and improving recommendation accuracy by 3 %. I learned that a simple cache‑based key strategy can elegantly solve idempotency in ML pipelines while preserving system throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
