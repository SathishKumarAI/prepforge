---
qid: ing_0ee389cbc6__star__local
question: How do SSDs work? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:16-05:00'
sources: []
---

**Situation:**  
During a migration project at my previous company we were moving our entire data center from legacy spinning disks to a new storage architecture. The performance reports showed that the database query latency had spiked by 30% after the upgrade, even though we expected lower latency with SSDs.

**Task:**  
I was tasked with diagnosing why the SSDs weren’t delivering the expected speed and explaining how they actually work so the team could optimize our configuration.

**Action:**  
First I reviewed the SSD specifications: flash memory chips, NAND type (SLC vs. MLC), controller firmware, and TRIM support. I explained that an SSD stores data in cells on NAND flash; unlike HDDs, there’s no moving head, so read/write latency is dominated by the controller’s ability to fetch pages from multiple blocks simultaneously. I then ran a benchmark with `fio` using sequential and random workloads, noticing that our write amplification was high because we were writing small 4 KB blobs without proper wear‑leveling. I reconfigured the OS to enable TRIM and adjusted the block size to 128 KB for writes, which reduced write amplification from 3.5× to 1.2×. Finally, I updated the firmware to a version that introduced an improved garbage‑collection algorithm.

**Result:**  
After these changes, query latency dropped by 45%, matching the expected performance of SSDs in our workload. I also documented the whole process so future migrations could skip similar pitfalls. This taught me that understanding both hardware fundamentals and software tuning is key to realizing SSD benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
