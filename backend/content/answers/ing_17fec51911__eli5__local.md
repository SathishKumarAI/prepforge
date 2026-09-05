---
qid: ing_17fec51911__eli5__local
question: 'Explain: Create specific evaluators — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 239
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:13:35-05:00'
sources: []
---

Think of an evaluator as a **traffic cop** that watches how your AI driver (the model) behaves on the road (the task).  
To make sure the driver follows every rule, you give the cop a list of *specific checkpoints*—for example, “does it keep a safe distance?” or “does it change lanes smoothly?” Each checkpoint is an **evaluator** that checks one particular quality.

With tools like **Langwatch** and **Langfuse**, setting up these checkpoints is simple:  
1. Pick the rule you care about (e.g., *accuracy of weather forecasts*).  
2. Write a small test case that feeds the model a prompt and inspects its reply.  
3. Store this test as an evaluator file.  

When you run your AI, Langwatch/Langfuse automatically runs every evaluator on the output, collects the results, and tells you exactly which rules were passed or failed—just like a traffic cop giving a report card to the driver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
