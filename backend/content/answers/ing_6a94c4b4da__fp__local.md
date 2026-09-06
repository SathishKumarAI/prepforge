---
qid: ing_6a94c4b4da__fp__local
question: 'Explain: Indirect Injection Through Tool Outputs — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 342
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:32-05:00'
sources: []
---

**Indirect Injection Through Tool Outputs – Why It Matters**

When a language model (LLM) delegates work to an external “tool” (e.g., a calculator or API), the tool’s output becomes part of the model’s next input. If that output is manipulated—by a user, by a malicious system component, or even by the tool itself—the LLM can be coaxed into producing disallowed content without ever seeing a direct instruction. This *indirect injection* exploits the fact that most safety filters operate only on the user‑visible prompt, not on downstream data streams.

From an optimization perspective, the LLM is trained to minimize loss over all tokens it sees; once a tool’s output enters its context window, the model treats it as ordinary text. The policy network therefore has no reason to treat it differently unless explicitly conditioned to do so. This reveals a structural vulnerability: safety constraints are *context‑dependent* and can be bypassed by simply changing the source of the text.

A non‑obvious insight is that *tool output quality* becomes a gatekeeper for safety. If a tool outputs noisy or ambiguous results, the model may interpret them in unintended ways, opening an attack surface even when the user prompt is benign. Robust governance must therefore audit not only prompts but also all intermediate artifacts—ensuring each tool’s output adheres to strict formatting and semantic constraints before it can influence downstream generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
