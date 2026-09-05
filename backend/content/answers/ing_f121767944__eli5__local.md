---
qid: ing_f121767944__eli5__local
question: What is chain-of-thought prompting? When does it help, and when is it unnecessary
  or harmful?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 254
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:56:28-05:00'
sources: []
---

**Chain‑of‑thought (CoT) prompting** is a trick that asks an AI to “think out loud” before giving an answer.  
Imagine you’re solving a puzzle and you write each step on paper: *“First I look at the top row, then I compare colors.”* That written trail lets you see how you got there and spot mistakes.  

In CoT, the model produces this internal monologue (the chain) before delivering the final answer. It helps when problems need multiple reasoning steps—like math, logic puzzles, or explanations that build on earlier facts. The extra narrative can guide the model toward correct conclusions and make its output easier to audit.

But it’s not always useful. For simple yes/no questions or trivia where one fact suffices, forcing a chain just adds noise and slows processing. If the model already knows the answer instantly, a long chain can even mislead by introducing irrelevant “thoughts.”  

So: use CoT when the question is complex and benefits from step‑by‑step reasoning; skip it for quick, straightforward queries to keep answers crisp and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
