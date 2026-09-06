---
qid: ing_ca1f6a97c2__fp__local
question: 'Explain: Done! Auto-tracing enabled — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 527
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:10:34-05:00'
sources: []
---

**Why “Done! Auto‑tracing enabled” matters**

When you run a chain of prompts through an LLM, the *trace* is the causal graph that records every internal call: token counts, model names, tool invocations, and the raw responses. Without it you only see the final answer; you can’t tell whether a hallucination came from the prompt, a missing tool, or a buggy chain.

**Auto‑tracing in LangWatch/LangFUSE**

1. **Instrumentation is the first principle of observability**  
   By automatically wrapping every LLM call (`LLM.invoke`, `tool.run`, etc.) with a lightweight decorator that records start/end timestamps, prompt text, and output metadata, you obtain a *complete* execution graph without manual logging.

2. **Trace as a data structure → optimization surface**  
   The trace is essentially a directed acyclic graph (DAG). Each node’s cost can be quantified (latency, token usage) and each edge represents dependency. This turns evaluation into a constrained optimization problem: minimize total latency while ensuring correctness constraints are satisfied.

3. **Probabilistic inference of hallucination sources**  
   By treating the trace as evidence in a Bayesian network, you can compute posterior probabilities that a particular node introduced error. For example, if `tool.run` fails on 30 % of trials but only 5 % of overall failures are traced to it, you know the problem lies elsewhere.

4. **Non‑obvious insight: trace compression is a form of regularization**  
   In LangWatch/LangFUSE, long traces are automatically pruned by merging identical sub‑graphs (e.g., repeated calls to the same tool with the same arguments). This not only saves storage but also reduces overfitting in downstream evaluation models that learn from traces.

5. **Practical workflow**  
   ```python
   @auto_trace  # LangWatch decorator
   def run_chain(llm, prompt):
       return llm.invoke(prompt)

   trace = get_last_trace()          # LangFUSE API
   analyze(trace)                    # latency stats + error attribution
   ```

**Bottom line:** Auto‑tracing turns opaque LLM runs into actionable data, turning evaluation from a black‑box guess to a principled optimization and inference problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
