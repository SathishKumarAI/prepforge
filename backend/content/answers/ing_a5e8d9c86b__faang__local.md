---
qid: ing_a5e8d9c86b__faang__local
question: 'Explain: Leveled Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 495
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:37-05:00'
sources: []
---

**Leveled Compaction in SSTables (ScyllaDB)**  
*Meta‑style FAANG interview answer – 180 words*

---

### **Clarify**
You’re asking about how ScyllaDB organizes on‑disk SSTables using *leveled compaction*.  
- Does the system use *level‑0* vs. *level‑i* partitions?  
- Are we only interested in read amplification, or also write throughput and disk usage?  

### **Approach**
1. **Explain levels** – each level has a target size (e.g., 10 GB).  
2. **Write path** – data lands in *L0*, then merges into higher levels when thresholds are hit.  
3. **Compaction logic** – merge‑sort overlapping SSTables, drop tombstones, and compress.  

### **Depth**
- **Read amplification**: bounded to ~logₙ(totalSize/levelSize) reads because only one SSTable per level is examined.  
- **Write amplification**: initial writes hit L0 once; subsequent merges touch each level once → ≈ O(log N).  
- **Space utilization**: levels are strictly non‑overlapping in key space, so no duplicate data beyond the merge window.  
- **Implementation**: Scylla’s `CompactionController` schedules background tasks per node, using a priority queue to avoid I/O contention.

### **Edge Cases**
- *Hot partitions*: can cause repeated L0 merges → use *hot‑partition compaction* or size‑tiered fallback.  
- *Cluster churn*: node failures trigger rebuilds; leveled compaction ensures consistent key ranges across replicas.  

### **Optimize & Communicate**
- *Tuning*: expose `level_size_multiplier` and `max_sstable_size` to adapt to workload (write‑heavy vs read‑heavy).  
- *Monitoring*: expose metrics (`sstable_count_level_{i}`, `compaction_bytes_per_sec`) for proactive scaling.  

In sum, leveled compaction keeps SSTables organized in size‑bounded, non‑overlapping levels, yielding predictable O(log N) reads/writes and efficient space usage—critical for high‑throughput, low‑latency workloads typical at FAANG scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
