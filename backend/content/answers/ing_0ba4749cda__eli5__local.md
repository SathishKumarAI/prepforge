---
qid: ing_0ba4749cda__eli5__local
question: 'Explain: Register custom metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 230
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:53:58-05:00'
sources: []
---

Imagine your AI model is a chef and every dish it cooks (each inference) is a “recipe” you want to track.  
A **metric** is like a kitchen notebook entry: “how many seconds did the prep take?” or “what was the salt level?”  
When you “register a custom metric,” you’re adding a new column to that notebook so every dish automatically records it.

With **LangWatch** (a monitoring tool) and **Langfuse** (an evaluation framework), you write a small piece of code that tells them, *“For each inference, also log the response length and the confidence score.”*  
They then store these values in their dashboards so you can later filter or plot your model’s performance just like sorting recipes by taste.  

So registering a custom metric is simply telling LangWatch/Langfuse to capture extra data points for every AI run—just as a chef writes down new notes on each dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
