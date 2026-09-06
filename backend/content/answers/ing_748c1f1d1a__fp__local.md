---
qid: ing_748c1f1d1a__fp__local
question: 'Explain: Prompt-injection defence (layered, assume the prompt fails)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 433
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:41-05:00'
sources: []
---

**Prompt‑Injection Defence (Layered, “Assume the Prompt Fails”)**

The core problem is that a language model (LLM) treats its prompt as *input* and any text it receives—including malicious user content—becomes part of the internal state that guides generation. If an attacker injects disallowed instructions (“write code to …”), the LLM may comply because its objective is to maximize likelihood of next tokens, not safety.

From a **security‑by‑design** standpoint we can view the system as a *pipeline* of transformations:

1. **Pre‑processing (input sanitisation)** – strip or escape disallowed patterns before tokenisation.  
2. **Policy enforcement (token‑level filters)** – use a deterministic, fast finite‑state machine that blocks known trigger phrases.  
3. **Model‑side constraints (re‑parameterised logits)** – modify the softmax to set the probability of forbidden outputs to zero for any prompt that triggers an “alert” flag.  
4. **Post‑generation audit** – run a lightweight classifier on the generated text; if it violates policy, truncate or refuse.

Each layer is *orthogonal* and independent; if one fails (e.g., a novel injection bypasses the regex), the next layer still blocks it. This mirrors the *defence‑in‑depth* principle in network security: redundancy ensures that no single vulnerability compromises the whole system.

**Non‑obvious insight:**  
The most subtle risk is *context leakage*. Even if the prompt itself is clean, an LLM can infer policy from prior prompts or internal weights. By explicitly *resetting* hidden states (e.g., using a fresh random seed per request) and limiting context windows, we prevent cross‑prompt contamination—a technique often overlooked in typical “input sanitisation” discussions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
