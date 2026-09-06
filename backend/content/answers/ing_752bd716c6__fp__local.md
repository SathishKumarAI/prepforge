---
qid: ing_752bd716c6__fp__local
question: 'Explain: Skills and Plugins Are an Injection Surface With a Detection Ceiling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 481
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:14:22-05:00'
sources: []
---

**Injection surface via skills & plugins**

When an LLM‑based assistant is extended with *skills* (code snippets, API wrappers) or *plugins* (third‑party services), the user’s prompt no longer travels through a single, tightly‑controlled model. Instead it becomes a **chain of calls**:

1. The assistant parses the user intent and selects a skill.
2. It serialises arguments, invokes external code or an HTTP endpoint.
3. The result is fed back into the LLM for final output.

At each hop a new *execution context* is created. If any component—be it the skill’s own logic, its dependency chain, or the remote service—maliciously returns crafted text, that text can be **re‑entered** into the model as if it were part of the original prompt. This is precisely an *injection surface*: a place where adversarial input can slip in and alter downstream reasoning.

Why does this matter? Because the LLM’s safety mitigations (e.g., guardrails, content filters) are only applied to the **top‑level prompt**. Once data re‑enters the model via a skill or plugin, those safeguards may not be reapplied or may be bypassed by subtle token manipulation.

**Detection ceiling**

The *ceiling* is the theoretical limit of how well we can detect such attacks. Even with perfect monitoring of every skill output, an attacker could embed malicious payloads in benign‑looking JSON, binary blobs, or via timing side channels that the model interprets as normal text. Since the LLM’s internal state is opaque and context‑dependent, any detection must either:

- **Instrument** every external call (costly, fragile), or
- **Trust** that downstream components are sanitized—an assumption that can be broken.

Thus, while we can raise a bar by enforcing strict schema validation, type‑checking, and sandboxing, there will always remain an *upper bound* on detection capability. The deeper insight: the attack surface is not the LLM itself but the **data‑flow graph** created by skills/plugins—each edge introduces a new, independent vulnerability that can be exploited without touching the core model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
