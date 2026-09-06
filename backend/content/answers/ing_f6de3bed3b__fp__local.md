---
qid: ing_f6de3bed3b__fp__local
question: 'Explain: Run code-based evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 513
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:44:20-05:00'
sources: []
---

## Why “run‑code” evaluations are essential

When we evaluate an LLM on a task that requires *reasoning*, *computation* or *API calls*, the answer is not just a string but a **procedure**.  
The fundamental problem: how to certify that the model’s output will produce the correct result in every environment?  
Answer → execute the code produced by the model and verify its output against a ground truth.

### Theoretical backbone

1. **Optimization of expected reward** – training maximizes *expected* task success, but this is an expectation over all possible executions.  
2. **Information‑theoretic sanity check** – the code’s semantics must preserve the information flow from input to output; any divergence indicates hallucination or mis‑interpretation.  
3. **Probabilistic consistency** – by sampling many random inputs and executing, we estimate the probability that the model will succeed in unseen cases.

### Implementation with LangWatch & Langfuse

| Component | Role |
|-----------|------|
| **LangWatch** | Monitors *runtime* metrics (latency, memory) and logs each execution trace. It guarantees reproducibility by sandboxing environments. |
| **Langfuse** | Provides a *scoring* API that automatically compares the execution result with the expected output, handling edge cases like floating‑point tolerance or partial matches. |

The workflow:

1. **Prompt → Code**: Model outputs a snippet (Python/JS).  
2. **Sandboxed run**: LangWatch executes it in isolation, capturing stdout/stderr.  
3. **Evaluation**: Langfuse compares the captured output to the oracle; assigns a binary or graded score.  
4. **Feedback loop**: Scores are fed back into fine‑tuning objectives (e.g., RLHF).

### Non‑obvious insight

Most people treat code evaluation as “just run it”, but *the act of sandboxing itself introduces bias*: if the sandbox forbids certain libraries, the model learns to produce alternative implementations. Hence, **sandbox configuration is a hyperparameter that directly shapes the inductive biases** of the evaluated model.

By grounding evaluations in actual execution, we close the gap between *syntactic* correctness and *semantic* reliability—essential for trustworthy AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
