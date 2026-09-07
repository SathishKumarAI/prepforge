---
qid: ing_fc3d42ddb5__faang__local
question: A lawyer asks a question about a 200-page credit agreement where the operative
  clause on page 140 depends on a defined term on page 8. How do you build retrieval
  that gets this right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 416
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:17-05:00'
sources: []
---

**Clarify**  
We need to retrieve the exact text of the operative clause (page 140) *and* the definition it depends on (page 8). The lawyer wants both together, so our system must fetch them in a single response and preserve their context.

Assumptions:  
- PDF is searchable; OCR is reliable.  
- Page numbers are consistent across versions.  
- We can index by page, clause ID, and cross‑references.

**Approach**  
1. **Document ingestion** – split the PDF into page‑level chunks, store each with its page number and raw text.  
2. **Clause extraction** – run a rule‑based or ML model to tag operative clauses (e.g., “Section X – Operative”) and capture their IDs.  
3. **Cross‑reference resolution** – build an index mapping clause IDs to referenced terms (regex on “defined term on page 8”).  
4. **Query pipeline** – user query → match clause ID → fetch clause chunk + referenced page chunk.

**Depth**  
- Use a vector DB (e.g., Pinecone) for semantic similarity, but also keep exact page‑level keys for deterministic retrieval.  
- Complexity: O(1) for key lookup; O(n) only during indexing.  
- Trade‑off: storing full pages increases storage but guarantees context.

**Edge Cases**  
- Multiple definitions on page 8 → return all relevant ones.  
- Definition moved to another page – cross‑reference parser must update the index.  
- OCR errors leading to missing “page 8” token – fallback to regex on section titles.

**Optimize & Communicate**  
Explain that we first build a deterministic key (page number + clause ID) so the lawyer gets *exact* pages, then augment with semantic search for flexible queries. This ensures fast, accurate retrieval while allowing future expansion (e.g., paraphrased questions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
