---
qid: ing_2d6553869a__eli5__local
question: 'Explain: Lookahead Decoding — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 211
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:47:30-05:00'
sources: []
---

Imagine you’re reading a mystery novel and can peek at the next page before finishing the current one. You decide whether to keep following the story or pause for a moment, because that glimpse tells you if a twist is coming. In language models, **lookahead decoding** does exactly this: it *speculatively* generates a few future words (the “next pages”) ahead of the word it’s actually writing.

The model first drafts the next word, then simulates several more words after it. If those speculative words look good—no grammatical errors, no contradictions—it keeps the draft. If they look shaky, it rewrites the current word or backtracks and tries a different path. This “preview” lets the AI choose smoother, more coherent sentences without having to commit to a single word until it’s confident, just like you’d only continue the story when the next page promises a satisfying turn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
