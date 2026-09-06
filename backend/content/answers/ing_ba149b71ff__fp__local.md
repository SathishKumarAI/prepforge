---
qid: ing_ba149b71ff__fp__local
question: 'Explain: Title: Defeating Prompt Injections by Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 377
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:12-05:00'
sources: []
---

**Defeating Prompt Injections by Design**

Prompt injection is the act of embedding malicious or unintended instructions into user‑supplied text that a language model (LLM) interprets as part of its prompt. The fundamental problem is *information leakage*: an attacker can send a crafted message that, when concatenated with system prompts, alters the LLM’s behavior without explicit user permission.

To solve this, we treat the prompt as a **structured data channel** rather than free text. By imposing a formal grammar (e.g., JSON or XML) and a strict parsing step before tokenization, we convert arbitrary input into a *semantic representation* that only contains permitted fields. The LLM then receives a sanitized, canonical prompt derived from this structure, eliminating the possibility of hidden instructions.

Why must it work this way?  
- **Optimization**: The parser acts as a constraint‑solver ensuring that every token in the final prompt satisfies a policy graph; any violation raises an error, preventing optimization loops that could exploit loopholes.  
- **Information theory**: By reducing entropy of user input to a fixed schema, we shrink the adversarial search space from \(2^{|input|}\) to a combinatorial set defined by the schema’s parameters, making brute‑force injection infeasible.  

A non‑obvious insight is that *prompt sanitization is essentially a cryptographic commitment*: the system commits to a deterministic transformation of user data before it ever reaches the model. This guarantees that no hidden bits can influence the LLM’s output, turning prompt injection from an attack surface into a closed‑loop design choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
