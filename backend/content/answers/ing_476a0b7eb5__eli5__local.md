---
qid: ing_476a0b7eb5__eli5__local
question: What is hybrid search, and why does pure vector search fail on some queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 213
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:23-05:00'
sources: []
---

Think of a library where every book is tagged with two kinds of labels: **keywords** (like “history” or “Python”) and a **fingerprint** that captures its overall feel (the way the text reads, the topics it touches).  
Pure vector search looks only at fingerprints. It’s great when you want to find books that *feel* similar—say, all mystery novels—but if you ask for “a book about the French Revolution written by a woman in 1800,” the fingerprint alone may miss it because those details are buried in the text.  

Hybrid search mixes the two: it first uses fingerprints to narrow down a set of potentially relevant books, then checks the keyword tags (or even the exact words) to filter out the ones that truly match your query. This combo catches both “similarity” and “specificity,” avoiding the blind spots of vector‑only searches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
