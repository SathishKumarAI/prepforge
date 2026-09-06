---
qid: ing_a2b15d9b7a__think__local
question: 'Explain: Query Decomposition (Multi-Query) — Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 463
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:50:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is being queried?*  Assume a user wants a single answer but the system can issue multiple sub‑queries.  
- *Goal of decomposition:* improve recall/precision or parallelize retrieval.  
- *Environment:* language model + external search engine (e.g., Elasticsearch, OpenAI embeddings).  

**2️⃣ Adopt a mental framework**  
Think of it as **query planning in databases**: the user query → planner → multiple “sub‑queries” → executor → merge results.  
Key components:  
- **Decomposition strategy** (tokenization, semantic splitting, intent clustering)  
- **Execution plan** (parallel vs sequential, priority ordering)  
- **Result fusion** (deduplication, ranking, relevance re‑scoring).  

**3️⃣ Step‑by‑step reasoning**  
1. Parse the user prompt → extract entities, intents, constraints.  
2. Decide on split granularity: keyword list, clause extraction, or semantic topics.  
3. Generate sub‑queries (each a lightweight search string).  
4. Dispatch them concurrently to the retriever; optionally assign weights.  
5. Collect hits, dedupe, and re‑rank using a fusion algorithm (e.g., CombSUM, Borda count).  
6. Present merged results or feed back into LLM for synthesis.  

**4️⃣ Common pitfalls to avoid**  
- *Over‑splitting:* too many tiny queries dilute signal.  
- *Duplicate coverage:* overlapping sub‑queries generate redundant docs.  
- *Weight mismanagement:* giving one sub‑query too much influence skews relevance.  
- *Latency trade‑off:* parallelism may increase total time if network or compute is bottlenecked.  

**5️⃣ Sanity‑check & communicate**  
- Verify that the union of sub‑queries covers the original intent (coverage check).  
- Spot‑check result overlap and ranking quality.  
- Explain to stakeholders: “We broke the query into X focused searches, ran them in parallel, then fused results to give you a broader yet precise answer.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
