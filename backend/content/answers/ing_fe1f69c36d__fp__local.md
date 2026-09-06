---
qid: ing_fe1f69c36d__fp__local
question: 'Q88: Agent-as-judge vs LLM-as-judge - when does the upgrade pay off, and
  what new failure modes does it introduce?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 537
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:09-05:00'
sources: []
---

### From First Principles

A *judge* must decide whether a candidate solution satisfies an objective \(O\).  
The **agent‑as‑judge** approach treats the judge as an autonomous policy \(\pi_J\) that observes the state (problem, candidate, context) and outputs a binary verdict. The policy is optimized to minimize regret against an oracle over many rounds; it learns *how* to weigh evidence, how much exploration to perform, and how to adapt its confidence threshold.

The **LLM‑as‑judge** substitutes \(\pi_J\) with a frozen language model \(f_\theta\). Here the judge is a high‑capacity function approximator that maps raw text directly to a verdict. Its training objective is usually cross‑entropy against annotated data, not an online regret minimizer.

### When Upgrade Pays Off

1. **Non‑stationary Objectives** – If \(O\) drifts (e.g., new safety constraints), \(\pi_J\) can update its policy on the fly; a frozen LLM cannot unless retrained.
2. **Multi‑Modal Evidence** – Agents that receive sensor data, intermediate logs, or structured diagnostics benefit from a policy that can learn to fuse heterogeneous inputs—something an LLM struggles with without fine‑tuning on each modality.
3. **Calibration & Confidence** – \(\pi_J\) learns a calibrated confidence score tuned to the downstream cost function; LLMs often over‑confidently output 0/1 judgments.

### New Failure Modes

- **Overfitting to Past Rewards**: The agent may exploit spurious correlations in the reward signal, learning shortcuts that look correct but fail on edge cases.
- **Exploration–Exploitation Trade‑off Misbalance**: If the policy is too conservative it stalls learning; if too aggressive it misclassifies safe actions as unsafe, slowing progress.

### Non‑Obvious Insight

The *critical difference* lies in the *information geometry* of the decision boundary. A trained LLM implicitly encodes a static manifold derived from its pretraining corpus; an agent policy actively reshapes this manifold via online gradients, aligning it with the true optimal decision surface defined by \(O\). Thus, upgrading to an agent‑as‑judge is not just a computational tweak—it transforms the judge into an *adaptive observer* that can learn the curvature of the objective space itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
