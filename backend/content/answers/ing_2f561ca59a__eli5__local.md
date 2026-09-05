---
qid: ing_2f561ca59a__eli5__local
question: 'Explain: Common Mistakes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 267
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:50:59-05:00'
sources: []
---

Imagine you’re building a giant library that must answer questions instantly.  
**Indexing mistake:** You decide to put every book on the shelf by its first letter, but forget that many books start with “The.” Now, when someone asks for *“The Great Gatsby,”* the system can’t find it because it’s hidden under “G.” In ML terms, this is like mis‑labeling data or using the wrong feature columns—your model learns from a scrambled map and gives nonsense predictions.

**System‑design mistake:** You give each reader a tiny phone that can only hold one book at a time. If ten readers ask for different books simultaneously, they all queue behind you, causing huge delays. That’s like a single‑threaded training loop or an over‑constrained GPU pipeline: the system can’t keep up with real‑world data flow.

Both errors stem from *poor indexing* (misplacing data) and *weak architecture* (single bottleneck). The fix? Keep clear, unique keys for every record and design your system to handle many parallel requests—just like a well‑organized, multi‑aisle library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
