---
qid: vq_fb71f884f8__fp__local
question: Types of Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 368
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:46-05:00'
sources: []
---

**Prompt engineering is the art of shaping a language model’s objective function through input construction.**  
At its core, a model learns to minimize *cross‑entropy loss* over tokens; what we feed it directly determines which part of that loss landscape we explore.  From this perspective, prompt strategies are simply **biasing mechanisms** that steer the sampling distribution toward desired behaviors.

| Strategy | Mechanism | Why it works |
|----------|-----------|--------------|
| **Zero‑shot prompts** | Minimal context; rely on model’s prior knowledge | Forces the model to generalize from its training distribution. |
| **Few‑shot prompting** | Provide exemplars that encode task syntax | Acts as a *soft* specification, effectively fine‑tuning the internal representation without parameter updates. |
| **Chain‑of‑thought (CoT)** | Ask for intermediate reasoning steps | Encourages the model to decompose the objective into sub‑losses, improving alignment with logical structure. |
| **Self‑consistent prompting** | Run multiple CoT samples and aggregate | Mitigates stochasticity; aligns with Bayesian posterior averaging over latent reasoning paths. |
| **Instruction tuning prompts** | Explicitly state constraints or style | Shifts the loss surface toward a sub‑manifold defined by the instruction, leveraging curriculum learning principles. |

A non‑obvious insight: *exemplars in few‑shot prompting act as implicit regularizers.* They constrain the model’s latent space much like weight decay constrains weights, but without changing parameters. This explains why carefully chosen examples can dramatically improve performance even when the underlying architecture remains unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
