---
qid: ing_cb85df09ea__faang__local
question: 'Explain: Indexes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 480
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:32:26-05:00'
sources: []
---

**Clarify**  
You’re asking about *indexes*—data structures that speed up query or access time, typically in databases but also in machine‑learning pipelines (e.g., feature lookup tables). Key assumptions:  
- The data is large and frequently queried.  
- We need sub‑linear retrieval compared to a full scan.

**Approach**  
1. Define what an index does (maps keys → row positions).  
2. List common types (B‑trees, hash, bitmap, inverted).  
3. Explain trade‑offs: read vs write overhead, storage size, and suitability for different query patterns.

**Depth**  
- **B‑Tree Indexes** – balanced tree; O(log n) search; keeps data sorted → range queries efficient.  
- **Hash Indexes** – O(1) expected lookup for equality predicates; poor for ranges.  
- **Bitmap Indexes** – compact for low cardinality columns; great for multi‑column joins.  
- **Inverted Indexes** – map terms to documents; essential in NLP and ML feature extraction.

Complexity: B‑Tree search O(log n), insert/delete O(log n). Hash lookups average O(1) but can degrade to O(n) on collision spikes. Bitmap compression reduces storage but may increase CPU cost during updates.

**Edge Cases**  
- Highly dynamic tables → hash indexes suffer due to rehashing.  
- Extremely high‑cardinality columns → bitmap becomes huge.  
- Distributed systems → sharding of indexes can cause cross‑node lookups; use locality or replicated indexes.

**Optimize & Communicate**  
- Use composite indexes when queries filter on multiple columns.  
- Keep hot columns in memory (in‑memory databases) to reduce disk I/O.  
- Periodically rebuild fragmented B‑Trees to maintain performance.  

When explaining, start with a real‑world analogy (“think of an index like a phone book”), then drill into the math and trade‑offs, concluding with actionable recommendations tailored to the system’s workload. This demonstrates structured thinking, depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
