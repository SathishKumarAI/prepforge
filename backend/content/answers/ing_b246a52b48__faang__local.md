---
qid: ing_b246a52b48__faang__local
question: 'Explain: Durability and Replay — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 392
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:15-05:00'
sources: []
---

**Durability & Replay in a Pub/Sub system**

| Step | What to say |
|------|-------------|
| **Clarify** | “We need an event‑driven pipeline that guarantees every published message survives failures and can be re‑processed on demand.”  Ask: *What latency, throughput, retention, and fault‑tolerance levels are required?* |
| **Approach** | 1. Persist messages in a distributed log (Kafka/RocketMQ). 2. Replicate the log across N nodes with quorum writes for durability. 3. Use offset checkpoints per consumer group to enable replay. 4. Provide a REST/GRPC API to fetch by offset or timestamp. |
| **Depth** | • **Durability** – each write is replicated (e.g., 3‑node ISR). A crash of one broker still keeps the log. <br>• **Replay** – consumers store committed offsets; replay is just re‑reading from an earlier offset. <br>• Complexity: *O(1)* append, *O(log N)* read for random offset. |
| **Edge Cases** | • Broker failure during replication → use leader election. <br>• Log compaction vs. retention – choose based on policy. <br>• Back‑pressure when consumers lag behind. |
| **Optimize & Communicate** | • Compress segments to save disk, enable log‑segment expiry for cost control. <br>• Explain trade‑off: higher replication factor → better durability but increased latency and storage. Conclude with a diagram of broker cluster + consumer group offsets. |

*This structured answer showcases problem framing, architectural design, technical depth, edge‑case handling, and communication—key signals for FAANG interviewers.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
