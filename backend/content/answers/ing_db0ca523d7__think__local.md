---
qid: ing_db0ca523d7__think__local
question: 'Explain: Retrieve Everything — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 486
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:24:15-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What is “Retrieve Everything”?* Assume it refers to a pattern where an application fetches all rows from a table (e.g., `SELECT * FROM …`) or loads every record into memory.  
   - *What constitutes an anti‑pattern?* A design choice that seems convenient but leads to performance, scalability, or maintainability problems.  
   - *Audience level:* Target readers who understand basic SQL and application architecture.

**2. Adopt a “problem–consequence–solution” mental model**  
   1. **Identify the problem statement** (unbounded data retrieval).  
   2. **List concrete consequences** (slow queries, memory exhaustion, network overload, security exposure).  
   3. **Propose alternative patterns** (pagination, filtering, lazy loading, projection).

**3. Step‑by‑step reasoning**  
   - Start with a simple example (`SELECT * FROM users`).  
   - Quantify the cost: rows × columns × size → memory usage; round‑trip latency; database I/O.  
   - Explain why “everything” is rarely needed and how it violates the *principle of least privilege* in data access.  
   - Contrast with pagination (`LIMIT/OFFSET`, cursor‑based) and explain benefits.  
   - Discuss caching, indexing, and data sharding as mitigations that are still preferable to brute‑force retrieval.

**4. Common traps to avoid**  
   - *Assuming “everything” is harmless* because it works locally; ignore production load.  
   - *Over‑optimizing early*: focus on pagination first before adding caching.  
   - *Neglecting security*: retrieving all columns may expose sensitive fields inadvertently.

**5. Sanity‑check and verbalize**  
   - Re‑frame the answer as a story: “If you ask the database to hand over every record, it will try to do so, but…”.  
   - Verify that each consequence logically follows from the initial action.  
   - End with a concise recommendation: “Always request only what you need; use pagination or filters; treat ‘Retrieve Everything’ as an anti‑pattern unless absolutely justified.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
