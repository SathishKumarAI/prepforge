---
qid: ing_012730fd77__think__local
question: 'Explain: Run evaluators separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 474
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:49:12-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is meant by “Run evaluators separately”?*  Assume we’re talking about evaluating LLM outputs in isolation (one evaluator per prompt‑response pair).  
   - *Which platforms are involved?*  Langwatch (monitoring/metrics) and Langfuse (evaluation framework).  
   - *Why separate?*  To avoid interference, ensure reproducibility, and enable parallelism.  

**2. Adopt a mental model**  
   - Treat each evaluator as an independent micro‑service: input → scoring function → output.  
   - View the evaluation pipeline as a DAG where nodes (evaluators) have no shared mutable state.  
   - Use “stateless” design to guarantee determinism and easier scaling.

**3. Step‑by‑step reasoning**  
   1. **Define evaluator contracts** – input schema, output JSON.  
   2. **Instantiate evaluators in Langfuse** – each gets its own configuration (e.g., metric type, thresholds).  
   3. **Invoke them via Langwatch’s API** – send the prompt/response payload and receive a score.  
   4. **Collect results centrally** – store in Langwatch metrics DB or forward to an analytics layer.  
   5. **Aggregate if needed** – combine separate scores for overall quality, but keep provenance.

**4. Common traps to avoid**  
   - *State leakage*: sharing a global cache between evaluators can corrupt results.  
   - *Over‑parallelism*: launching too many concurrent evaluator instances may exhaust API limits or GPU memory.  
   - *Inconsistent scoring*: different evaluator versions produce incomparable metrics; enforce version pinning.

**5. Sanity‑check & verbalize**  
   - **Check determinism**: rerun the same prompt/response pair and confirm identical scores.  
   - **Validate isolation**: change one evaluator’s config and verify only its outputs change.  
   - **Explain to a colleague**: “By running each evaluator in its own container, we guarantee that their metrics are independent, reproducible, and can be scaled horizontally without side‑effects.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
