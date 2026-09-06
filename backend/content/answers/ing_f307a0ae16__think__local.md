---
qid: ing_f307a0ae16__think__local
question: 'Explain: Build an Extractive QA Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 450
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:02:54-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants a *high‑level explanation* of how to build an extractive QA pipeline using Haystack, not code‑by‑code.  
   - Assume they know basic ML terms but may be new to Haystack.  
   - Assume they’re interested in end‑to‑end flow (data ingestion → indexing → querying).  

**2️⃣ Adopt a “pipeline‑step” mental model**  
   1. **Data source & reader** – where the text comes from.  
   2. **Document store** – persistence layer.  
   3. **Retriever** – fetches candidate passages.  
   4. **Reader** – extracts answer span.  
   5. **Post‑processing & ranking** – final output.  

**3️⃣ Reason through each step logically**  
   - Start with data ingestion: explain connectors (PDF, web, DB).  
   - Show how to transform raw docs into chunks and store in a vector DB.  
   - Move to retrieval: contrast BM25 vs dense embeddings; mention index creation.  
   - Detail the reader component: transformer fine‑tuned for QA, input format, output span extraction.  
   - Finish with post‑processing: score aggregation, filtering, formatting.  

**4️⃣ Watch out for common pitfalls**  
   - Mixing up *retrieval* vs *reading* roles.  
   - Forgetting to chunk documents appropriately.  
   - Assuming the reader works on raw PDFs without preprocessing.  
   - Overlooking the need for GPU if using large transformers.  

**5️⃣ Sanity‑check & verbalise clearly**  
   - Re‑read each step to ensure it flows logically.  
   - Use concrete examples (e.g., “index a set of research papers”).  
   - Keep sentences short, avoid jargon unless defined.  
   - End with a quick recap or next‑step suggestion (e.g., fine‑tune the reader).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
