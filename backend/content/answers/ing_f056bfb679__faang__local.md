---
qid: ing_f056bfb679__faang__local
question: 'Explain: Strong Consistency — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 659
total_tokens: 902
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:58:09-05:00'
sources: []
---

**Strong Consistency – a quick refresher**

| Aspect | Strong Consistency (SC) | Eventual Consistency (EC) |
|--------|-------------------------|---------------------------|
| **Guarantee** | Every read sees the most recent write that has been acknowledged. | Reads may see stale data; all replicas converge eventually, but not immediately. |
| **Latency** | Higher – must wait for a quorum of replicas to acknowledge before serving. | Lower – writes can be served locally and propagate asynchronously. |
| **Use‑case** | Financial transactions, inventory control where correctness > latency. | Social feeds, caching layers where freshness is less critical. |

---

### 1️⃣ Clarify  
The interviewer asks: *“Explain Strong Consistency and contrast it with Eventual Consistency.”*  
Assumptions to confirm: (a) we’re discussing distributed key‑value stores; (b) the audience knows CAP theorem basics.

### 2️⃣ Approach  
I’ll first define each consistency model, then compare their guarantees, trade‑offs, and typical use cases. I’ll finish with a quick note on how they map onto CAP.

### 3️⃣ Depth  

- **Strong Consistency**: A read after a write is guaranteed to return the value written (or an error). Achieved by synchronizing all replicas before acknowledging success—often via *two‑phase commit* or *Paxos/Raft consensus*.  
  - *Complexity*: O(log N) for Raft log replication; latency ≈ round‑trip time to majority.  
  - *Pros*: Correctness, no split‑brain anomalies.  
  - *Cons*: Slower, higher write cost, more failure points.

- **Eventual Consistency**: Writes are accepted locally and propagated asynchronously. A read may return a stale value until all replicas converge. Guarantees that if no new updates occur, all nodes will eventually agree.  
  - *Complexity*: O(1) per write; background anti‑entropy processes (e.g., Merkle trees).  
  - *Pros*: Low latency, high availability.  
  - *Cons*: Requires conflict resolution logic, can expose users to stale data.

### 4️⃣ Edge Cases  

- **Network partitions**: SC forces a node to block until majority reachable; EC continues serving with potential inconsistencies.  
- **Write hotspots**: SC’s quorum writes become bottlenecks; EC scales better but may need compensating transactions.  
- **Strong vs. Linearizability**: Strong consistency often implies linearizable operations, which is stricter than sequential consistency.

### 5️⃣ Optimize & Communicate  

To improve the answer in an interview:
1. Use a concrete example (e.g., bank account balance) to illustrate SC vs. EC.  
2. Highlight CAP: SC = CA + P, EC = AP + P.  
3. Summarize trade‑offs in a bullet list for quick recall.

**Bottom line**: Strong consistency guarantees correctness at the cost of latency and availability during partitions; eventual consistency trades immediate correctness for higher throughput and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
