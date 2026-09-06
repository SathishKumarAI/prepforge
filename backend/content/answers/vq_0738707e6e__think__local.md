---
qid: vq_0738707e6e__think__local
question: HOW DOES A RECURSIVE CTE WORK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 486
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:06:50-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- Ask what “recursive CTE” means in this context (SQL Server, PostgreSQL, etc.).  
- Assume we’re dealing with a standard SQL Common Table Expression that references itself.  
- Note that the reader likely knows basic CTE syntax but not the recursion mechanics.

**2️⃣ Choose a mental model / framework**  
- Think of a recursive CTE as two parts: an *anchor* (the base query) and a *recursive member* (the part that calls the CTE again).  
- Visualize it like a breadth‑first search over a graph, where each iteration expands one “layer” of results.

**3️⃣ Step‑by‑step reasoning**  
1. **Anchor execution** – run the base query once to produce initial rows.  
2. **Union (or UNION ALL)** – combine those rows with the result of the recursive member.  
3. **Recursive member evaluation** – it runs once for each row produced so far, using its output as input for the next iteration.  
4. **Termination condition** – a `WHERE` clause inside the recursive part that stops further recursion (e.g., depth > 10).  
5. **Repeat until no new rows are added** – the engine keeps iterating until the union yields an empty set.

Explain how the optimizer materializes intermediate results and why you might need `OPTION (MAXRECURSION n)` to avoid infinite loops.

**4️⃣ Common traps & wrong turns**  
- Forgetting a termination condition → infinite recursion.  
- Using `UNION` instead of `UNION ALL` when duplicates are expected, which can slow performance.  
- Misunderstanding that the recursive part runs *once per row*, not just once overall.  
- Assuming order is preserved; CTEs are unordered unless an explicit `ORDER BY` in a final SELECT.

**5️⃣ Sanity‑check & verbal communication**  
- Verify with a simple example (e.g., adjacency list of employees).  
- Ask the learner to walk through two iterations mentally.  
- Summarize: “A recursive CTE builds results layer by layer, each iteration feeding into the next until no new rows emerge or a limit is hit.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
