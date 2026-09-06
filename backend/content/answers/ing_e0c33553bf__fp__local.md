---
qid: ing_e0c33553bf__fp__local
question: 'Explain: Human review as ground truth — Pydantic Logfire: AI Observability
  for LLMs, Apps & RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 371
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:38-05:00'
sources: []
---

**Human review as ground truth – the heart of Pydantic Logfire’s observability**

When an LLM or a Retrieval‑Augmented Generation (RAG) pipeline produces a response, the *only* certifiable way to know whether that output is correct is to compare it against a human judgment. This comparison turns the unobservable “semantic quality” into a measurable signal: a binary label (pass/fail) or a graded score.  

1. **Fundamental problem** – LLMs generate high‑dimensional text without an internal cost function that aligns with real‑world correctness.  
2. **Why human labels work** – Humans can parse context, disambiguate intent, and apply domain knowledge; their annotations provide the *ground truth* needed to train or calibrate downstream metrics.  
3. **Deep principle** – This is a classic supervised learning setup: we observe pairs \((x_i, y_i)\) where \(x_i\) is the model’s output and \(y_i\) is the human label. By minimizing loss over these pairs, the system learns a surrogate *quality predictor* that can be applied at scale without continuous human oversight.  
4. **Non‑obvious insight** – The *rate* of human reviews (e.g., 1 % of traffic) can itself be optimized: treat review allocation as an exploration–exploitation problem, using active learning to pick the most informative samples. Thus, Logfire doesn’t just record; it actively steers future evaluations toward the frontier where uncertainty is highest.

In short, human review supplies a sparse but gold‑standard signal that turns qualitative output into a tractable optimization target, enabling automated monitoring and continuous improvement of LLM‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
