---
qid: ing_cf865b5e39__eli5__local
question: Your agent's context window fills up mid-task. What are your options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 237
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:00-05:00'
sources: []
---

Imagine you’re writing a long story on a single sheet of paper that only has room for a certain number of sentences. Once the paper is full, you can’t add more text unless you do something.

**Your options**

1. **Cut out old parts** – Take away earlier sentences (or “summarize” them) so new ones fit. The story stays on one page but you lose some detail.

2. **Add a second sheet** – Keep the original content and start a fresh page for new text. You now have two pages, each holding part of the story, but you’ll need to remember which page is which.

3. **Make the paper bigger** – Use a larger notebook that can hold more sentences before it fills up. This gives you more room before you need to cut or add pages again.

In AI terms, these are called truncating (cutting old context), chunking (splitting into separate windows), and increasing window size. Each choice balances how much detail you keep versus how much new information you can add.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
