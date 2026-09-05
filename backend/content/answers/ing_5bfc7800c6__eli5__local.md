---
qid: ing_5bfc7800c6__eli5__local
question: What are the known biases of LLM judges, and how do you mitigate each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 275
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:59-05:00'
sources: []
---

Think of a courtroom where a judge reads only one side’s testimony—an “LLM judge.”  
Because the judge learns from internet text, it can inherit three common slips:

| Bias | What it looks like | Why it happens | How to fix it |
|------|--------------------|----------------|---------------|
| **Popularity bias** | The judge favors arguments that appear often online. | It sees many similar sentences, so it treats them as stronger. | Show the judge a balanced set of sources and ask it to weigh each source’s credibility. |
| **Demographic bias** | The judge gives more weight to viewpoints from majority groups. | Training data over‑represents certain cultures or genders. | Include deliberately under‑represented voices in its training data, then check outputs for equal representation. |
| **Confirmation bias** | The judge repeats patterns it already believes. | It “locks” on a phrase that fits the question and ignores contradictory evidence. | Feed it counterexamples and ask it to list alternative explanations before deciding. |

By feeding diverse, vetted examples and actively asking the model to consider opposites, we can keep its judgments fairer—just like a good judge reviews all sides of a case.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
