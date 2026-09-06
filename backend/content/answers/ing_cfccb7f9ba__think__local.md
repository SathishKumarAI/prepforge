---
qid: ing_cfccb7f9ba__think__local
question: 'Explain: Evaluation Criteria — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 421
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:41:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify *what* “evaluation criteria” means in this context (performance, usability, cost, etc.).  
- Assume a typical use‑case: a production system that needs to store, retrieve, and query high‑dimensional vectors for semantic search or similarity tasks.

**2️⃣ Adopt a structured evaluation framework**  
- Break the criteria into four buckets: **Functionality**, **Scalability**, **Performance**, and **Operational aspects**.  
- Within each bucket list concrete metrics (e.g., recall@k, latency, shard count, cost per GB).

**3️⃣ Reason step‑by‑step through each bucket**  

| Bucket | Key Questions | Typical Metrics |
|--------|---------------|----------------|
| Functionality | Does it support ANN, exact search, filtering? | ANN accuracy, filter expressiveness |
| Scalability | How does it handle growth in data size and dimensionality? | Max vectors per node, linearity of shard scaling |
| Performance | Latency & throughput under load. | Query latency (ms), QPS, CPU/GPU utilization |
| Operational | Ease of deployment, maintenance, backup, monitoring. | Ops effort hours, mean time to recovery |

**4️⃣ Avoid common traps**  
- Don’t conflate *accuracy* with *speed*: a highly accurate ANN may be slower than a faster exact search for some workloads.  
- Ignore data‑specific factors: dimensionality, sparsity, and update frequency can shift the optimal choice.  
- Assume “best” equals “most features”; sometimes a minimal feature set yields lower cost and complexity.

**5️⃣ Sanity‑check & communicate**  
- Verify that each metric directly maps to a business goal (e.g., user satisfaction ↔ recall@k).  
- Present findings in a concise table, highlighting trade‑offs, so stakeholders can see the “why” behind each recommendation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
