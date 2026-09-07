---
qid: ing_7e8a2ddfbd__faang__local
question: 'Explain: Contact Us — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 442
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:39:26-05:00'
sources: []
---

**Clarify**  
You’re asking about two common throughput metrics in distributed systems: **TPS (Transactions Per Second)** and **QPS (Queries Per Second)**. I’ll assume “transaction” means a complete business‑level operation (e.g., an order placement) that may involve multiple queries, while “query” is a single read/write request to the database or service layer.

**Approach**  
1. Define each metric in plain terms.  
2. Explain how they’re measured and used.  
3. Highlight why the distinction matters for capacity planning and SLAs.

**Depth**  
- **TPS** counts *business‑level operations* that finish successfully (including retries). It reflects end‑to‑end user experience. A single TPS may involve several QPS internally.  
- **QPS** counts individual database or API calls, regardless of whether they belong to a larger transaction. It’s useful for low‑level performance tuning and understanding load on specific components.  
- *Calculation*: `TPS = #completed transactions / time`; `QPS = #requests sent / time`.  
- In practice, QPS often far exceeds TPS because one transaction may trigger dozens of queries (joins, cache lookups, etc.).  

**Edge Cases**  
- Asynchronous pipelines: a “transaction” might be acknowledged immediately but still spawn background jobs; TPS will count it once while QPS keeps increasing.  
- Batch operations: a single request that processes 100 items can inflate QPS without affecting TPS proportionally.  
- Failures: retry logic can skew both metrics; we must decide whether to count retried attempts as separate queries or not.

**Optimize & Communicate**  
When presenting capacity plans, use **TPS** for user‑facing SLAs and **QPS** for infrastructure scaling (CPU, I/O). Clarify the mapping ratio in your architecture docs so stakeholders understand why a 1 k TPS load may require provisioning for 10–20 k QPS. This dual‑metric view ensures both business goals and technical limits are aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
