---
qid: ing_43dfcaa55a__eli5__local
question: 'Q75: How do SWE-bench Verified and LiveCodeBench differ, and which matters
  more for evaluating a coding agent?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 240
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:24:21-05:00'
sources: []
---

Think of the two benchmarks like test‑driving a car in different weather conditions.

**SWE‑bench Verified** is a “rainy day” test. It gives a coding agent a set of real GitHub pull‑request problems and then checks whether the code it writes actually compiles, passes all unit tests, and follows style guidelines. The focus is on *correctness*—does the agent produce working, bug‑free code that would be accepted in a real project?

**LiveCodeBench** is a “sunny day” test. It asks agents to write new programs from scratch for fresh tasks, then runs those programs to see if they accomplish the goal. The emphasis is on *innovation* and problem‑solving—can the agent design a solution that works in an unseen scenario?

For judging how useful a coding agent will be in practice, SWE‑bench Verified usually matters more because real developers care first about code that compiles and passes tests before it gets merged. LiveCodeBench shows promise but is less demanding on production‑ready quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
