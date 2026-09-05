---
qid: ing_15d9225bee__eli5__local
question: 'Explain: 2️⃣ Log your first LLM call — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 361
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:06-05:00'
sources: []
---

Imagine you’re a chef who just made the first batch of a new recipe in a kitchen that’s full of smart gadgets. The “first LLM call” is like taking that first spoonful of your sauce and sending it through a series of sensors so every detail—taste, texture, aroma—is recorded.

In the world of AI, *langfuse* is the kitchen’s control panel. When you launch an LLM (large language model) request for the first time, langfuse logs that call: it notes who asked (the user), what prompt was sent, how long the answer took, and any errors that popped up. Think of it as a notebook that keeps track of every ingredient and step.

Why is this useful? Just like a chef reviews a recipe log to tweak flavor or speed, developers review these logs to:

- **Evaluate** whether the model’s answers are accurate (LLM evals).  
- **Observe** performance in real time (observability) and spot bottlenecks.  
- **Measure** key metrics—latency, cost, success rate.  
- **Manage prompts** by storing them for reuse or testing variations.  
- **Playground**: experiment with new prompts directly from the log view.  

Langfuse talks to other kitchen tools—OpenTelemetry for tracing, LangChain for building chains of calls, OpenAI’s SDK or LiteLLM for the actual model execution—and stores everything in a tidy dashboard.

So, logging your first LLM call is like taking that initial spoonful into a smart notebook: it gives you data you can use to perfect your AI “recipe” and keep your kitchen running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
