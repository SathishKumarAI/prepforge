---
qid: ing_8de2353e96__eli5__local
question: 'Explain: Title: Chain-of-Thought Prompting Elicits Reasoning in Large Language
  Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 203
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:31-05:00'
sources: []
---

Think of a large language model (LLM) like a very bright student who can answer questions but sometimes jumps straight to the answer without showing how they got there. Chain‑of‑Thought (CoT) prompting is like giving that student a “thinking notebook” in which she must write each step before writing the final answer.

In this notebook, the model first writes down simple observations (“the input says X and Y”), then connects them with short deductions (“if X then Z”), and keeps chaining these mini‑reasonings until it reaches the conclusion. By forcing the model to spell out its internal steps, CoT reduces mistakes that happen when it guesses or overfits a pattern.

So, CoT prompting is simply asking the LLM to think aloud—step by step—so we can see and trust how it arrives at its final answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
