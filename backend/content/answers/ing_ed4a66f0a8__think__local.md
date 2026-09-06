---
qid: ing_ed4a66f0a8__think__local
question: 'Explain: Filtering Documents with Metadata — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 411
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:40:48-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Identify that the user wants an explanation of how *Haystack* uses metadata for document filtering in tutorials.  
   - Assume they’re familiar with basic NLP concepts but new to Haystack’s pipeline.  

**2. Adopt a mental model**  
   - Treat Haystack as a modular pipeline: ingestion → indexing → retrieval → post‑processing.  
   - View metadata as an *extra key/value store* attached to each document, influencing the retrieval step.  

**3. Step‑by‑step reasoning**  
   1. **Ingestion** – when documents are read (PDFs, webpages), Haystack extracts text and optional user‑supplied metadata (author, date, tags).  
   2. **Indexing** – each doc+metadata is stored in a vector store; the metadata becomes searchable fields.  
   3. **Query time filtering** – the retrieval component accepts *filter queries* that match metadata keys (e.g., `{"category": "finance"}`).  
   4. **Result ranking** – documents passing the filter are scored by relevance to the user query, then returned.  

**4. Avoid common traps**  
   - Don’t conflate metadata filtering with text‑based search; filters operate on structured fields only.  
   - Remember that not all vector stores support metadata querying out of the box—choose one that does (e.g., FAISS + a sidecar DB).  

**5. Sanity‑check & verbalize**  
   - Verify each step: ingestion → indexing → filter query → ranking → output.  
   - Explain with an example (e.g., “filter by publication year > 2020”).  
   - Emphasize that tutorials illustrate this flow, letting learners tweak metadata keys and filter expressions to suit their domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
