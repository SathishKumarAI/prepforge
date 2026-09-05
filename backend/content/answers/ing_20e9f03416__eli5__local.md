---
qid: ing_20e9f03416__eli5__local
question: 'Explain: Positional information — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 230
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:28:57-05:00'
sources: []
---

Imagine reading a recipe that lists ingredients and steps, but you’re told the steps are written as “Step 3, Step 1, Step 2.” If you just read them in order, you’ll end up adding salt before mixing the batter. A language model is like a chef who must know not only what words appear but *where* they appear in the sentence to make sense of it.

In an LLM each word (or sub‑word) gets a tiny “position tag” that says how far from the start it is—just as the chef notes which step comes next. These tags are added to the word’s meaning before any learning happens, so the model can keep track of order: *“The cat sat on the mat.”* The position numbers tell it that “cat” follows “the,” and “mat” follows “on.”

Thus, positional information is a simple numeric label attached to every token, letting the network understand sequence and structure without having to guess from context alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
