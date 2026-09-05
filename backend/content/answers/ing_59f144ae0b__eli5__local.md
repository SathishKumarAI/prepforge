---
qid: ing_59f144ae0b__eli5__local
question: 'Explain: Consistency Across Nodes — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 222
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:58:58-05:00'
sources: []
---

**What’s a cache in a distributed system?**  
Think of a library that has many copies of the same book on different shelves (the “nodes”). When you want to read it, you could always go to the original shelf, but that would be slow if everyone is trying at once. Instead, you keep a small, quick‑to‑grab copy right next to your desk—this is the *cache*.  

When someone updates the book on the main shelf, all nearby copies must know about it so they don’t serve outdated pages; that’s *consistency across nodes*. The system watches for changes and either refreshes or invalidates each cache copy. If a user asks for the book again, the nearest copy answers instantly, saving time while still staying in sync with the original.  

So, caching is like having handy copies of data close to you, but the system must keep all those copies up‑to‑date so everyone sees the same story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
