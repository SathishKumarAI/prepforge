---
qid: vq_5822e7248c__eli5__local
question: How can I prevent tablespace fragmentation?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 214
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:12:11-05:00'
sources: []
---

Think of a tablespace as a big bookshelf that stores many books (data blocks).  
When you delete or move books, the gaps left behind are like “holes” in the shelf—this is fragmentation.  

**Prevent it with two simple habits:**

1. **Reserve extra room first** – when you create the bookshelf, give it more space than you think you’ll need. That way new books can slide into empty spots without squeezing them together later.

2. **Keep a tidy inventory** – periodically run a “clean‑up” job that compacts the shelf: it pulls all the books forward, closes the gaps, and writes the new order back to disk.  
   This is called *reorganizing* or *shrink* in many database systems.

If you do both—start with enough space and tidy up regularly—you’ll keep the tablespace neat and avoid slow‑down caused by scattered fragments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
