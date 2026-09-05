---
qid: ing_196b650a82__fp__local
question: How many examples? — Few Shot And Icl
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 408
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:21-05:00'
sources: []
---

### Why “few” shots work for modern LLMs

At its core, a language model is a **probability density** \(P_\theta(x)\) over token sequences.  
When you give it a prompt that contains a few labeled examples \(\{(x_i,y_i)\}_{i=1}^k\), the model implicitly performs a **Bayesian update** on its internal distribution:

\[
P_\theta(y|x,\,\text{prompt}) = \frac{\sum_{z}\!P_\theta(x,z)P_\theta(y|z)}{Z}
\]

where \(z\) denotes latent “task parameters” that the model has memorized during pre‑training.  
Because the transformer’s attention mechanism can attend to any part of the prompt, it can **condition** on these few examples as if they were observations from a generative process with unknown parameters. The key is that the model’s weights encode a *prior* over all conceivable tasks; the few shots provide just enough evidence to shift this prior toward the desired posterior.

#### Non‑obvious insight
The number of required examples **does not scale** linearly with task complexity. For highly regular, low‑entropy tasks (e.g., arithmetic), one or two examples suffice because the model’s internal prior already captures the underlying rule. Conversely, for high‑entropy, multi‑modal tasks (e.g., sentiment classification across domains), many more shots are needed to disambiguate which latent task is being instantiated. Thus, “few” is relative to *task entropy*, not dataset size.

In short, few‑shot in‑context learning works because large models have learned a rich prior over tasks; the prompt supplies just enough evidence to steer inference toward the correct posterior without updating weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
