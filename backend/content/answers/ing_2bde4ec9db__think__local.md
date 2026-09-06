---
qid: ing_2bde4ec9db__think__local
question: Which retrieval metrics would you use - recall@k, MRR, nDCG - and when does
  each matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 498
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:34:44-05:00'
sources: []
---

**1️⃣ Clarify the goal & data**  
   *Ask*: Are we evaluating a retrieval‑only system (e.g., search) or a ranking pipeline that feeds downstream tasks?  
   *Assume*: We have ranked lists per query and relevance judgments (binary or graded).  

**2️⃣ Pick a mental model – “What does the metric capture?”**  
   - **Recall@k**: proportion of relevant items found in the top‑k. Good when every missing relevant item is costly (e.g., medical diagnosis).  
   - **MRR**: reciprocal rank of the first relevant item. Useful when only the first hit matters (e.g., answering a question with a single correct answer).  
   - **nDCG**: discounted cumulative gain that rewards higher‑ranked relevant items and handles graded relevance. Ideal for tasks where multiple relevant results are useful and ranking quality over the entire list matters (e.g., web search, recommendation).  

**3️⃣ Reason step‑by‑step**  
   1. Identify the *user intent*: “find all relevant docs” vs “give one good answer”.  
   2. Map that intent to the metric’s focus: breadth → recall; first success → MRR; overall ranking quality → nDCG.  
   3. Consider evaluation budget: if only a few top results are inspected, recall@k or MRR may suffice; for large lists, nDCG gives more nuance.

**4️⃣ Avoid common traps**  
   - Don’t mix *recall* with *precision* without context.  
   - Don’t use MRR when multiple relevant items exist per query.  
   - Remember that nDCG requires a relevance scale; using it on binary labels can be misleading if you ignore the discount factor.

**5️⃣ Sanity‑check & communicate**  
   - Verify that higher metric values truly align with better user experience for the given task.  
   - Explain in plain terms: “Recall@10 tells us how many of the 20 relevant documents we surface in the first ten results.”  

By following this chain—goal → metric focus → step‑wise mapping, guard against pitfalls, then validate—you’ll choose recall@k, MRR, or nDCG exactly where they matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
