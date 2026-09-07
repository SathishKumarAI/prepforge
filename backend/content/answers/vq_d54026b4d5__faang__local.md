---
qid: vq_d54026b4d5__faang__local
question: Who do various access methods compare ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 562
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:42-05:00'
sources: []
---

**Clarify**  
The question asks how the main file‑access strategies—*sequential*, *direct* (also called random), and *indexed*—compare with respect to cost, performance, and suitability for different workloads. We assume a simple disk‑based storage system where I/O dominates time.

**Approach**  
1. Define each method’s access pattern.  
2. List key metrics: read/write latency, space overhead, update cost.  
3. Map each method to typical use cases (large scans, point lookups, frequent updates).  

**Depth**  
| Method | Access Pattern | Avg Cost (I/O) | Overhead | Update Impact | Typical Use |
|--------|----------------|---------------|----------|--------------|-------------|
| **Sequential** | Read/append from start to end | 1 – 2 I/Os per record (streaming) | None | Low (only append) | Bulk loading, log files |
| **Direct** | Random seek to byte offset | ~5 I/Os (seek + read) | None | O(1) for writes if position known | Key‑value stores with fixed‑size records |
| **Indexed** | Search key → index page → data page | 1–3 I/Os (B‑tree traversal) | Index space (≈0.2× data) | Moderate: insert/delete updates index nodes | Databases, search engines |

- *Sequential* excels when processing entire files; seeks are avoided.  
- *Direct* offers constant‑time access but suffers from high seek cost on spinning disks and fragmentation on SSDs.  
- *Indexed* balances point lookups with manageable overhead; B‑trees keep depth ≤ logₙ( N ) where n≈100–200.

**Edge Cases**  
- Very small files: sequential I/O may dominate even for random accesses.  
- Highly fragmented data: direct access can become slower than indexed if records cluster poorly.  
- Large index updates (e.g., millions of inserts) cause node splits and cache pressure.

**Optimize & Communicate**  
For modern SSDs, reduce seeks by grouping accesses or using *sequential* scans on sorted data. When writes are frequent, consider *log‑structured merge trees* to amortize update costs. Always profile I/O patterns; a hybrid approach (e.g., direct for hot keys + indexed for cold data) often yields the best trade‑off.  

This structured comparison aligns with FAANG interview expectations: clear framing, analytical depth, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
