---
qid: vq_72cb9b6ac7__think__local
question: WHAT IS A FILTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 367
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:48:16-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm we’re talking about *database* indexes (not image filters).  
- Assume a relational DBMS that supports partial/filtered indexes (e.g., PostgreSQL, SQL Server, Oracle).  
- The question likely asks for definition, purpose, and typical use‑cases.

**2️⃣ Adopt the “index + predicate” mental model**  
- Think of an index as a lookup table on selected columns.  
- A *filtered* index adds a WHERE‑clause that restricts which rows are stored in that index.  

**3️⃣ Reason step‑by‑step toward the answer**  
1. Define what an index does (speed lookups).  
2. Explain the “filter” part: only rows satisfying a condition are indexed.  
3. Mention how this reduces storage, maintenance overhead, and improves query performance for that subset.  
4. Provide a concrete example (e.g., `CREATE INDEX ON orders(order_date) WHERE status='completed'`).  

**4️⃣ Avoid common traps**  
- Don’t conflate *filtered* with *partial* unless the DBMS uses those terms interchangeably; clarify synonyms.  
- Don’t ignore that filtered indexes may not be used for queries that don’t match the predicate.  
- Avoid over‑generalizing to all databases—some engines lack this feature.

**5️⃣ Sanity‑check & verbalize**  
- Verify that the definition covers *definition, benefit, and limitation*.  
- Check word count (150–220 words).  
- Summarize in a clear, concise paragraph that can be recited or written down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
