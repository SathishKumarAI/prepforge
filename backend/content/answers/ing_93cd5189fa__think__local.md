---
qid: ing_93cd5189fa__think__local
question: 'Explain: Week 5 - Dynamic programming ​ — Best practice questions by the
  author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 546
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:51:27-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**

- *What is being asked?*  
  The user wants an explanation of “Week 5 – Dynamic programming” from a specific course or book, focusing on the “Best practice questions” highlighted by the author of *Blind 75*.  
- *Assumptions:*  
  - They are familiar with basic DP concepts.  
  - They have access to the Blind 75 list (or at least know it’s a set of interview‑style problems).  
  - They want practical, concise guidance rather than a full lecture.

**2️⃣ Adopt a mental model**

Use the **“Problem → Pattern → Solution”** framework:

1. Identify the core DP pattern (e.g., *unbounded knapsack*, *matrix chain multiplication*).  
2. Map each Blind 75 problem to that pattern.  
3. Explain how the solution follows from the recurrence and memoization/iteration strategy.

Wrap this in a “best‑practice” checklist: recognize patterns, write base cases, avoid recomputation, test edge cases.

**3️⃣ Step‑by‑step reasoning**

1. List the DP problems in Week 5 (e.g., *Climbing Stairs*, *House Robber*, *Coin Change*).  
2. For each, state:  
   - The subproblem definition.  
   - Recurrence relation.  
   - Optimal substructure justification.  
3. Show the typical implementation (top‑down with memo or bottom‑up array).  
4. Highlight common pitfalls (off‑by‑one indices, wrong base cases).  
5. End each section with a “quick practice tip” (e.g., “always draw the state diagram first”).

**4️⃣ Common traps to avoid**

- Mixing up *overlap* vs. *optimal substructure*.  
- Forgetting that some DP problems need **two dimensions** (e.g., edit distance).  
- Over‑optimizing prematurely—start with clear recursion, then memoize.  
- Assuming the first solution you write is optimal; always test against edge cases.

**5️⃣ Sanity‑check & communicate**

- Verify each recurrence by hand on a tiny input.  
- Run a quick unit test or two to confirm logic.  
- Summarize in one sentence per problem: “This DP solves X by…”.  
- End with a reminder that mastering patterns beats memorizing formulas.

Following this checklist lets you explain Week 5’s DP problems, tie them to the Blind 75 best practices, and give interviewees a clear, actionable framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
