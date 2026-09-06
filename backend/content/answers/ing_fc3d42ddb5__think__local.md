---
qid: ing_fc3d42ddb5__think__local
question: A lawyer asks a question about a 200-page credit agreement where the operative
  clause on page 140 depends on a defined term on page 8. How do you build retrieval
  that gets this right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 428
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:39:39-05:00'
sources: []
---

**1️⃣ Clarify the task & assumptions**

- The lawyer wants an answer that shows the operative clause (p. 140) and explains how it hinges on a definition from p. 8.
- Assume we have full‑text PDFs or OCRed text; no external knowledge base is available.
- Retrieval must surface *both* pages (or at least the relevant excerpts).

**2️⃣ Mental model / framework**

Treat the document as a graph:  
`Definition ↔ Clause`.  
Use *semantic indexing*: embed definitions and clauses in a vector space, then query for “definition of X + clause that references it”.

**3️⃣ Step‑by‑step reasoning**

1. **Preprocess** each page → tokenized sentences.
2. **Identify definition markers** (`“X means …”`, `“X shall mean …”`).
3. **Create two indexes**:  
   - *Definition index*: key = term, value = embedding of its sentence(s).  
   - *Clause index*: key = clause ID (e.g., page 140), value = embedding.
4. When the lawyer asks about “operative clause on p. 140”, fetch that clause’s text.
5. **Detect the referenced term** in the clause (keyword or entity extraction).
6. Query the definition index for that term → get p. 8 sentence(s).
7. Return both snippets, highlighting the link.

**4️⃣ Common traps to avoid**

- Relying only on keyword search; miss paraphrases.
- Ignoring cross‑page references → retrieve irrelevant clauses.
- Failing to handle OCR errors or inconsistent numbering.

**5️⃣ Sanity‑check & explain**

Run a quick test: pick a known definition–clause pair, see if the system surfaces both.  
Explain to the lawyer: “We first locate clause 140, then automatically find the definition it cites on page 8, and present them together.” This shows retrieval is context‑aware, not just keyword‑based.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
