---
qid: ing_b4b258db21__eli5__local
question: What is a Trace? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 200
total_tokens: 359
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:23:12-05:00'
sources: []
---

Think of a **trace** like the footprints left by a robot as it walks through a maze.  
When an AI model processes a question, it takes many tiny steps—each step is a calculation that turns input into output. A trace records every one of those steps: the hidden‑layer activations, the values multiplied and added, the decisions made at each neuron, even the tiny random noise that can shift the result.  

Just as a detective could follow the footprints to see how the robot got from start to finish, a trace lets researchers see exactly what happened inside the model. They can spot where it went wrong, why it chose one answer over another, or whether it relied on the right pieces of information.  
In short: a trace is the complete “footprint trail” of an AI’s internal reasoning during one inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
