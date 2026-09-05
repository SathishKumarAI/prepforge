---
qid: ing_5194fddf6b__eli5__local
question: 'Explain: Create custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 221
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:46:26-05:00'
sources: []
---

Imagine you’re a chef who wants to taste every dish before it leaves the kitchen.  
A **custom evaluator** is that tasting station for an AI model: it runs the model on a set of test prompts, collects the responses, and then checks them against rules you define (like “the answer must mention *quantum*” or “no more than 150 words”).  

In practice, you write a short script that calls the model’s API, feeds it your prompt list, and uses simple Python functions to score each reply.  
The **Langwatch** or **Langfuse** tools give you a dashboard where those scores appear instantly—like a kitchen display showing how many dishes met the chef’s standards.  

So, building a custom evaluator is just setting up that tasting station: prompt → model → rule‑check → score, all wrapped in a tidy interface for quick feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
