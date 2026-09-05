---
qid: vq_cc9eea5f9e__eli5__local
question: What is Fragmentation .?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 204
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:20-05:00'
sources: []
---

**Fragmentation (in databases)**  
Think of a library where books are stored on shelves. If the shelves were perfectly organized, every book would be right next to its neighbor. In real life, however, books get moved around: some are taken out for repair, others returned in different spots, and new titles are added. Over time, the shelf becomes *fragmented*—the books that belong together are scattered, with gaps between them.

In a database, fragmentation happens when data rows (or pages) are written, updated, or deleted in ways that leave empty spaces or spread related records across many physical locations on disk. The engine then has to jump around more to read a single record, slowing queries and wasting storage space. Regular “defragmentation” (reorganizing the data) is like rearranging the shelves so books are back together, improving speed and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
