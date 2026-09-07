---
qid: ing_bb31091e42__faang__local
question: 'Explain: Core APIs — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 522
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:07-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to design the *core APIs* that power WhatsApp’s messaging layer—sending, receiving, storing and retrieving messages in a massively‑scalable, low‑latency system. Confirm assumptions:  
- Message size < 1 MB, user base ≈ 3 B.  
- End‑to‑end encryption is handled at the client; server only stores ciphertext.  
- Availability ≥ 99.9 % and ≤ 100 ms latency for “send” calls.

**Approach**  
1. **API surface** – `SendMessage(userId, payload)`, `GetHistory(userId, sinceTs)`, `MarkRead(userId, msgIds)`.  
2. **Storage tiering** – hot tier (in‑memory + SSD) for recent 7 days, cold tier (object store) for older data.  
3. **Message routing** – partition by user hash → shard. Use a publish/subscribe bus (Kafka) to push to client devices.  
4. **Reliability** – idempotent `SendMessage` via request‑id; store metadata in a distributed KV store (Cassandra).  
5. **Scalability** – horizontal scaling of API nodes, sharding, and eventual consistency for read history.

**Depth**  
- **Complexity:** O(1) write to hot tier; read is O(log N) for history due to range queries on time‑indexed column family.  
- **Trade‑offs:** Strong consistency would hurt latency; we opt for *read‑your‑writes* per user with a small quorum.  
- **Security:** All APIs require OAuth2 token, TLS, and per‑message MAC verification.

**Edge Cases**  
- Duplicate `SendMessage` (network retry).  
- Device churn (offline users).  
- Message deletion/forwarding across shards.  
- Shard failure – use replication factor = 3 in Cassandra.

**Optimize & Communicate**  
Suggest adding a *read‑ahead cache* per user for the most recent 1 k messages, reducing hot tier load. Explain that this improves throughput by ~30 % at the cost of stale reads < 5 s. Conclude with how you’d monitor latency/throughput and gradually roll out changes via blue‑green deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
