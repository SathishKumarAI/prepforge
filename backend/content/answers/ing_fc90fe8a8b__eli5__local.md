---
qid: ing_fc90fe8a8b__eli5__local
question: 'Explain: Daily Storage Calculation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 253
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:14:46-05:00'
sources: []
---

**Daily Storage Calculation – Imagine a photo‑album factory**

Think of each Instagram user as a “photo‑album” that receives pictures (posts) every day.  
To know how much space the whole factory needs each day, you ask:

1. **How many albums are active?** (total users who upload at least one picture).  
2. **On average, how many pictures does an album get per day?** (average posts/day).  
3. **What is the size of a single picture on average?** (average bytes per image).

Multiply those three numbers:  

```
Daily storage ≈ active users × average daily posts × average image size
```

If you also store thumbnails, captions and comments, add their sizes too.

*Unavoidable terms defined*:  
- **Active user** – a person who has posted at least once.  
- **Average** – the sum of all values divided by how many values there are.  

This simple “recipe” gives you an estimate that scales with growth: more users or bigger pictures mean more storage tomorrow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
