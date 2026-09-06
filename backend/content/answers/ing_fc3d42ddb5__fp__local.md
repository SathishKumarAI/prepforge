---
qid: ing_fc3d42ddb5__fp__local
question: A lawyer asks a question about a 200-page credit agreement where the operative
  clause on page 140 depends on a defined term on page 8. How do you build retrieval
  that gets this right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 578
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:55:55-05:00'
sources: []
---

**Building a retrieval system that “knows” a clause on page 140 depends on a term defined on page 8**

| Step | Why it’s needed | How to implement |
|------|-----------------|------------------|
| **1. Parse the contract into logical units** | The lawyer is asking for *semantic* relevance, not just keyword overlap. | Use a rule‑based parser (e.g., regex + spaCy) to split the PDF by “Page X”, “Clause Y”, and extract headings. Store each unit as a document vector in a dense index (FAISS). |
| **2. Build a *dependency graph* of defined terms** | The operative clause refers to a definition that may be quoted, paraphrased, or even cross‑referenced elsewhere. Knowing the graph lets the system trace indirect links. | For every “Defined Term” heading create a node; edges go from each occurrence (including footnotes) back to its source. Store as adjacency lists in a lightweight graph DB (Neo4j). |
| **3. Query expansion via the graph** | A plain query for “operating clause” would miss page 8. The lawyer’s intent is *“find the operative clause that uses this definition.”* | When the user inputs the target clause number, walk the graph backward to all nodes that feed into it. Retrieve their textual embeddings and rank them jointly with the original clause embedding. |
| **4. Use a two‑stage retrieval** | First retrieve candidates quickly; second refine with deeper semantic checks. | Stage 1: BM25 on the raw text for speed. Stage 2: re‑rank top‑k using transformer encoders (e.g., SBERT) that compare the clause to each candidate definition’s embedding, penalizing mismatches in scope or qualifiers. |
| **5. Present a *dependency trace*** | Lawyers want evidence of why a clause was chosen. | Show a breadcrumb: “Clause 140 → defined term ‘X’ (Page 8)” with snippets from both pages, highlighting the exact phrase that links them. |

### Non‑obvious insight  
Most retrieval systems treat documents as flat bags of words. In legal contracts, *definitions are first‑class citizens*; they act like function arguments. By turning definitions into graph nodes and treating cross‑references as edges, you convert a purely lexical search into a *semantic dependency query*. This guarantees that the system will surface page 8 even if the lawyer never mentions it explicitly, because the graph forces the engine to “follow the chain of meaning” rather than just matching keywords.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
