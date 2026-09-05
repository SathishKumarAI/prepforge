---
qid: ing_1e794d9aed__star__local
question: 'Explain: Open Questions — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 426
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:35-05:00'
sources: []
---

**Situation**  
When I joined a cloud‑storage startup, the existing snapshot engine was writing full VMDK files every time we took a backup of a running VM. At peak load we generated about 2 TB per day, and our storage cost ballooned. The engineering team needed a more efficient way to capture incremental changes without bloating disk usage.

**Task**  
I was tasked with designing a lightweight snapshot format that could store only the blocks that changed between snapshots—essentially implementing a block‑level differential system—and integrate it into our existing backup pipeline so that restores stayed fast and consistent.

**Action**  
First, I mapped each VM’s virtual disk to a 4 MiB block grid and built an on‑disk index (a B+Tree) that recorded block hashes for every snapshot. When a new snapshot was taken, the engine streamed the VM’s disk through a memory‑mapped reader, calculated SHA‑256 digests per block, and compared them against the latest index. Only blocks with differing hashes were written to a new “blockdiff” file along with metadata (offset, length). I used Rust for safety, leveraging async I/O to keep CPU usage below 30 %. To support point‑in‑time restores, I implemented a merge step that lazily applied deltas into the base image on read. Finally, I added an automated test harness that verified idempotence across 10,000 random write patterns.

**Result**  
The new blockdiff format cut snapshot size by 78 % (from 2 TB to ~456 GB daily) and reduced backup time from 45 min to 12 min. Storage costs dropped by $18k/month, and restore latency stayed under 3 s for a 10 GiB VM. I learned how careful block hashing, indexing, and lazy merge strategies can dramatically improve cloud storage efficiency while keeping the codebase maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
