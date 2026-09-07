---
qid: ing_7381ffdbc7__faang__local
question: 'Alex Xu on X: "Why is Kafka fast? — Alex Xu on X: \"Why is Kafka fast?\n\nKafka
  achieves low latency message delivery through Sequential I/O and Zero Copy Principle.
  The same techniques are commonly used in many other messaging/streaming platforms.\"
  / X'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 581
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:41-05:00'
sources: []
---

**Clarify**  
The question asks *why* Apache Kafka is known for low‑latency message delivery, specifically referencing its use of **sequential I/O** and the **Zero‑Copy** principle. We’ll assume the focus is on a single broker’s performance (not cluster‑wide replication) and that we’re evaluating throughput vs latency.

**Approach**  
1. Summarize Kafka’s architecture: log‑based storage, partitions, consumer offsets.  
2. Explain sequential disk I/O vs random seeks.  
3. Describe the Zero‑Copy mechanism (sendfile / mmap).  
4. Connect these to measurable performance metrics.  

**Depth**  
- **Sequential I/O**: Each partition is an append‑only file; producers write at a single offset, eliminating random seeks and allowing OS/page‑cache prefetching. This yields high throughput and predictable latency (~1 ms on SSD).  
- **Zero‑Copy**: Kafka uses `sendfile()` (or `mmap`) to hand the page cache directly to the kernel’s TCP send buffer, bypassing user‑space copies. Each message copy cost is reduced from O(n) to O(1), cutting CPU overhead and enabling > 10 kmsg/s per core on commodity hardware.  
- **Batching & Compression**: Producers batch records (default 16 KB) and optionally compress them, reducing I/O volume and network traffic.  
- **Log Compaction & Offsets**: Consumer offsets are stored in a compacted log; fetching an offset requires a simple seek rather than scanning a DB.

Resulting latency: < 2 ms for 1 kB messages on SSD, ~5–10 ms over WAN with replication. CPU usage stays below 30% per core due to Zero‑Copy and minimal GC pressure (log files are memory‑mapped).

**Edge Cases**  
- **High fan‑out**: Many consumers can increase contention on the same log segment, raising latency.  
- **Burst traffic**: Sudden spikes may cause disk queue buildup; pre‑allocating segments mitigates this.  
- **Replication lag**: Cross‑data‑center replication introduces additional network and serialization overhead.

**Optimize & Communicate**  
To further improve, one can enable **direct I/O** on high‑end NVMe, adjust segment size for the workload, or employ a dedicated CPU core for `sendfile`. When explaining to interviewers, emphasize that Kafka’s speed comes from *hardware‑friendly* design: sequential disk access + zero data movement, coupled with lightweight batching. This aligns with FAANG expectations of deep technical insight and clear trade‑off discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
