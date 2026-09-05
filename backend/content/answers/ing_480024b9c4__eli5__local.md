---
qid: ing_480024b9c4__eli5__local
question: A one-line system-prompt change is in a PR. What runs before it merges,
  and what blocks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 240
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:04-05:00'
sources: []
---

Imagine your codebase is a busy kitchen. A pull request (PR) that adds a new recipe (the system‑prompt change) goes into the line of chefs who taste and approve it before it reaches the head chef (merge).  

**What runs first?**  
A *continuous‑integration* bot (the “build”) checks every ingredient: it compiles the code, runs unit tests, and then executes a *test harness* that feeds the new prompt into the AI model to see if it behaves as expected. If all these steps finish without errors, the PR is marked “green” and can move on.

**What blocks it?**  
If any test fails—say the AI starts answering in a different language or throws an exception—the bot reports the failure and stops the merge. Also, if another reviewer flags a security issue or the new prompt conflicts with existing policy rules, that review will block the PR until resolved.

So, before the change lands, automated tests taste the new prompt; any bad outcome blocks it from becoming part of the main code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
