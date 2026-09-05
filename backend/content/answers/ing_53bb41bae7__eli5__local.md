---
qid: ing_53bb41bae7__eli5__local
question: 'Explain: 10.8.2. Exhaustive Search ¶ — 10.8. Beam Search \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 202
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:49:37-05:00'
sources: []
---

Imagine you’re looking for a hidden treasure in a huge maze.  
**Exhaustive search** is like opening every single door one by one, exploring every corridor until you find the chest or run out of time. It guarantees you’ll find the best spot if you can afford to check everything, but it can be slow when the maze is big.

**Beam search** takes a smarter shortcut: as you walk through the maze, you keep only the most promising few paths (say 3 or 5) at each step. You discard the rest and focus your energy on these “beam” paths. You may miss the absolute best route if it was in a discarded path, but you usually find a good one much faster.

In deep learning, exhaustive search evaluates every possible output sequence; beam search keeps only a handful of top sequences at each time step, trading perfect optimality for speed and practicality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
