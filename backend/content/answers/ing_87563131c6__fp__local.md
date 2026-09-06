---
qid: ing_87563131c6__fp__local
question: 'Explain: 5.5 Security — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 438
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:14-05:00'
sources: []
---

**Why a notification system is essential**

At its core, a notification service solves the *matching problem*: “Given a stream of user‑centric events and a set of user preferences, deliver the right message at the right time.”  
The solution must satisfy three constraints that arise from basic information‑theoretic limits:

| Constraint | Principle | Implication |
|------------|-----------|-------------|
| **Latency** | Shannon’s channel capacity – higher bandwidth → lower delay | Push over websockets or long polling; fall back to pull for low‑traffic users. |
| **Throughput** | Law of large numbers – variance shrinks with parallelism | Shard by user ID, use a message queue (Kafka) and micro‑service workers per shard. |
| **Reliability** | Redundancy ≈ fault tolerance (Erlang’s OTP model) | Store events in an append‑only log; replay on failure; idempotent delivery via deduplication IDs. |

**Design sketch**

1. **Event ingestion** – API gateway → Kafka topic `user_events`.  
2. **Preference engine** – For each event, a lightweight rule engine produces *notification intents* (e.g., “send email if user has opted in”).  
3. **Delivery workers** – Consume intents from a partitioned queue; each worker is stateless, pulls the target channel’s config, and calls the external provider (SMTP, APNs).  
4. **Feedback loop** – Delivery status written back to a `delivery_log` table; a monitoring service aggregates success/failure rates per channel and auto‑tunes retry policies.

**Non‑obvious insight**

Treat notifications as *probabilistic evidence* rather than mandatory messages: assign each intent a confidence score (based on user engagement history). Only push if the expected value of delivering exceeds a threshold. This converts the system from “send or miss” to an *online decision problem*, allowing dynamic throttling during traffic spikes and improving overall ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
