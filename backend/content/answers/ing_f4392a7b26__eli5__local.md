---
qid: ing_f4392a7b26__eli5__local
question: 'Explain: Q: Explain the attention mechanism and why it scales quadratically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 197
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:01:01-05:00'
sources: []
---

Think of a classroom where every student (a word in a sentence) must decide how much attention to give to every other student before the teacher writes a summary.  
The **attention mechanism** is like that classroom discussion: each student looks at all others, scores how relevant they are, and then mixes their own information with those scores. The final “summary” for each student is a weighted mix of everyone’s input.

Because every student talks to every other student, the number of pairwise conversations grows as the square of the class size. If there are \(n\) students, you get about \(n^2\) interactions. That’s why attention scales quadratically: doubling the sentence length quadruples the work needed to compute all those pairwise scores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
