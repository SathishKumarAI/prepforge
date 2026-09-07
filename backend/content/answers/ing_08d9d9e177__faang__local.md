---
qid: ing_08d9d9e177__faang__local
question: 'Explain: Durability on a stateless platform is hard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 485
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:05:04-05:00'
sources: []
---

**Durability on a stateless platform is hard**

---

### **1️⃣ Clarify**
*Problem:*  
We want to guarantee that data written by one request survives until it can be read later, even though the underlying compute nodes are stateless (they may be restarted or replaced at any time).  
*Assumptions to confirm:*  
- Requests arrive on a distributed set of containers/VMs.  
- Each node has no local persistent storage.  
- Network latency and failure probabilities exist.

### **2️⃣ Approach**
1. **Externalize state** → use a dedicated durable store (S3, DynamoDB, CloudSQL).  
2. **Idempotent writes** → generate unique IDs or use version vectors so retries don’t corrupt data.  
3. **Write‑ahead logging** → log intent to a write‑through cache before persisting.  
4. **Quorum / consistency checks** → read‑your‑writes guarantees via replicas.

### **3️⃣ Depth**
- *Durable store:* Write‑once, append‑only logs or ACID tables provide persistence beyond node lifetime.  
- *Idempotency key:* Each write includes a client‑generated UUID; the service ignores duplicates on retry.  
- *Quorum reads/writes:* For 3 replicas, require ≥2 successes to consider an operation durable (CAP trade‑off: favor consistency).  
- *Complexity:* Write latency O(log N) for distributed logs; read latency similar but can be cached.

### **4️⃣ Edge Cases**
- Network partitions → fallback to “best effort” mode or reject writes.  
- Node crash during write → transaction aborts, retry logic kicks in.  
- Clock skew → use monotonic counters instead of timestamps for ordering.

### **5️⃣ Optimize & Communicate**
- **Batching** reduces overhead (e.g., bulk S3 uploads).  
- **Compression** saves bandwidth on log replication.  
- **Explain trade‑offs:** “We chose quorum consistency to guarantee durability, accepting higher latency.”  

By externalizing state and enforcing idempotency + quorum, we turn a stateless compute layer into a durable system—exactly what FAANG platforms do for high‑availability services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
