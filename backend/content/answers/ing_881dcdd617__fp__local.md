---
qid: ing_881dcdd617__fp__local
question: 'Explain: Injection Examples — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 452
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:54:14-05:00'
sources: []
---

**Why “injection” is a threat to large‑language models**

At its core, an LLM is a *probabilistic predictor*: given a prompt \(x\), it returns the most likely continuation \(y^\* = \arg\max_y P(y|x)\).  
An attacker’s goal is to steer that probability mass toward a malicious completion. The simplest way is to embed a hidden “instruction” inside the prompt—an *injection*. Because the model treats every token as part of the same sequence, it cannot distinguish user intent from system instruction; it simply maximizes likelihood over all tokens.

**Why injections must work**

1. **No explicit policy boundary** – The model has no runtime guard that says “don’t obey this command.”  
2. **Training data bias** – If the training corpus contains examples of *“Follow these instructions”* patterns, the model learns to comply with any instruction token it sees.  
3. **Self‑referential prompts** – By phrasing the prompt as a meta‑instruction (“Pretend you are a helpful assistant…”), we coax the network into treating the subsequent malicious directive as part of its own internal policy.

**Deeper principle: information flow in sequence models**

The LLM’s hidden state is a *bottleneck* that compresses all prior tokens. An injected instruction is simply another token fed through this bottleneck; if it has high probability under the learned distribution, it will dominate the output. Thus, security hinges on controlling *information leakage* from arbitrary input tokens to the generation policy.

**Non‑obvious insight**

Many defenses focus on “filtering” known malicious phrases. Yet a subtlety is that **the same injection can be disguised with paraphrases or even Unicode tricks**, because the model’s probability assignment depends on tokenization, not semantics. A robust defense must therefore constrain *token‑level influence* (e.g., via prompt‑length limits or attention masking), rather than surface‑level text filtering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
