---
qid: ing_b4fb317ea6__fp__local
question: 'Explain: Alibaba Cloud Hot Products — What is TPS, what is QPS, and what
  is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 450
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:15-05:00'
sources: []
---

**TPS (Transactions Per Second)** and **QPS (Queries Per Second)** are both throughput metrics used by Alibaba Cloud’s “Hot Products” to gauge system performance, but they capture different dimensions of user interaction.

---

### Why two metrics exist  

1. **Nature of work** – A *transaction* is a unit that changes state (e.g., placing an order, updating inventory).  
2. **Read‑heavy traffic** – A *query* is read‑only; it does not alter data but still consumes resources.

Treating them together would hide the *write pressure* on the database and overstate performance if reads dominate. By separating them we can:

- **Optimize latency:** Writes often require locks or distributed consensus, so they are more expensive than reads.
- **Scale appropriately:** Different hardware (e.g., SSDs for writes, memory caches for reads) can be provisioned.

---

### Underlying principle  

Throughput is an *optimization* objective: we maximize the number of units processed per second subject to constraints like CPU, I/O, and network bandwidth. In queuing theory, a transaction’s service time is typically longer than a query’s; thus, the **service rate (µ)** for transactions < µ for queries. The system capacity \(C = \min(\mu_{trans},\mu_{query})\) depends on the bottleneck, which differs per metric.

---

### Non‑obvious insight  

A high QPS does **not** guarantee a high TPS because they often share the same underlying resources (e.g., network sockets). A system can achieve 10 000 QPS but only 500 TPS if write operations dominate I/O. Therefore, when benchmarking or auto‑scaling, you must monitor both metrics simultaneously; otherwise, scaling based solely on QPS may leave the transactional subsystem saturated.

In short: **TPS measures state‑changing workload, QPS measures read‑only load; they reflect different service times and bottlenecks, so separating them is essential for accurate performance tuning.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
