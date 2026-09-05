---
qid: ing_40028c181a__star__local
question: 'Explain: When the message is sent — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 401
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:17-05:00'
sources: []
---

**Situation** – In my last role I was part of a product team tasked with building an end‑to‑end messaging layer that could support 50 M concurrent users and deliver sub‑200 ms latency for each message, similar to WhatsApp’s throughput.

**Task** – My goal was to design the “send” flow: from user input on the client, through backend services, to persistence and delivery acknowledgment, while ensuring reliability, scalability, and minimal cost.

**Action** – I started by defining a micro‑service architecture with a lightweight Go HTTP gateway that validated requests and pushed them into a Kafka topic (partitioned by chat ID). A “Message Processor” service consumed the stream, performed encryption/decryption with libsodium, wrote to a Cassandra cluster (schema: user_id, conversation_id, message_hash), and updated an in‑memory Redis cache for read receipts. For push notifications I used Firebase Cloud Messaging with exponential backoff retries. I introduced a rate‑limiter per user to prevent abuse and added a “dead‑letter” queue for failed messages. Metrics were exposed via Prometheus; we set SLAs: 99.9 % of messages delivered within 150 ms, 95 % of ACKs in <100 ms.

**Result** – After load testing with 200 k concurrent users, the system met all latency targets and sustained 30 M messages per day with an average cost of $0.02/message. I learned that decoupling via Kafka gave us elasticity, while Cassandra’s wide‑row design kept write throughput high without compromising read performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
