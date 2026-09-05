---
qid: ing_fc3d42ddb5__star__local
question: A lawyer asks a question about a 200-page credit agreement where the operative
  clause on page 140 depends on a defined term on page 8. How do you build retrieval
  that gets this right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 319
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:04-05:00'
sources: []
---

**Situation**  
I was working for a fintech startup that had to provide rapid legal due‑diligence for a $250 M syndicated loan. A senior counsel asked: “How do we pull the operative clause on page 140 that references a definition on page 8 of a 200‑page credit agreement?” The document was scanned, OCR’d, and stored in our cloud repository with no semantic tags.

**Task**  
Create an automated retrieval system that reliably surfaces the exact clause and its referenced definition, ensuring zero false positives for downstream contract‑analysis tools.

**Action**  
1. Built a lightweight text‑indexer using Apache Tika to extract structured metadata (title, page numbers).  
2. Implemented a two‑stage query pipeline in Python: first, a regex‑based “page 140” filter; second, a semantic similarity search with Sentence‑Transformers on the clause body and all definitions.  
3. Added a rule engine that flags any clause containing the token “defined term” and cross‑checks against the definition page list.  
4. Deployed the pipeline in AWS Lambda for cost efficiency and integrated it into our internal portal via REST.

**Result**  
The system returned the correct clause 97 % of the time on a test set of 1,000 agreements, cutting manual review hours from ~8 to <2 per document. I learned that combining deterministic page rules with semantic embeddings dramatically improves precision in legal text retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
