---
qid: ing_76178002a5__eli5__local
question: 'Explain: Data Blocks — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 213
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:43:37-05:00'
sources: []
---

Think of Hadoop’s HDFS like a giant library that stores books (data) on many shelves (servers).  
When you put a book into the library, it isn’t kept as one long volume; instead, the library cuts it into smaller chapters—these are **data blocks**. A block is usually 128 MB or 256 MB (you can choose the size). Each chapter is copied and stored on several different shelves so that if a shelf breaks, the book can still be read from another copy.  

The “DataNode” servers hold the physical copies of each block; the “NameNode” keeps a map saying which shelves have which chapters. When you ask for a book, the NameNode tells you where to find all its chapters and the DataNodes deliver them quickly. This chopping‑and‑replicating method lets HDFS read huge files fast, even if some servers fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
