---
qid: ing_3d3d7ddbed__eli5__local
question: 'Explain: so this is at an edit distance — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 222
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:12:51-05:00'
sources: []
---

Imagine you’re trying to match two recipes that look almost the same but have tiny differences—maybe one uses butter instead of oil, or a pinch of salt is missing. **Edit distance** is like counting how many small changes (additions, deletions, or substitutions) it takes to turn one recipe into the other. In machine learning, we use this idea to measure similarity between strings: each “edit” costs 1 point, and the total gives us a single number that tells us how close two pieces of text are.

When you design a database for a system‑design interview, knowing edit distance helps decide whether to store full texts or just key parts. If many entries differ by only a few characters, you can use indexes on common prefixes and store only the differences, saving space while still allowing quick look‑ups. This simple counting trick keeps the data structure lean without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
