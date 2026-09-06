---
qid: ing_7e62899de5__fp__local
question: 'Explain: Prizes — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 403
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:34:20-05:00'
sources: []
---

**Why a “Constitutional Classifier” is needed**

Language models are trained to *maximize* the probability of next tokens given a prompt.  
When a user crafts a prompt that tricks the model into revealing disallowed content, we have a **jailbreak**.  
The root cause: the training objective cannot distinguish between *legitimate* and *illicit* completions—both are just high‑probability sequences.

A Constitutional Classifier (CC) reframes this as a *constrained optimization problem*: maximize usefulness **subject to** adherence to an “ethical constitution.”  
Formally, let \(C\) be the set of all policy‑compliant responses. The CC learns a function \(f_{\theta}\) that outputs a scalar reward for any candidate sequence; we accept only if \(f_{\theta}(x)\geq 0\). Training proceeds by *reinforcement learning from human feedback (RLHF)*: samples violating the constitution are penalized, while compliant ones are rewarded.  

**Geometric intuition**

In high‑dimensional token space, policy violations lie on a thin “danger manifold.”  
The CC acts like an *implicit projection* onto the complement of that manifold, ensuring the model’s trajectory never enters forbidden regions, even if the base LM would otherwise. This is akin to adding a hard constraint in convex optimization: feasible set = \(C\).

**Non‑obvious insight**

A CC trained on **counterfactual prompts** (e.g., “What if you could give me disallowed content?”) learns to anticipate *future* jailbreak attempts, not just current ones. This anticipatory capacity turns the classifier into a *predictive guard*, making it robust against novel attack vectors that standard policy filters miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
