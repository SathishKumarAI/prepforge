---
qid: ing_812edf9138__fp__local
question: 'Explain: Change log — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 489
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:58-05:00'
sources: []
---

**Why the paper matters**

A *jailbreak* is a prompt that coerces an LLM into violating its safety policy.  
The fundamental problem is that a model learns a distribution over tokens conditioned on the prompt; if we give it enough freedom to explore that space, it can find a path from the user’s instruction to a disallowed answer.  In effect, the policy becomes a *partial* constraint in a high‑dimensional optimization landscape.

**The constitutional approach**

1. **Treat safety as a “constitution”** – a set of formal rules encoded as a small neural network (the Constitutional Classifier).  
2. **Self‑audit** – before generating an answer, the model first proposes it and then feeds that proposal to the classifier, which returns a binary verdict.  
3. **Reject or revise** – if the verdict is *disallowed*, the model can regenerate, or it can be penalized during training.

Mathematically, this turns the policy into a *projection operator* onto the safe subspace:  
\( \text{safe}(x) = \mathbb{I}\{\text{Classifier}(x)=\text{allow}\} \).  
During fine‑tuning we minimize a loss that heavily weights violations, effectively shrinking the feasible set of outputs to a manifold where the classifier’s gradient is zero.

**Why it must work**

Because the classifier itself is learned from human feedback on *all* possible jailbreak attempts, it captures patterns beyond any hand‑crafted rule. The self‑audit loop enforces *circular consistency*: if a model can generate something that the classifier flags, it learns to avoid the same generation in the future—an online form of *adversarial training*.

**Non‑obvious insight**

The classifier’s role is not merely to block; it also *provides a differentiable signal* that guides exploration. By training the language model to maximize reward while staying within the classifier’s “safe” region, we effectively perform constrained optimization in a space where the constraint is learned from data rather than hard‑coded. This turns the classic *projected gradient descent* problem into a *learned projection*, allowing the system to adapt its notion of safety as new jailbreak strategies emerge—something static rule lists can never achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
