---
qid: ing_d85e28257f__faang__local
question: 'Explain: Problem statement — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 514
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:45-05:00'
sources: []
---

**Problem Statement – Text‑to‑SQL Agent**

Given a natural‑language query (e.g., “Show me the total sales per region for last quarter”), produce a correct, executable SQL statement that returns the intended result from a relational schema.

---

### 1️⃣ Clarify  
- **Input**: free‑form English sentence.  
- **Output**: single SQL string.  
- **Assumptions to confirm**:  
  - The database schema (tables, columns, types) is known and static.  
  - We can access metadata via a catalog API.  
  - Query correctness is judged by semantic equivalence, not just syntactic similarity.

### 2️⃣ Approach  
1. **Schema‑aware language model** – fine‑tune a transformer on paired NL–SQL data plus the schema.  
2. **Two‑stage decoding**:  
   *Stage A*: generate a “schema‑bound” template (e.g., `SELECT … FROM … WHERE …`).  
   *Stage B*: fill slots using entity linking to columns/values.  
3. **Post‑processing validator** – run the SQL against a sandbox; if it errors, fall back to rule‑based rewrite or ask for clarification.

### 3️⃣ Depth  
- **Model**: BERT‑based encoder + GPT decoder conditioned on schema tokens.  
- **Complexity**: Inference is linear in query length and schema size (~O(n)).  
- **Trade‑offs**: Larger models improve coverage but increase latency; a hybrid rule‑based fallback keeps precision high for edge cases.

### 4️⃣ Edge Cases  
- Ambiguous entities (“sales” could be column or table).  
- Nested queries (subqueries, window functions).  
- Unsupported SQL features in the target DBMS.  
- Tests: unit tests on synthetic NL–SQL pairs; integration tests against a live database with schema variations.

### 5️⃣ Optimize & Communicate  
- **Optimization**: Cache frequent mappings, use beam search with grammar constraints to reduce invalid outputs.  
- **Narration**: “We first map the user’s intent to a high‑level template, then resolve each placeholder using exact column matches from the catalog, ensuring syntactic correctness before execution.”  

This structured pipeline balances data‑driven generality with rule‑based safety—critical for production AI agents at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
