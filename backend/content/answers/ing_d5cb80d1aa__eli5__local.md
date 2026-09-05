---
qid: ing_d5cb80d1aa__eli5__local
question: 'Explain: The graduation rule — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 226
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:13:25-05:00'
sources: []
---

Imagine a student who is learning to play chess. **Agent memory** is the notebook where she writes down every move she has seen and the lessons she learned from them—like “if your king’s pawn moves two squares, the opponent can jump over it.”  
**State** is what she sees on the board right now: which pieces are where, whose turn it is, and whether a capture is possible.  

The **graduation rule** says that when her notebook (memory) has enough examples of a pattern, she will *graduate* from guessing to acting confidently in that situation. In practice, the rule looks for a threshold number of times a particular board configuration appears in memory; once it passes that threshold, the agent automatically applies the learned strategy instead of trying new moves.

So, memory stores past lessons, state describes the current scene, and graduation is the moment the agent decides “I know this well enough to act.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
