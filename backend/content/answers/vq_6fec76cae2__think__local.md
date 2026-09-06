---
qid: vq_6fec76cae2__think__local
question: What is a sub-query?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 427
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:46:59-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What exactly does “sub‑query” mean in this context?*  
     Assume the user is asking about SQL, the most common place where sub‑queries appear.  
   - *Scope:* Are we talking about correlated vs uncorrelated, scalar vs set‑returning? Keep it general enough for beginners but precise enough to be useful.

**2️⃣ Choose a mental model / framework**  
   - Think of a query as a “sentence” that produces rows.  
   - A sub‑query is a “sentence inside another sentence.”  
   - Distinguish the two main uses: *filtering* (WHERE, HAVING) and *column value generation* (SELECT list).

**3️⃣ Reason step by step toward an answer**  
   1. Define a query in plain language.  
   2. Show how you can embed one SELECT inside another.  
   3. Illustrate with two simple examples:  
      - Uncorrelated sub‑query returning a single value (scalar).  
      - Correlated sub‑query that references the outer row.  
   4. Explain the execution model: the inner query runs first, producing a temporary result set that the outer query consumes.

**4️⃣ Common traps & wrong turns to avoid**  
   - Mixing up “sub‑query” with “derived table” or CTE – keep definitions distinct.  
   - Forgetting that a scalar sub‑query must return exactly one row; otherwise it errors.  
   - Assuming sub‑queries are always slower—modern engines optimize them heavily.

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify the examples run on standard SQL (e.g., PostgreSQL).  
   - Keep explanations concise, use bullet points for clarity.  
   - End with a quick summary: “A sub‑query is simply a SELECT that lives inside another SELECT, used to compute values or filter rows.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
