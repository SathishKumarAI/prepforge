---
qid: ing_db144324f0__star__local
question: How do you debug non-deterministic bugs in LLM systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:05-05:00'
sources: []
---

**Situation** – In my last role I was leading a chatbot platform that used GPT‑4 to generate product recommendations. Users reported occasional “out‑of‑topic” responses even though the same prompt produced correct answers at other times.

**Task** – My goal was to isolate the root cause of this non‑deterministic behavior, reduce its frequency below 0.5 % and document a reproducible debugging workflow for future teams.

**Action** – I first added deterministic seeds to every inference call and logged prompt, token counts, temperature, top‑p, and the full context. Next, I instrumented the tokenizer pipeline to capture hidden states after each layer using PyTorch hooks. By correlating logs across multiple runs, I discovered that rare tokens in the prompt caused a subtle floating‑point overflow during attention score scaling. I fixed this by switching to log‑softmax with gradient checkpointing and introduced an “attention dropout” guard that triggers when variance exceeds a threshold. Finally, I built a lightweight CI job that replays recent failing prompts 100 times each day and flags any deviation.

**Result** – After the patch, out‑of‑topic incidents dropped from 3.2 % to 0.3 %, and our automated test suite now catches such regressions before release. I learned that systematic logging of internal states, combined with deterministic seeding, turns an elusive non‑deterministic bug into a measurable, reproducible issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
