---
qid: ing_828ea642c1__think__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 406
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:37:04-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “code‑based evals”?* Assume it means evaluating an LLM’s outputs by running generated code (e.g., Python) and checking correctness.  
- *Why fast, cheap, deterministic?* List these as the three key properties to justify.  

**2️⃣ Adopt a simple evaluation framework**  
- **Speed** → runtime of executing short snippets vs. human review.  
- **Cost** → compute minutes, cloud usage, no expert labor.  
- **Determinism** → same input → same output every run (no stochastic human grading).  

**3️⃣ Step‑by‑step reasoning**  
a) Identify the typical workflow: prompt → LLM outputs code → interpreter runs it → compare result to expected answer.  
b) Quantify speed: a 0.1 s execution vs. minutes of manual grading.  
c) Compute cost: one GPU minute ≈ $0.01, versus hiring a reviewer at $30/h.  
d) Explain determinism: code execution is reproducible; no ambiguity in human judgment.  

**4️⃣ Avoid common pitfalls**  
- Don’t conflate *accuracy* with *speed*. Code can be fast but still wrong.  
- Beware of hidden costs (e.g., debugging, sandboxing).  
- Remember that deterministic evaluation only holds if the code is executed in a controlled environment.

**5️⃣ Sanity‑check & communicate**  
- Re‑state each property briefly: “We run tiny snippets → instant verdict; we pay almost nothing per test; the result never changes.”  
- Use a concrete example (e.g., summing an array) to illustrate all three points in one go.  

Follow this structure whenever you need to explain why code‑based evaluations are fast, cheap, and deterministic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
