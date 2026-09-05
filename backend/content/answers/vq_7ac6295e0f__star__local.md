---
qid: vq_7ac6295e0f__star__local
question: How many blocks forms extents, extent form segments?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 447
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:02-05:00'
sources: []
---

**Situation** – In my last role I was asked to redesign the storage layout for an OLTP system that had grown from 30 GB to over 120 GB of transaction data in Oracle 19c. The DBA team needed a clear calculation of how many database blocks would form each extent and how many extents would fit into a segment before we could set appropriate auto‑extend parameters.

**Task** – My job was to compute the exact block count per extent for our tablespace (block size = 8 KB, default extent size = 1 MB) and then determine how many such extents would occupy one segment given the segment’s default size of 64 MB. I also had to explain the trade‑offs between using uniform versus variable extents.

**Action** – I first divided the extent size by block size: 1 MB ÷ 8 KB = **128 blocks per extent**. Then I calculated segments: 64 MB ÷ 1 MB = **64 extents per segment**, which translates to 64 × 128 = **8192 blocks per segment**. I documented these figures in a spreadsheet, ran a quick test by creating a dummy table with `MAXEXTENTS=10` and verified the output via `DBA_TABLESPACES` and `V$DATAFILE`. I also compared this against variable extents, noting that while variable extents reduce fragmentation for large tables, they add overhead to metadata.

**Result** – The new calculations allowed us to set auto‑extend values that kept free space below 5 % without hitting the segment limit. We reduced the number of datafile growth events by **30 %**, cut storage costs by roughly $2K per year, and gained a deeper understanding of how block, extent, and segment sizing interact in Oracle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
