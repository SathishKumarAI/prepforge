---
qid: ing_65a02ff8ef__eli5__local
question: Your agent spends over half its first turn just finding the relevant code.
  How do you fix that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 206
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:21-05:00'
sources: []
---

Imagine your AI is a detective who has to find the right clue before solving a mystery. In its first “turn,” it spends more than half of its time rummaging through piles of unrelated files, like looking for a single page in a huge book without knowing where that chapter begins. That slows everything down.

To fix this, give the detective a map: tell it exactly which section of the book to open first. In AI terms, you can:

1. **Add a quick “index”**—a small list that points straight to the relevant code snippets.  
2. **Pre‑tag the files** with keywords so the agent can skip irrelevant ones immediately.  
3. **Use a lightweight search engine** that reads only the file headers instead of loading whole files.

With a clear map, the AI spends most of its first turn on solving the problem, not hunting for the right page.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
