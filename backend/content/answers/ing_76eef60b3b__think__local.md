---
qid: ing_76eef60b3b__think__local
question: 'Explain: Query Type Analysis — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 428
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:52:15-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - Identify that “Query Type Analysis” is a step in hybrid search pipelines, not a generic term.  
   - Assume the reader knows basic IR (keyword vs semantic) but may not know how to classify queries.  

**2. Mental model / framework**  
   - Think of a query as a vector that can be *structured* (fields, operators), *unstructured* (free‑text), or a mix.  
   - Map each type onto the two engines in a hybrid system: a lexical index and a semantic vector store.  

**3. Step‑by‑step reasoning**  
   1. **Tokenize & parse** → detect field names, Boolean operators, phrases.  
   2. **Check for structured patterns** (e.g., “author:Smith AND year>2020”).  
   3. **If fully structured**, route to the keyword engine; if partially, split into two sub‑queries.  
   4. **If unstructured or ambiguous**, send to semantic model to generate a dense vector.  
   5. **Combine results** via re‑ranking or fusion.  

**4. Common traps**  
   - Assuming “unstructured” always means semantic; some free text still benefits from keyword matching.  
   - Over‑focusing on Boolean syntax and ignoring natural language variations (e.g., synonyms).  
   - Forgetting to handle mixed queries where the same term appears in both structured and unstructured contexts.  

**5. Sanity‑check & communicate**  
   - Verify that every query path ends in at least one engine; no dead‑ends.  
   - Explain with a concise example: “Query: `title:"deep learning" OR author:Goodfellow` → split into keyword part (`title`) and semantic part (rest).”  
   - Emphasize the benefit: faster retrieval for precise terms, richer recall for concept‑based search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
