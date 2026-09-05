---
qid: ing_2bd64db269__fp__local
question: How should tool errors be surfaced to the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 398
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:48-05:00'
sources: []
---

**Why tool errors matter**

A large‑language model (LLM) is a black‑box predictor of tokens given a context. When it delegates a subtask—e.g., calling a calculator or database—to an external *tool*, the tool’s output becomes part of that context. If the tool fails, the LLM receives noisy evidence and may overfit to the error as if it were correct text. The fundamental problem is **information integrity**: the model must maintain a consistent belief state despite stochastic tool responses.

**Principle‑based design**

1. **Explicit failure tokens** – Treat an error as a distinct token (e.g., `<ERROR>`) rather than silently dropping or replacing it with garbage. This preserves the evidence that something went wrong and allows downstream modules to recognize uncertainty.
2. **Contextual flags** – Append metadata (`source=tool`, `status=failure`, `reason=<code>`) in a structured prefix. The LLM can learn to parse these cues as indicators of low confidence, akin to how it treats “I don’t know” or “unknown”.
3. **Probability calibration** – Emit an uncertainty score (e.g., 0–1). By conditioning on this scalar, the model learns that high‑uncertainty inputs should trigger fallback strategies (self‑reflection, asking for clarification).

**Non‑obvious insight**

Treating tool errors as *explicitly observable events* turns them into data rather than noise. The LLM can learn a *meta‑policy*: if it sees `<ERROR>` with a low confidence flag, it can choose to ask the user for more information or retry the call. This mirrors human troubleshooting—error signals prompt adaptive behavior instead of blindly trusting flawed outputs.

In short: surface errors as structured, probabilistic tokens so that the model’s inference pipeline remains robust and self‑aware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
