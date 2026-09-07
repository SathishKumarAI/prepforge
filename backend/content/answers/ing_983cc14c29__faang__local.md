---
qid: ing_983cc14c29__faang__local
question: 'Explain: Vertical Scaling — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 655
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:45-05:00'
sources: []
---

**Clarify**  
We’re asked how to *vertically* scale a database—i.e., upgrade the single server that hosts it (CPU, RAM, SSD, network). I’ll assume we have an OLTP or analytics workload on a relational store and that horizontal sharding isn’t viable yet. Key assumptions: 1) The DB can tolerate downtime for re‑provisioning; 2) Vendor support for the underlying OS/DB is available; 3) We’re constrained by cost vs performance trade‑offs.

**Approach**  
I’ll list seven concrete strategies, each with its own trigger and impact. For every strategy I’ll note: when to apply it, expected latency/memory gains, and a short “gotcha” checklist.

**Depth**  

| # | Strategy | When to use | Expected Benefit | Caveats |
|---|----------|-------------|------------------|---------|
|1| **CPU‑core bump** | CPU bound queries, high parallelism | 2–4× throughput | Licenses may scale linearly; cache misses can offset gains. |
|2| **RAM increase** | Slow caching of hot tables or large joins | Faster query plans, less disk I/O | Memory‑intensive workloads hit OS swap if overcommitted. |
|3| **NVMe SSD upgrade** | High read/write latency, heavy logging | 10–20× IOPS, sub‑ms seek | Ensure controller bandwidth; firmware updates may be needed. |
|4| **NUMA‑aware configuration** | >64 cores, memory spread across sockets | Reduced cross‑socket traffic | Requires tuning `numactl` or DB NUMA settings. |
|5| **In‑memory tables / caching layer** | Frequent OLAP scans | Near‑instant reads | Consistency overhead; must handle failover. |
|6| **Connection pool & query optimizer tweaks** | Suboptimal plan costs | 20–30% faster queries | Needs DBA expertise to avoid runaway CPU usage. |
|7| **Upgrade OS/DB version** | Legacy bugs or missing features | Performance, security, new indexing | Requires regression testing; upgrade windows matter. |

**Edge Cases**  
- Over‑provisioning may lead to diminishing returns once other layers (network, storage) become bottlenecks.  
- Some DBs lock the entire instance during a memory bump—plan for maintenance windows.  
- Vendor‑specific features (e.g., Oracle’s Automatic Memory Management) can mask underlying resource limits.

**Optimize & Communicate**  
Prioritize based on profiling data: start with CPU and RAM, then move to storage if IOPS still lag. Document each change in a “scale‑log” so that rollback is trivial. When presenting to stakeholders, frame the plan as *incremental, measurable, risk‑aware*, highlighting ROI via performance metrics (latency reduction, QPS increase). This structured narrative satisfies FAANG interviewers’ focus on clear problem framing, thoughtful solution design, and rigorous execution detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
