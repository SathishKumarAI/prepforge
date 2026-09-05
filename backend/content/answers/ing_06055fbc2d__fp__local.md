---
qid: ing_06055fbc2d__fp__local
question: 'Explain: How it works — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 395
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:18:17-05:00'
sources: []
---

**Constitutional classifiers** are a self‑supervised safety layer for large language models (LLMs) that turns *any* prompt into an “internal policy” the model can check against before generating text.  

### From the problem to the solution  
An LLM is trained on vast corpora; it learns to predict next tokens, not to obey a user’s moral constraints. A jailbreak—an adversarial prompt that coerces disallowed content—exploits this by steering the model’s probability distribution toward forbidden outputs. The fundamental question is: *how can we make the model refuse or edit such outputs without hand‑labeling every possible jailbreak?*  

### Why a “constitution” works  
1. **Self‑reference** – The model treats the constitution as a set of rules it must obey, turning policy enforcement into a natural language inference task.  
2. **Iterative refinement** – It first produces an answer, then *rewrites* that answer to satisfy the constitution, repeating until convergence. This mirrors projected gradient descent: each rewrite projects the raw output onto the feasible set defined by the rules.  
3. **Zero‑shot generalization** – Because the constitution is expressed in plain language, the model can apply it to novel jailbreaks it has never seen, akin to how a learned loss function guides optimization over unseen data.

### Non‑obvious insight  
The key advantage is that the constitution need not be exhaustive; *any* violation triggers a rewrite. Thus, even if an attacker invents a new prompt that skews token probabilities, as long as the final text can be detected as violating any rule, the model will self‑correct. This turns safety from a static filter into a dynamic constraint‑optimization problem, dramatically reducing the surface for universal jailbreaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
