---
qid: ing_006ca7b30b__faang__local
question: 'Explain: 2.2 Availability — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 615
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:25-05:00'
sources: []
---

**Clarify**  
*Problem:* Explain how the CAP theorem relates to availability in distributed ML systems (e.g., model serving clusters).  
*Assumptions to confirm:* We’re dealing with a replicated model store, network partitions are possible, and we need to balance correctness, latency, and fault‑tolerance.

---

**Approach**  
1. Define CAP terms: Consistency, Availability, Partition tolerance.  
2. Map each to ML serving concerns (e.g., inference accuracy vs. response time).  
3. Illustrate the trade‑off triangle and why we must choose two over the third.  
4. Show concrete design patterns that prioritize availability while still handling partitions.

---

**Depth**  

| Property | What it means for ML serving | Typical choice in practice |
|----------|------------------------------|---------------------------|
| **Consistency** | All replicas return identical model weights and inference results. | Often relaxed (eventual consistency) to avoid stalling predictions. |
| **Availability** | Every request is answered (or timed‑out) within SLA, even if some replicas are down. | Preferred for low‑latency inference; system can serve stale models temporarily. |
| **Partition Tolerance** | System continues operating despite network splits. | Mandatory in distributed clouds; we accept partitions and choose how to handle them. |

*Design pattern:*  
- **Primary–Replica with write‑ahead log:** All updates go to the primary, replicated asynchronously. During a partition, replicas serve cached models (availability) while the primary queues writes.  
- **Read‑heavy “read‑through cache”:** If a replica is unreachable, fallback to another node or a local disk copy; this keeps availability high at the cost of potential staleness.

*Complexity:*  
- Write latency: \(O(1)\) for primary, \(O(n)\) for synchronous replication.  
- Read latency: \(O(1)\) if replica reachable; otherwise fallback adds negligible overhead.

---

**Edge Cases**  

1. **Frequent partitions:** Availability degrades to stale reads → need versioning or conflict‑resolution.  
2. **Model drift during unavailability:** Stale models may produce wrong predictions → schedule background re‑training.  
3. **Simultaneous node failures:** Might drop availability if not enough replicas; design for at least 3 nodes.

---

**Optimize & Communicate**  

- *Improvement:* Use quorum reads/writes to balance consistency and latency dynamically.  
- *Narration:* “In our serving layer, we treat partition tolerance as a non‑negotiable baseline, then choose availability over strict consistency because user experience hinges on low inference latency. We accept eventual model staleness but mitigate it with background syncs.”  

This structured explanation demonstrates problem‑solving clarity, depth in trade‑offs, and communication skills valued by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
