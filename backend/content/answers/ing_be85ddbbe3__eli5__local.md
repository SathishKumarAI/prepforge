---
qid: ing_be85ddbbe3__eli5__local
question: 'Explain: Storage (Per Day) — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 229
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:13-05:00'
sources: []
---

Think of WhatsApp as a giant **digital diary** that every user writes in each day.  
Each message, photo or video is like a page in that diary. The “storage per day” tells us how many pages the diary will hold on average before it needs more space.

Imagine you have a notebook with 1000 pages (a fixed storage size). If an average user writes 10 messages a day and each message takes up half a page, the diary fills in about 20 days. That’s why designers calculate **average daily usage**:  
- Count how many items a typical user sends per day.  
- Estimate how much space each item uses (bytes).  
- Multiply to get total bytes per day.

This figure guides decisions on how big the server’s storage pool should be, whether to use compression or cloud tiers, and when to purge old data. It’s just a practical way of saying “how many pages will our diary grow by each day?”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
