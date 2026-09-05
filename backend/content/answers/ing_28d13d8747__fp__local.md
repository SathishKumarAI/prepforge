---
qid: ing_28d13d8747__fp__local
question: 'Explain: Failure modes & mitigations — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 543
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:32:06-05:00'
sources: []
---

### Why an AI support bot can fail

The core task is **turn‑based dialogue that resolves user intent while maintaining trust**.  
Mathematically, the system learns a policy π(a|s) mapping *state* s (user utterance + context) to *action* a (response).  The objective is to maximize expected reward R(π)=E[∑γⁿ rₙ], where rₙ encodes accuracy, satisfaction, and safety.  

Because the environment is partially observable and stochastic, π must generalize from a finite training set to an infinite set of utterances.  Two failure modes emerge:

| Mode | Origin | Consequence |
|------|--------|-------------|
| **Mis‑intention** | Distribution shift (new topics, slang) | Wrong solution → frustration |
| **Hallucination** | Sparse or noisy supervision | Fabricated facts → credibility loss |
| **Safety violation** | Unconstrained policy space | Inappropriate content or privacy leaks |

### Mitigations from first principles

1. **Curriculum‑driven fine‑tuning**  
   Gradually expose the model to harder utterances, aligning the training distribution with the target one (distribution matching).

2. **Self‑critical safety heads**  
   Add a classifier h(s) that predicts the probability of a policy violation; constrain π via Lagrangian penalties:  
   `min_π E[−R(π)+λ·max{0, E[h(s)]−ε}]`.  This enforces *information‑theoretic* bounds on risk.

3. **Hybrid human‑in‑loop fallback**  
   When uncertainty σ(s) > τ, route to a live agent.  The threshold τ is set by solving `P(π(s)=a*) ≥ 1−α`, ensuring probabilistic guarantees of correctness.

4. **Explainability layer**  
   Generate a rationale r for each response using attention‑based attribution; this turns the policy into an *interpretable* system, reducing blind trust failures.

### Non‑obvious insight

Most designs treat hallucination as a data problem, but it is fundamentally an *optimization gap*: the loss function rewards surface‑level fluency over factuality.  Introducing a **dual objective**—maximizing both language quality and factual consistency—turns the problem into a constrained Markov Decision Process where the agent must balance two reward signals, yielding inherently safer responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
