---
qid: vq_201ed78038__faang__local
question: Talk about the different tombstone markers used for deletion purpose in
  Hbase?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 475
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:59-05:00'
sources: []
---

**Clarify**  
You’re asking about *tombstones* in HBase – special markers written to a region when a row or column is deleted so that compactions can eventually purge the data. I’ll assume we’re talking about **row‑level**, **column‑family**, and **cell‑level** deletions, and how they are represented internally.

**Approach**  
1. Outline each deletion type.  
2. Describe the binary marker (timestamp + value).  
3. Mention how compactions treat them.  
4. Note caveats (size, read impact).

**Depth**  
- **Row‑level delete:** HBase writes a *row marker* with an empty value and a special timestamp (`DeleteFamily` or `DeleteRow`). Internally it’s a key with the same row key, a `family:qualifier` of `__DELETE__`, and the delete timestamp. Compactions drop all cells older than this timestamp for that row.  
- **Column‑family delete:** Similar to row deletes but scoped to a family (`family:__DELETE__`). All qualifiers in that family are logically removed until compaction.  
- **Cell‑level delete (Delete, DeleteFamily):** Stores a marker with the exact column qualifier and delete timestamp; value is empty. Only cells newer than this timestamp survive.  

During major/minor compactions, HBase scans sorted keys; when it encounters a tombstone whose timestamp exceeds all remaining data for that key, it discards subsequent entries.

**Edge cases**  
- *Very large deletes* (many columns) inflate region size before compaction.  
- *Timestamp reuse*: If a delete timestamp is older than existing data, the delete is ignored.  
- *Concurrent writes*: A write with a newer timestamp bypasses the tombstone but still leaves the old cell until compaction.

**Optimize & communicate**  
Explain that using column‑family deletes can reduce metadata overhead versus many cell deletes, but may be less precise if only a subset of columns needs removal. Highlight trade‑offs: more granular deletes increase write amplification; broader deletes simplify compaction logic. Conclude by noting that proper timestamp management and periodic major compactions keep tombstone bloat under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
