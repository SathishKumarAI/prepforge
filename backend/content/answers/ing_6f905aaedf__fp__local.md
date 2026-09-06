---
qid: ing_6f905aaedf__fp__local
question: 'Explain: Tier 2 - LLM judge with policy-as-prompt'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 372
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:22-05:00'
sources: []
---

**Tier 2 – “LLM Judge” with *policy‑as‑prompt***  
When a system needs to evaluate whether an AI’s output obeys a rule set (e.g., safety, fairness), the simplest solution is a second LLM that reads the *original* prompt, the candidate answer, and a *policy specification*.  

**Why this works**  
1. **Problem framing** – We’re asking for a binary decision (“acceptable?”). That’s a supervised classification problem, but the training data are scarce or constantly shifting (new policies).  
2. **Prompt‑based inference** – By feeding the policy as part of the prompt we turn the classifier into a *contextual* model: it learns to weigh evidence against an evolving standard without retraining.  
3. **Optimization perspective** – The LLM maximizes likelihood over token sequences that jointly encode “policy satisfied” and “output content”. The loss is implicitly the cross‑entropy of this joint distribution, which aligns with maximizing *information gain* about policy compliance.

**Non‑obvious insight**  
The judge’s output can be *regularized* by injecting a *soft penalty token* (e.g., `<⚠>`). This encourages the model to flag borderline cases even when the surface text seems compliant. It exploits the LLM’s internal uncertainty estimation, effectively turning a deterministic prompt into a probabilistic safety net without extra fine‑tuning.

In short, a Tier 2 judge is a lightweight, policy‑aware classifier that leverages the LLM’s ability to reason over arbitrary textual constraints, offering both flexibility and immediate deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
