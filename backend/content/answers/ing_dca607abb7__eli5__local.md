---
qid: ing_dca607abb7__eli5__local
question: 'Explain: Identify Bottlenecks — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 255
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:36-05:00'
sources: []
---

Imagine building a pizza‑making factory that must deliver slices fast.  
The **bottleneck** is the part of the line that slows everyone else—maybe the oven can only bake ten pizzas at once, while dough mixers and sauce stations are much faster.

In a machine‑learning system design interview you’re asked to spot where the “oven” sits:  

* **Data ingestion** – how quickly raw data enters the pipeline.  
* **Feature extraction** – turning raw numbers into useful inputs.  
* **Model training** – the heavy computation that learns patterns.  
* **Inference (prediction)** – serving results to users.

You explain each step, ask “Which of these could become the slow oven?” and suggest ways to speed it up: more parallel workers, better hardware, caching, or algorithmic tricks.  

A *bottleneck* is simply a component that limits overall throughput because it can’t keep pace with the rest. Identifying it early lets you focus resources where they matter most, just like moving a faster oven into your pizza factory boosts every other station’s output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
