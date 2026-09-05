---
qid: ing_8dc331b075__eli5__local
question: 'Explain: Live coding: build the prompt for the next turn under a fixed
  token budget. The catch is our prefix cache.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 237
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:19-05:00'
sources: []
---

Imagine you’re writing a recipe card that has only one page (the fixed token budget). You already have the first few lines of the recipe in a reusable “prefix” box—like a standard introduction that everyone uses, so you don’t need to write it again each time. Now you want to add a new step (“next turn”) but must keep everything on that single page.

To do this, you look at how many words are left on the page after the prefix. Then you craft your next line just long enough to fit within those remaining spaces. If you go over, you have to trim or rewrite the step so it fits. The “prefix cache” is simply a saved block of text that you always start with; only the new part changes each time.

So, building the prompt means: 1) keep the cached prefix, 2) count its word length, 3) write the next instruction short enough to stay within the page’s limit. That way every turn stays readable and never spills off the card.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
