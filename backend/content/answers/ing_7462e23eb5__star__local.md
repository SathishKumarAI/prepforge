---
qid: ing_7462e23eb5__star__local
question: 'Explain: Roles: the prompt is an API surface — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 316
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:03-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were building a chatbot that answered complex tax‑filing questions. Our internal metrics showed a 35 % drop in user satisfaction because the bot often misinterpreted nuanced queries.

**Task**  
I had to redesign how we interacted with the language model so that every prompt became a clear API surface: a well‑defined request format plus contextual data, ensuring consistent and accurate responses.

**Action**  
First, I mapped out the core “API” of our prompts—each one had a method name (e.g., `get_tax_bracket`), required parameters (`income`, `filing_status`), and optional context fields (`state`, `deductions`). I then created a prompt template library in Python using Jinja2, which automatically injected variables and preserved the structure. To keep the context manageable, I stored user state in Redis and passed only the most recent five turns as additional context tokens. Finally, I implemented unit tests that validated the prompt JSON against our schema and ran them nightly against a sandbox model to catch regressions.

**Result**  
The new prompt API reduced response errors by 42 % and improved user satisfaction scores from 68 % to 92 %. I learned that treating prompts like code APIs—defining clear inputs, outputs, and context boundaries—translates complex AI behavior into predictable, maintainable interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
