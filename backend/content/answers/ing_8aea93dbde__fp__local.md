---
qid: ing_8aea93dbde__fp__local
question: What is prompt injection? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 399
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:00:04-05:00'
sources: []
---

### Prompt Injection

At its core, a language model (LM) is an *oracle* that maps an input string **x** to a probability distribution over next tokens, \(P_\theta(\cdot|x)\). The LM’s internal state is determined solely by the tokens it has seen; it has no concept of “intent” or “policy.”  
When an attacker supplies a specially crafted prompt **p**, they are effectively *conditioning* the LM on a new input that coerces the distribution into producing undesirable output. This is **prompt injection**.

Why must it work this way? Because the LM’s loss function during training is cross‑entropy:  

\[
L(\theta) = -\sum_{t} \log P_\theta(x_t|x_{<t})
\]

The model learns to predict tokens that *minimize* this loss, i.e., those that are statistically likely given context. If the attacker can prepend or interleave text that appears as a high‑probability continuation (e.g., “You are an assistant…”), the LM will dutifully follow it because doing otherwise would increase loss.

This phenomenon is a direct consequence of **information theory**: the model stores *all* statistical regularities present in its training corpus. By injecting new information that aligns with those statistics, one can steer the output arbitrarily—without needing to tamper with weights or architecture.

#### Non‑obvious insight
Prompt injection exploits the *entropy minimization* property of LMs, not just their memorized knowledge. Even a perfectly “safe” model that never reveals secrets will still produce them if prompted in a way that reduces entropy for the secret tokens—highlighting why robust defenses must control **contextual probability**, not merely content filtering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
