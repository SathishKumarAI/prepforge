---
qid: ing_bb0990e9e5__fp__local
question: 'Explain: LLM-as-Judge for Step Quality — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 380
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:12-05:00'
sources: []
---

**Why a “LLM‑as‑Judge” is needed**

An agentic system (e.g., an LLM‑powered planner) produces *steps*—intermediate actions that must be correct, safe, and efficient. The fundamental problem is **self‑assessment**: the agent cannot reliably know if its own step satisfies the user’s intent or adheres to domain constraints. Without a separate evaluator, errors propagate unchecked.

**Why a language model can act as the judge**

1. *Universal representation*: LLMs encode vast procedural knowledge and formal rules in their weight space.  
2. *Probabilistic scoring*: By framing evaluation as a classification (“acceptable” vs. “unacceptable”), the model implicitly performs Bayesian inference over all known contexts, weighting plausibility against constraints.  
3. *Differentiable critique*: The same network that generated the step can be queried for a confidence score, enabling self‑feedback loops.

**Deep principle**

This setup is an instance of **self‑consistent optimization**: the agent optimizes its policy under a loss function defined by another model’s output. It mirrors variational inference where one approximates a posterior (the judge) to guide sampling (the agent).

**Non‑obvious insight**

The *quality* signal can be sharpened by feeding the judge **contrastive pairs**—the proposed step alongside an alternative known to be correct. The LLM learns to measure relative fitness, not just absolute acceptability, yielding a more robust error surface for training downstream policies.

In short, treating an LLM as a judge turns evaluation into a learned, probabilistic oracle that scales with the same data the agent uses, ensuring consistency and facilitating continual improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
