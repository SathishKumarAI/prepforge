---
qid: ing_4c408364e2__eli5__local
question: 'Explain: Add custom spans — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 236
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:37:51-05:00'
sources: []
---

Imagine your AI system is a chef cooking a complex dish. Each step—chopping, sautéing, simmering—is like a “span,” a named block of work that you can track. **Adding custom spans** lets the chef (the AI) label any extra steps it wants to monitor, such as “check ingredient freshness” or “adjust seasoning.”  

With **Langwatch**, you tell the system: *“When I start ‘freshness check’, open a span named ‘FreshCheck’ and close it when done.”* The tool records how long that span ran, any errors, and even the data passed in.  

**Langfuse** does the same but stores those spans in a tidy dashboard so you can see each span’s duration, status, and trace back to the original request.  

So adding custom spans is like giving your AI chef extra labeled timers—each one records its own time and outcome, making debugging and performance tuning as clear as watching a cooking show.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
