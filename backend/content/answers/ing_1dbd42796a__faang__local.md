---
qid: ing_1dbd42796a__faang__local
question: 'Explain: Bonus: Compactifying sparse files using blockdiff'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:54:21-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how a *block‑diff* algorithm can compactify sparse files (files with large runs of zero bytes). I’ll assume the file is stored as a contiguous byte stream on disk and that we want to reduce its size without losing data, preserving read/write semantics.  

**Approach**  
1. Divide the file into fixed‑size blocks (e.g., 4 KB).  
2. For each block, check if it’s all zeros; if so, replace it with a special “empty” marker and record its original offset/length.  
3. For non‑zero blocks, store them unchanged.  
4. Reconstruct the file by reading markers and inserting zero blocks on demand.  

**Depth**  
- *Detection*: Compute a hash or simply scan for any non‑zero byte; O(block size).  
- *Storage*: Keep an index (offset → block size) in memory or a small header; this adds negligible overhead.  
- *Reconstruction*: When reading, if the marker is encountered, write zeros of the stored length to the output buffer.  
- *Complexity*: Time O(n) for a single pass; space O(k) where k = number of non‑zero blocks (usually far less than n).  

**Edge Cases**  
- Files whose size isn’t a multiple of block size: pad the last block and treat it normally.  
- Files with interleaved zero/non‑zero bytes within a block: they’re stored fully, so compression doesn’t help but correctness is preserved.  
- Very small files (< block size): algorithm degenerates to no compression.  

**Optimize & Communicate**  
To improve compression further, replace the simple “all‑zeros” test with run‑length encoding inside blocks or use a dictionary of common patterns. For large sparse datasets, compress the index itself (e.g., using delta encoding). In an interview, I’d highlight that this block‑diff approach gives linear time, minimal memory, and deterministic reconstruction—exactly what production systems like HDFS or SSD wear‑levelers require.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
