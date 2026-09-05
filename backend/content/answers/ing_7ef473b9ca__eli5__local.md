---
qid: ing_7ef473b9ca__eli5__local
question: A vendor advertises 1M context with 100% needle-in-a-haystack. What has
  that actually proven, and how would you evaluate long context properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 328
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:58:04-05:00'
sources: []
---

Think of a model’s *context window* as the length of a bookshelf it can see at once. Saying “1 M tokens” is like claiming the bookshelf holds a million books. The vendor’s claim that you can find any single book (“needle‑in‑a‑haystack”) with 100 % success only tells you two things: (1) the model can keep track of up to a million words, and (2) it has enough memory to remember where a particular token is if you give it enough clues. It does **not** prove that the model actually *understands* long‑range relationships or that it will reliably find a hidden fact without help.

To evaluate “long context” properly, treat the bookshelf as a test of both size and organization:

1. **Size test:** Give the model a continuous passage of 1 M tokens (e.g., a concatenated book) and ask it to recall the first word after the last token. If it gets it right, the shelf can hold that length.

2. **Organization test:** Provide a long text with a hidden fact somewhere deep in the middle and give only minimal cues (“What was the name of the character who…?”). Success shows the model’s ability to navigate long distances, not just store them.

Only by combining these two kinds of tests can you be confident that a 1 M‑token window is useful, not merely a marketing headline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
