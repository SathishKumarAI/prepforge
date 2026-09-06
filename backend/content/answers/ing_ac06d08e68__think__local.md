---
qid: ing_ac06d08e68__think__local
question: 'Explain: Data & context strategy — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 485
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:21:59-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   *Ask what “data & context strategy” means in this setting:* are we talking about how to feed the model with schema information, past queries, or user intent? Assume a single‑tenant system where the agent has read‑only access to a relational database and must translate natural language into SQL.  

**2️⃣ Adopt a layered mental model**  
   *Layer 1 – Data ingestion:* capture schema metadata (tables, columns, types, constraints).  
   *Layer 2 – Context accumulation:* store recent user utterances, previous queries, and the resulting plan or execution plan.  
   *Layer 3 – Representation & retrieval:* decide between embedding‑based similarity search vs rule‑based lookup to surface relevant schema snippets or query templates.  

**3️⃣ Reason step‑by‑step toward a strategy**  
   - **Schema representation:** build a graph (or vector space) of entities; annotate with foreign keys for join inference.  
   - **Context windowing:** limit the number of past turns but prioritize those that changed intent or added filters.  
   - **Dynamic prompt construction:** prepend relevant schema fragments and context snippets to the LLM prompt, ensuring token budget is respected.  
   - **Fallback mechanisms:** if the model misses a table/column, trigger an auto‑completion or a clarifying question.  

**4️⃣ Beware of common traps**  
   *Token overflow* – over‑loading prompts with entire schemas.  
   *Context drift* – mixing unrelated past queries that confuse the model.  
   *Assuming perfect schema knowledge* – forgetting to handle aliases, synonyms, or deprecated columns.  

**5️⃣ Sanity‑check & articulate**  
   - Run a few example user inputs through your pipeline and verify that the generated SQL uses only valid identifiers.  
   - Explain aloud: “We first expose the minimal, relevant part of the schema; we then feed the most recent intent‑changing turns; finally we let the model generate code within these bounds.”  
   If any step feels shaky, revisit the corresponding layer in the mental model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
