---
qid: ing_215ab2b1dc__eli5__local
question: AWS re:Invent 2021 - Which NoSQL database is right for you?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 249
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:29:32-05:00'
sources: []
---

Imagine you’re building a library that can grow, change, and be searched from anywhere.  
**Amazon DynamoDB** is the *high‑speed shelf*—everything sits in one place, scales instantly, and gives you lightning‑fast reads or writes if your data fits a single “row” (a key‑value pair).  
**Amazon DocumentDB** is like a *modern bookcase* that stores whole books (JSON documents) as single items; it’s great when each item contains nested information and you need to run complex queries inside the document, but it still uses a key for fast access.  
**Amazon Neptune** is the *network of interconnected shelves*—ideal when your data is all about relationships (friends, connections, paths).  

Pick DynamoDB if you want raw speed and simple keys; pick DocumentDB if you need rich, nested documents with flexible queries; pick Neptune when the pattern of links between items matters most. Each fits a different “library” style, so choose the one that matches how your data is organized and what you’ll query most often.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
