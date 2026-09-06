---
qid: ing_96df153b64__fp__local
question: How do you select and order few-shot examples? What are the known pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 502
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:22-05:00'
sources: []
---

**Why ordering matters for few‑shot prompts**

In a language model the probability of the next token is  
\(P(t_{k+1}\mid t_1,\dots,t_k;\theta)\).  
When we prepend \(N\) “examples” \((q_i,a_i)\) to a query \(q^*\), we are **conditioning** the model on a *finite sample* from the task distribution.  
The model’s internal representation after seeing an example is a point in its hidden‑state space; this point is an implicit *feature extractor* that the next token prediction will use.  

If the examples are shuffled, each new example perturbs the hidden state in a different direction. The model must **disentangle** the relevant signal from noise, which it does best when the perturbations are *coherent*: similar queries first, then diverse ones to cover edge cases.  
Thus, ordering can be viewed as an online‑learning problem: each example is a gradient step that should move the hidden state toward the manifold of correct responses. Random order can cause *catastrophic interference*—the model forgets earlier patterns.

**Pitfalls to avoid**

| Pitfall | Why it hurts |
|---------|--------------|
| **Label leakage** (including answer tokens in the prompt) | The model may simply copy rather than generalize. |
| **Semantic drift** (mixing unrelated tasks) | Causes the hidden state to wander, degrading performance on the target task. |
| **Imbalanced class coverage** | Rare classes get under‑represented; the model never learns their pattern. |
| **Over‑fitting to prompt style** | The model memorizes formatting rather than underlying semantics. |
| **Prompt length exceeding context window** | Truncation discards critical examples, leading to unpredictable behavior. |

**Non‑obvious insight**

The *distance* between successive hidden states is a proxy for how much new information each example injects. By measuring this distance (e.g., cosine similarity) you can adaptively stop adding examples once the marginal gain falls below a threshold—effectively performing an online “early stopping” for few‑shot learning. This dynamic pruning often yields better generalization than simply fixing \(N\).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
