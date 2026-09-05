---
qid: ing_02cc9b2641__eli5__local
question: 'Q: Why is the "Extraction" phase the bottleneck for GraphRAG?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 226
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:39:26-05:00'
sources: []
---

**Why does the “Extraction” step slow down GraphRAG?**

Think of GraphRAG like a library that first reads every book (the data) and then builds a map showing how all the topics connect. The *extraction* phase is the part where it actually scans each page to pull out useful facts—names, dates, quotes, etc. It’s the bottleneck because:

1. **Every word matters** – The system must look at every token in every document, not just a few key phrases.  
2. **Heavy computation** – Each token is fed through a large language model that assigns it meaning and decides if it belongs on the map.  
3. **Large volume** – Real‑world datasets can be millions of tokens long; scanning them all takes time.

So, like a librarian who has to read every page before she can draw connections, GraphRAG’s extraction step is the slowest part because it must thoroughly process all text before the graph can be built.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
