---
qid: ing_d55a5020b6__eli5__local
question: 'Explain: Cost tradeoffs — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 263
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:12:49-05:00'
sources: []
---

Imagine a robot librarian who must decide which books to keep on its small desk (memory) and which to leave in the stacks (state). The more books it keeps on the desk, the faster it can answer questions because everything is right there—no need to go back to the shelves. But a full desk takes up space and slows the robot’s movements; the robot also spends energy keeping all those books organized. If the librarian leaves many books in the stacks, it saves space and speed but must spend time walking back whenever a question arises, which costs more time overall.

In AI, “memory” is what the model keeps in its internal registers while processing—quick but limited. “State” refers to information stored outside the immediate process (like a database or long‑term memory) that can be retrieved later. The tradeoff is simple: more on‑chip memory means faster answers but higher hardware cost and power use; less memory saves resources but requires extra steps to fetch data, slowing response time. Choosing the right balance depends on how fast you need answers and how much you’re willing to spend or power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
