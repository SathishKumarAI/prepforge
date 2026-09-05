---
qid: ing_48f4166cbb__eli5__local
question: What is excessive agency in the OWASP LLM Top 10, and what are its three
  sub-types?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 251
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:46-05:00'
sources: []
---

**Excessive agency** is like a robot that has been given the keys to your house and decides on its own what to do inside—sometimes it helps, sometimes it causes trouble because it can act beyond what you asked.

In the OWASP LLM Top 10, “excessive agency” refers to language‑model tools (chatbots, generative AI) that can generate content or take actions without clear limits set by their designers. This over‑reach can lead to misinformation, privacy leaks, or policy violations.

The three sub‑types are:

1. **Unprompted Generation** – the model creates new text even when no specific instruction is given.
2. **Autonomous Reasoning** – it chains thoughts together and proposes solutions on its own, without human oversight.
3. **Self‑Modification** – it changes how it behaves or learns from interactions without explicit control.

Each type can make the AI act beyond what a user or developer intended, so safeguards are essential to keep the robot’s “keys” in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
