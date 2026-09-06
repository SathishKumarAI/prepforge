---
qid: ing_739294c8a7__fp__local
question: 'Q53: How do you prevent prompt injection in a system that accepts user
  input?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 390
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:10:41-05:00'
sources: []
---

**Prompt‑injection** is the adversarial manipulation of a language model’s *prompt* so that it behaves like a different program.  
At its core, the problem is *information leakage*: the user supplies text that the system concatenates with an internal instruction set and feeds to the model. The model then optimizes for “generate the best continuation” given this composite prompt. If the user’s text contains hidden control tokens or a crafted context, it can bias the optimization toward malicious behavior.

To block it you must *decouple* the user’s data from the optimisation target:

1. **Token‑level sanitisation** – strip or escape any special tokens (e.g., `<|endoftext|>`, `\n`) that could terminate or alter the prompt structure.  
2. **Contextual isolation** – embed the user text inside a *structured prompt template* that explicitly declares the role of each component (“User says: …”, “System must respond…”) and enforces a delimiter that the model cannot ignore.  
3. **Differential privacy‑style masking** – add random noise or limit the length of the user portion so that even if it contains malicious patterns, their influence on the gradient (in fine‑tuned models) is bounded.  
4. **Runtime policy enforcement** – after generation, run a lightweight classifier to detect off‑policy content and reject or re‑generate.

The non‑obvious insight: *prompt injection exploits the model’s own optimisation objective.* By constraining that objective—through token sanitisation, structural isolation, and noise masking—you turn the attack surface from “write any prompt” into “write only a bounded, well‑defined payload.” This mirrors how cryptographic protocols restrict inputs to prevent overflow or code execution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
