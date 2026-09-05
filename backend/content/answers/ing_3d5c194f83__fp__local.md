---
qid: ing_3d5c194f83__fp__local
question: 'Explain: Explore related subjects — DeepSeek-R1 incentivizes reasoning
  in LLMs through reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 477
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:51-05:00'
sources: []
---

**Why a “reasoning‑reward” matters**

Large language models (LLMs) are trained by minimizing token‑wise prediction loss.  
That objective rewards *any* fluent continuation that matches the training data, not
necessarily one that follows an explicit chain of logic.  When we ask an LLM to solve
a multi‑step problem, its internal process is essentially a black box: it may “guess”
the answer without ever constructing an interpretable intermediate state.

Reinforcement learning (RL) turns the model into a **policy** that produces actions
(words or sub‑tokens).  If we can give the policy a scalar signal that *encodes* how well
its internal reasoning aligns with human‑crafted proof steps, the policy will be pushed to
generate those steps.  
Mathematically this is an instance of **inverse reinforcement learning**: we observe a
sequence of desirable states (the chain of logical deductions) and learn a reward function
that maximizes the likelihood of reproducing them.  The RL objective becomes

\[
J(\theta)=\mathbb{E}_{a_{1:T}\sim \pi_\theta}\!\left[\sum_t r(a_t)\right],
\]

where \(r(a_t)\) rewards “logical consistency” rather than surface token accuracy.

**Deeper principle**

The reward function is a *regularizer* that enforces **causal sufficiency**: every
generated step must be justified by prior steps.  This aligns with the principle of
information bottleneck—compressing the input into a minimal, interpretable representation
that still retains predictive power.

**Non‑obvious insight**

Because reasoning steps are *structured* (often tree‑like), the RL policy learns to
exploit **partial observability**: it can cache intermediate results in hidden states,
reducing the effective horizon.  Consequently, DeepSeek‑R1 can generate correct answers
with fewer tokens than a purely supervised model—an efficiency gain that arises *not*
from better language modeling but from learning to reason as an explicit sub‑task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
