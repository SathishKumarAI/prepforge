---
qid: ing_cc6c587be5__eli5__local
question: 'Q: What is the biggest anti-pattern you see in LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 200
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:59:02-05:00'
sources: []
---

The biggest anti‑pattern I see with large‑language models (LLMs) is treating them like a “black‑box oracle” that always gives the right answer, and then building whole systems on top of that confidence.

Think of an LLM as a very chatty friend who knows a lot but sometimes gets facts wrong or misinterprets your tone. If you let that friend decide everything—say, medical advice, legal decisions, or safety‑critical controls—you’re ignoring the fact that the friend can hallucinate (make up details) and doesn’t understand context the way a trained professional does.

Instead, use the LLM as a helper: it drafts ideas, suggests options, or checks wording. Always add a human check or an external verification step before acting on its output. That way you keep the model’s speed and creativity while guarding against its blind spots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
