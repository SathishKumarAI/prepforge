---
qid: ing_5f4dec1220__faang__local
question: 'Explain: Common Mistakes — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 589
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:51-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *common mistakes* when applying **ACID transactions** in the design of a machine‑learning (ML) system—e.g., training pipelines or inference services that rely on transactional guarantees.

Assumptions:  
- The system stores large tensors or feature tables in a distributed store.  
- Operations include data ingestion, preprocessing, model checkpointing, and serving predictions.  
- “ACID” is interpreted as **Atomicity, Consistency, Isolation, Durability**.

---

**Approach**  
1. Identify where each ACID property is *over‑used* or *misapplied*.  
2. Map those mistakes to concrete ML workloads (e.g., checkpointing vs. inference).  
3. Suggest corrective patterns and trade‑offs.

---

**Depth**  

| Mistake | Why it hurts in ML | Remedy |
|---------|--------------------|--------|
| **Atomicity on entire training job** | Treating the whole epoch as a single transaction forces all weight updates to commit together, leading to *deadlocks* and *unnecessary rollback*. | Use fine‑grained atomic ops (e.g., per‑parameter lock or optimistic concurrency). |
| **Strict consistency for read‑heavy inference** | Enforcing linearizability on every prediction stalls throughput; most models tolerate eventual consistency. | Adopt *read‑your‑own‑writes* only where needed, otherwise allow stale reads with a small staleness window (e.g., 100 ms). |
| **Isolation at the level of feature tables** | Serializing all feature updates serially serializes pipeline stages, killing parallelism. | Use snapshot isolation or versioned tables; let independent pipelines read from the same snapshot. |
| **Durability on volatile GPU memory** | Persisting every intermediate tensor to disk is I/O‑bound and unnecessary for in‑memory training. | Flush only checkpoints and final model weights; keep intermediate tensors in fast storage (NVMe, HBM). |

---

**Edge Cases**  
- *Model rollback*: If a transaction fails mid‑epoch, ensure partial updates are idempotent.  
- *Cold start inference*: Stale cache may return wrong predictions; guard with version tags.  
- *Checkpoint corruption*: Verify integrity before restoring.

---

**Optimize & Communicate**  
Explain that the goal is **performance + correctness**, not “full ACID” everywhere. Show a trade‑off chart: tighter guarantees → higher latency, lower throughput. Conclude by recommending a *policy framework* (e.g., “ACID per pipeline stage”) and an observability layer to detect violations in production. This demonstrates structured reasoning, depth of knowledge, and clear communication—key for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
