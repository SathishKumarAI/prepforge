---
qid: ing_0e18328bbc__eli5__local
question: 'Explain: Paired coding: write a chunker for a legal document that never
  splits a clause and carries enough context that a retrieved chunk is self-contained.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 187
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:47-05:00'
sources: []
---

Imagine the legal document as a long train with cars (clauses) that must stay together. A **chunker** is like a clever conductor who groups whole cars into cars of a new train—never cutting a clause in half.  
The conductor also keeps a few extra cars on each side of every group, so each new car has enough “story” to stand alone. If you later pull out one of these new cars (a chunk) for review or AI reading, it already contains the clause and its immediate neighbors, giving context that prevents misinterpretation.  
Thus, **paired coding** means the chunker pairs a clause with its surrounding text, ensuring every retrieved chunk is self‑contained while respecting clause boundaries—just like a conductor keeps whole train cars together and gives each segment enough scenery to make sense on its own.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
