---
qid: ing_e3f267c36c__faang__local
question: 'Explain: DSPy: Programming —not prompting—Foundation Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 476
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:00-05:00'
sources: []
---

**Clarify**  
You’re asking how *DSPy* lets you program with foundation models instead of writing prompts.  
Assumptions: the user has a pre‑trained LLM (e.g., GPT‑4), wants to compose tasks, and prefers code‑style control over prompt strings.

---

**Approach**  
1. Treat each subtask as a *function* that takes typed inputs and returns typed outputs.  
2. Chain functions declaratively—DSPy builds an execution graph rather than a monolithic prompt.  
3. Under the hood, each function emits a prompt fragment; the framework stitches them, adds context, and feeds the final string to the LLM.

---

**Depth**  
* **API Design** – `@dspy.program` decorator creates a class with typed fields; methods are annotated with `@dspy.LLM`.  
* **Execution Graph** – DSPy records dependencies; when you call the program, it schedules calls in topological order.  
* **Prompt Generation** – For each node, DSPy renders a prompt template (Jinja‑style) and passes only necessary context, reducing token waste.  
* **Type Safety & Validation** – Python type hints are checked at runtime; invalid outputs trigger retries or fallbacks.  
* **Complexity** – Graph construction is *O(V+E)*; execution is linear in the number of nodes; prompt size grows with logical depth, not raw text.

---

**Edge Cases**  
* Circular dependencies → detected during graph build.  
* Extremely long chains → token budget overflow → DSPy can chunk or stream.  
* Non‑deterministic LLM outputs → deterministic fallback via caching or re‑generation rules.

---

**Optimize & Communicate**  
- **Caching**: memoize subtask results to avoid redundant calls.  
- **Parallelism**: independent branches run concurrently if the LLM API allows batching.  
- **Explainability**: DSPy exposes the graph, so you can audit each step.  

Narrate this as: “We’re shifting from a prompt‑centric view to a function‑centric one, giving developers clear type contracts, composability, and better resource control.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
