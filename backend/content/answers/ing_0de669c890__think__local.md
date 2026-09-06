---
qid: ing_0de669c890__think__local
question: 'Explain: Week 2 - Data structures ​ — Best practice questions by the author
  of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 475
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:38:21-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- The user wants a *process* for answering a specific interview‑style question about “Week 2 – Data structures” from the Blind 75 book.  
- Assume they need a strategy that can be reused for other ML/DS questions, not just this one.  
- Note we’ll focus on the thinking steps rather than the technical answer itself.

**2. Pick a mental model / framework**  
- Use the classic *problem‑analysis → solution design → validation* triad:  
  1. **Problem Analysis** – understand constraints, inputs/outputs, edge cases.  
  2. **Solution Design** – decide on data structures, algorithms, and trade‑offs.  
  3. **Validation / Edge Cases** – test with typical, boundary, and worst‑case scenarios.

**3. Reason step‑by‑step toward a reusable answer template**  
- Start by asking clarifying questions: “What exactly is the question asking? Is it about time/space complexity or about choosing a specific structure?”  
- Translate that into constraints (size of data, mutability, required operations).  
- Map constraints to candidate structures (arrays, linked lists, hash maps, trees, heaps, graphs).  
- Evaluate each on the criteria: insertion/deletion speed, lookup speed, memory overhead.  
- Pick the best fit and justify it in terms of Big‑O and real‑world trade‑offs.

**4. Common traps to avoid**  
- **Assuming a one‑size‑fits‑all structure** – always check constraints first.  
- **Ignoring edge cases** (empty input, duplicates, very large inputs).  
- **Overcomplicating the solution** – stick to simple, well‑known structures unless the problem explicitly demands something fancy.

**5. Sanity‑check & communicate**  
- After drafting your reasoning, mentally walk through a sample test case to ensure every step makes sense.  
- Summarize in a concise paragraph: “Given X constraints, Y is optimal because of Z.”  
- Be ready to adapt if the interviewer asks for alternative approaches or deeper complexity analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
