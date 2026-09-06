---
qid: vq_d1ba30a618__think__local
question: What is the difference between UNION and UNION ALL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 384
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:25:48-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume SQL‑standard set operations (Oracle, MySQL, PostgreSQL, etc.).  
- Focus on two operators that combine result sets: `UNION` vs. `UNION ALL`.  
- No need to dive into language‑specific optimizations unless asked.

**2️⃣ Mental model / framework**  
Think of each query producing a *set* (distinct rows) versus a *multiset* (allowing duplicates).  
- `UNION` → set union: removes duplicate rows.  
- `UNION ALL` → multiset union: keeps every row from both queries.

**3️⃣ Step‑by‑step reasoning**  
1. Identify the input result sets (same column count/types).  
2. Apply `UNION ALL`: concatenate them; duplicates stay.  
3. If `UNION`, run duplicate elimination after concatenation (hash or sort).  
4. Note that the duplicate removal costs extra CPU/memory, but may allow better query‑plan reuse.

**4️⃣ Common traps to avoid**  
- Forgetting that both queries must have identical column lists and compatible data types.  
- Assuming `UNION ALL` is always cheaper; in some engines it can be slower if the planner prefers a sort for deduplication.  
- Overlooking that duplicate elimination changes cardinality, which affects join planning downstream.

**5️⃣ Sanity‑check & verbalize**  
- Verify with a tiny example: `SELECT 1 UNION SELECT 1` → one row; `UNION ALL` → two rows.  
- Explain to a peer: “Use `UNION` when you need uniqueness, `UNION ALL` when you want all rows and better performance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
