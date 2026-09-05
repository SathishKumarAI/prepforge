---
qid: ing_357e1d3d39__think__local
question: Compare plan-then-execute with reactive (ReAct-style) execution. When does
  each win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 490
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:32:15-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *Plan‑then‑execute* = pre‑compute a full plan (e.g., via symbolic planning or LLM prompt that outputs steps).  
   - *Reactive/ReAct* = generate one step, observe state, then generate next until goal.  
   - Assume both use the same language model and comparable computational resources; focus on problem structure (determinism, branching, feedback).

**2. Mental model: “Predictability vs. Adaptivity”**  
   - Plan‑then‑execute thrives when the environment is static or fully observable and the cost of replanning outweighs the risk of errors.  
   - Reactive wins in highly dynamic or partially observable settings where intermediate outcomes must be verified before committing to further actions.

**3. Step‑by‑step reasoning**  
   1. Identify *state uncertainty*: if hidden variables can change, reactive’s feedback loop is essential.  
   2. Evaluate *branching factor*: a huge branching tree favors pre‑planning to prune early; small trees let reactive handle each branch on the fly.  
   3. Consider *time constraints*: pre‑planning amortizes cost over many executions; real‑time tasks benefit from immediate, short decisions.  
   4. Examine *failure recovery*: reactive can abort or backtrack after a bad step; pre‑plan may need full replanning.

**4. Common traps to avoid**  
   - Assuming pre‑planned plans are always optimal—ignore that LLMs may hallucinate steps.  
   - Overlooking the cost of repeated calls in reactive loops for long tasks.  
   - Ignoring that some problems require *global* optimization (e.g., resource allocation) better suited to planning.

**5. Sanity‑check & verbalize**  
   - Run a quick mental test: “If the goal changes mid‑execution, which strategy can adapt?” Reactive → yes; plan‑then‑execute → no unless replanned.  
   - Summarize: *Plan‑then‑execute* wins for static, low‑uncertainty, high‑cost tasks; *reactive/ReAct* excels in dynamic, uncertain, or interactive scenarios where feedback is cheap and valuable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
