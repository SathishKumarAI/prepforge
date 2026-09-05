---
qid: ing_bac3242240__eli5__local
question: 'Explain: Two-Stage Pipeline — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 204
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:33:13-05:00'
sources: []
---

Think of writing a short story for a contest.  
**First stage:** A group of writers (the *retrieval* part) quickly produces many draft sentences that might fit the prompt. They don’t worry about perfection; they just give you lots of options.  
**Second stage:** You, as the judge (the *reranking* part), read each draft and pick the best one. You look at grammar, flow, creativity—things the first stage didn’t fully consider.  

In AI, a two‑stage pipeline works the same way: a fast model pulls a set of candidate answers from a huge database; then a more powerful “reranker” scores those candidates to choose the most relevant or accurate one.  
*Retrieval* = quick gathering of possibilities.  
*Reranking* = careful evaluation and selection. This combo gives speed without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
