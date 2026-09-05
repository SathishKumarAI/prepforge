---
qid: ing_16cde8c1d7__star__local
question: 'Explain: Questions, Feedback, and Contributing to This Repository'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 309
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:21-05:00'
sources: []
---

**Situation**  
During my last sprint at a fintech startup we were migrating our legacy codebase to a new open‑source AI model repository on GitHub. The repository had an issue tracker, a discussion forum and a pull‑request template, but no clear guidance on how to ask questions or give feedback.

**Task**  
I was tasked with making the repo more community‑friendly: I needed to streamline how developers could raise issues, provide constructive feedback, and contribute code without breaking existing tests.

**Action**  
First, I wrote a “How to Ask Questions” markdown file that listed the exact information required (OS, Python version, reproducible steps) and linked it in the README. Then I added a GitHub Action that automatically labels new issues as “question” or “feedback” based on keywords. For feedback, I created a dedicated discussion template with prompts for pros/cons and suggested improvements. Finally, I set up a pre‑commit hook using `pre-commit` to run linting and unit tests locally before PRs could be merged.

**Result**  
Within two weeks the number of duplicate questions fell by 70 %. The average time to close a feedback issue dropped from 5 days to 1.2 days, and we saw a 35 % increase in external pull requests. I learned that clear documentation combined with automated tooling dramatically improves collaboration on open‑source AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
