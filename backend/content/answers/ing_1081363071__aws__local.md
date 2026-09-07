---
qid: ing_1081363071__aws__local
question: 'Explain: 👍 Advantages of Indexes — Database-Internals/DataStructures/Index.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 425
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:37-05:00'
sources: []
---

**Situation / Task**  
I was tasked with cutting query latency for our recommendation engine from ~2 s to under 200 ms while keeping the write‑throughput of a 5 TB catalog stable.

**Action (Technical)**  
1. **Requirement analysis:** Queries were heavy on *product_id* and *category*, but no index existed on these columns, causing full table scans on every request.  
2. **Design & AWS services:** I introduced composite B‑Tree indexes (`product_id, category`) in Amazon Aurora MySQL and a read‑replica pool behind an Application Load Balancer for horizontal scaling.  
3. **Scalability/Availability:** The replica group auto‑scales based on CPU (≥80 %) using Aurora’s serverless feature; failover is 30 s with minimal data loss due to the 5‑second replication lag.  
4. **Cost trade‑offs:** Index storage added ~15 % overhead, but read traffic grew by 3×; cost savings from reduced query time and fewer instance hours outweighed the index cost.

**Result (Data)**  
- Query latency dropped from 2.1 s to **210 ms** (90 % reduction).  
- Read throughput increased from 4k rps to 12k rps without impacting writes.  
- Cost per query decreased by ~$0.0005, translating to $1.8M annual savings at our traffic volume.

**Reflection (Leadership)**  
*Ownership*: I took full responsibility for the performance hit and owned the end‑to‑end solution.  
*Dive Deep*: By profiling execution plans and iteratively tuning index cardinality, I uncovered hidden bottlenecks.  
*Learned*: The first attempt used a single column index; it under‑performed because of high selectivity—learning that composite indexes are often more effective for multi‑field predicates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
