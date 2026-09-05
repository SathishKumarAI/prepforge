---
qid: ing_61110f3f24__eli5__local
question: What is training data memorisation and extraction, and why does it matter
  for a deployed product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 210
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:11-05:00'
sources: []
---

Imagine a chef who learns recipes by watching videos of chefs cooking. If the chef only remembers the *idea*—how to combine flavors and techniques—he can create new dishes for anyone. But if he starts copying entire lines from a cookbook verbatim, he might accidentally hand out someone else’s secret recipe when asked for “the best chocolate cake.”  

In AI, **training data memorisation** is like that chef writing down the exact wording of each video. The model stores bits of its training examples instead of just learning patterns. **Extraction** happens when a user asks a question and the model pulls out one of those stored snippets to answer.  

Why it matters: If the product releases sensitive or copyrighted text, it can leak private data or violate licenses. It also hurts trust—users expect new, not copied, responses. Keeping memorisation low lets the AI generate fresh answers while protecting privacy and legal boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
