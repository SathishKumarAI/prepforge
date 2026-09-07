---
qid: ing_78de0ee687__faang__local
question: 'Explain: Now the hard one: an agent that calls tools over multiple steps.
  Test it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 425
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:05-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *agent* that can invoke external “tools” (APIs, models, databases) across several reasoning steps before producing a final answer.  
Assumptions:  
1. Tools are deterministic or return predictable results.  
2. The agent has a language‑model core for planning and interpreting outputs.  
3. We can observe each tool call in real time.

**Approach**  
1. **Planner module** – given a user query, generate a *step list* (e.g., “search web → parse results → compute summary”).  
2. **Executor loop** – iterate over the plan: call the specified tool, feed its output back to the LLM as context.  
3. **State tracker** – maintain a JSON log of each step and result for debugging.  
4. **Re‑planner** – if a tool fails or produces low confidence, let the LLM adjust the remaining steps.

**Depth**  
- Use *retrieval‑augmented generation*: embed tool outputs as “memory” tokens.  
- Complexity: O(n) over steps; each tool call is I/O bound, so overall latency ≈ sum of tool latencies + LLM inference time (~few hundred ms per step).  
- Trade‑off: richer context improves accuracy but increases token usage and cost.

**Edge Cases**  
- Tool failure (timeout, error code): trigger fallback or retry.  
- Infinite loops: enforce a max step limit (e.g., 5).  
- Unstructured output: use regex/JSON parsing to standardize input back to LLM.

**Optimize & Communicate**  
- Cache repeated tool calls for identical queries.  
- Parallelize independent steps when possible.  
- In interview, narrate that the agent is essentially a *plan‑execute‑monitor* loop, highlighting how each component reduces hallucination and ensures traceability—key for production AI systems at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
