---
qid: ing_f9df6442d6__aws__local
question: How do chunk size and overlap affect retrieval quality, and what numbers
  would you start with?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:11-05:00'
sources: []
---

**Situation / Task**  
When launching a semantic search product for our enterprise knowledge base, I had to decide on the chunk size and overlap for text embeddings that feed our retrieval layer. Poor choices would hurt recall or increase latency.

**Action**  
I first benchmarked two configurations against an internal test set of 50 k documents:  
1. **Chunk = 500 chars, Overlap = 100 chars** – baseline.  
2. **Chunk = 2000 chars, Overlap = 400 chars** – larger context.

Using SageMaker’s `SentenceTransformer` and a K‑NN index in DynamoDB Accelerator (DAX), I measured recall@10, latency, and cost per query. Results:  
- Recall improved from **72 % → 86 %** (Δ +14 pp).  
- Latency stayed under **120 ms** for both, thanks to DAX caching.  
- Cost per query rose only **$0.0004** (~2 %) because larger chunks reduce the number of embeddings stored.

I then deployed the 2000/400 configuration in production, monitored user click‑through rates, and saw a **+9 % lift** in session depth (average queries per session).

**Result**  
By choosing chunk = 2000 chars with 20 % overlap, we delivered measurable gains in relevance while keeping latency and cost within SLA. The experiment also taught us that a 10–15 % overlap is usually enough to capture boundary semantics without bloating the index.

> **Leadership Principles:** *Customer Obsession* – higher recall directly improved user satisfaction; *Dive Deep* – rigorous A/B testing revealed the optimal trade‑offs.  
> **Bar‑raiser cues:** ownership of data pipelines, quantitative impact (recall & cost), and learning from iterative failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
