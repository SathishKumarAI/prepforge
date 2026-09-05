---
qid: ing_a36455a3eb__eli5__local
question: 👎 What are disadvantages of DynamoDB? — AWS-Services/1_Databases/AmazonDynamoDB/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 312
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:00-05:00'
sources: []
---

Imagine you’re buying a one‑stop grocery shop that’s open 24/7 and can handle any number of shoppers at once. That’s DynamoDB—fast, always available, and easy to scale. But like every convenience store, it has trade‑offs.

**1. Limited query flexibility:**  
You can only look up items by their “store ID” (primary key) or a secondary index you pre‑defined. If you suddenly want to find all products cheaper than $10, you’ll need to add another index first—there’s no free “search across all shelves” option.

**2. Cost surprises:**  
Because you’re billed per read/write request and data stored, heavy traffic can inflate the bill quickly, especially if your queries are inefficient (many reads that return little useful data).

**3. No joins or transactions over many tables:**  
If your data lives in several tables, DynamoDB won’t combine them for you; you must write extra code to stitch results together.

**4. Cold‑start latency:**  
When a new partition gets its first request, it can take a few milliseconds longer—fine for most apps, but noticeable if you need sub‑millisecond response every time.

In short, DynamoDB is like a fast, always‑open shop that excels at quick single‑item pickups but requires careful planning when you need more complex browsing or tight cost control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
