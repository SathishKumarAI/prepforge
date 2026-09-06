---
qid: vq_a27d5a80d6__faang__local
question: WHAT ARE SOME DOWNSIDES OF USING INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:04-05:00'
sources: []
---

**Clarify**  
> *Question:* “What are some downsides of using indexes?”  
Assumptions: We’re talking about relational DBs (e.g., MySQL/PostgreSQL), not in‑memory structures; the context is trade‑offs between read speed and write overhead.

---

### Approach
1. List primary disadvantages.  
2. For each, explain *why* it matters in a production setting.  
3. Briefly note mitigations or when the trade‑off might be acceptable.

---

### Depth

| Downside | Why It Matters | Typical Impact |
|----------|----------------|---------------|
| **Extra write overhead** | Each INSERT/UPDATE/DELETE must modify all relevant indexes, increasing I/O and CPU cycles. | Write latency ↑; bulk loads become slower. |
| **Storage cost** | Indexes consume disk space (often 20‑50 % of data size). | Higher storage bills, larger backups. |
| **Cache pollution** | Large or many indexes can evict hot table rows from buffer cache. | Query performance degrades for non‑indexed columns. |
| **Maintenance burden** | Index fragmentation requires periodic rebuild/reorg; monitoring needed to decide when. | Operational overhead, downtime risk. |
| **Complex query planning** | Multiple indexes may lead the optimizer to choose suboptimal plans or misestimate cardinality. | Slower queries despite having indexes. |
| **Increased schema rigidity** | Adding/removing indexes often requires schema changes that lock tables. | Reduced agility for evolving workloads. |

---

### Edge Cases
- **Write‑heavy OLTP**: Indexes can become a bottleneck; consider covering or partial indexes.  
- **Very small tables**: The overhead may outweigh any read benefit.  
- **Read‑only analytics**: Index maintenance cost is irrelevant, but storage and cache concerns remain.

---

### Optimize & Communicate
*Mitigations:* Use *partial*, *covering*, or *columnar* indexes; tune `autovacuum`; monitor index size vs. query hit ratio.  
When discussing with stakeholders, frame the trade‑off: “Adding an index cuts SELECT latency by X% but increases INSERT latency by Y%, and doubles our storage footprint.” This keeps the conversation data‑driven and aligned with business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
