---
qid: ing_216d80ae52__star__local
question: 'Explain: The Offline Message Flow — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 401
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:26-05:00'
sources: []
---

**Situation**  
In my last role I was part of the backend team that revamped the messaging stack for a chat app with over 120 M daily active users. The existing “offline message” mechanism was a single queue per user, causing delays and data loss when servers crashed.

**Task**  
I needed to design a fault‑tolerant offline message flow that guarantees at‑least‑once delivery, preserves order, and scales horizontally while keeping latency under 200 ms for online users.

**Action**  
1. I introduced a partitioned Kafka topic per user segment, using the user ID as key so all messages stay ordered.  
2. For persistence I wrapped each record in an immutable Protobuf envelope with a monotonically increasing sequence number and a checksum.  
3. On receipt of a message from an offline client, the gateway writes to Kafka; downstream microservice “Message‑Store” consumes, validates checksums, and appends to a per‑user Redis stream (for quick replay).  
4. When a device reconnects, it pulls the next sequence number via a lightweight REST endpoint that queries Redis for the last acknowledged ID, then streams any missing records from Kafka using consumer offsets.  
5. I added a retry scheduler that re‑publishes orphaned messages every 15 min and a dead‑letter queue for malformed payloads.

**Result**  
After deployment, offline delivery latency dropped to <150 ms on average; message loss fell below 0.01%. The system handled a 3× traffic surge during peak hours without downtime, and the new flow reduced support tickets about “messages not arriving” by 80 %. I learned that combining Kafka’s durability with Redis’s fast reads gives a balanced offline messaging pipeline for high‑scale chat services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
