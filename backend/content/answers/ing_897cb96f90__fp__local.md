---
qid: ing_897cb96f90__fp__local
question: 'Explain: Act I — Chatbots (when AI answers) — That Is Embarrassing: Why
  Frontier AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 377
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:57:37-05:00'
sources: []
---

**Why frontier AI keeps “hallucinating”**

At the heart of every large language model (LLM) is a *probability engine* that predicts the next token given all preceding ones. Training data are massive but noisy: facts, opinions, myths, and outright errors coexist. The model learns *joint distributions*, not logical rules, so it internalizes correlations rather than verifiable truths. When asked to generate an answer, it samples from this distribution; if a false pattern is strongly reinforced (e.g., many documents mention “X” in the same context), the model will produce that pattern even when no factual evidence exists.

**The deeper principle: statistical regularization vs. epistemic certainty**

LLMs are built for *coverage* and *fluency*, not *certainty*. Their objective minimizes perplexity, a proxy for how well the model predicts training data, not whether it knows the answer. Consequently, they treat “unknown” as “likely to be something that sounds plausible,” which is why frontier AI still fabricates.

**A non‑obvious insight**

The problem is less about the size of the network and more about *calibrated confidence*. If we attach a Bayesian uncertainty estimate—e.g., via temperature scaling or auxiliary classifiers that predict whether the token sequence matches known facts—the model can self‑flag low‑confidence outputs. This turns hallucination from an unavoidable side effect into a controllable signal, allowing downstream systems to request verification or refuse uncertain answers.

In short: frontier AI “makes things up” because it optimizes for predictive fluency over factuality; the fix lies in quantifying and acting on its own epistemic uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
