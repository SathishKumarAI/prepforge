---
qid: vq_e1d4035439__star__local
question: What is the architecture in terms of a hard disk, extents and pages?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 363
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:13-05:00'
sources: []
---

**Situation**  
At my previous employer we had a legacy data warehouse that was hitting performance bottlenecks during nightly ETL runs. The database files were growing beyond 500 GB on a single 4‑TB HDD, and query latency spiked because the storage layer wasn’t optimized for our workload.

**Task**  
I was tasked with redesigning the physical layout of the tables to reduce I/O contention and improve read/write throughput without migrating to SSDs. The goal was to cut nightly load time by at least 30 % while keeping cost on the current hardware.

**Action**  
I mapped out a new storage strategy that leveraged the database’s extent‑based allocation: each table was partitioned into logical extents of 1 MB, and within those extents I organized data into 4 KB pages. By aligning page boundaries with disk block size (sectors of 512 B) and grouping related columns into the same extent, we minimized random seeks. I also enabled compression on low‑cardinality dimensions and set up a manual defragmentation routine that reorganized extents during off‑peak hours. Finally, I wrote a custom script to monitor extent fragmentation and trigger reallocation when thresholds were exceeded.

**Result**  
After implementation, nightly load time dropped from 2 h 15 min to 1 h 30 min—a 35 % improvement. Query latency on the most heavily used fact table fell by 22 %. I learned that thoughtful physical design—extents, pages, and alignment with disk geometry—can yield significant gains even before investing in new hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
