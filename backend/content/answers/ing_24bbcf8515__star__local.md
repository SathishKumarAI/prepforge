---
qid: ing_24bbcf8515__star__local
question: 'Explain: Deduction Rules ​ — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 324
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:41-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with launching a new subscription tier for our generative‑AI platform, but the existing billing engine only supported flat rates per model call. Our customers were asking for more granular pricing based on token usage and inference time.

**Task:**  
I needed to design a system that could automatically apply deduction rules—calculating costs from multiple factors (model complexity, prompt length, output tokens) and integrating it with our API gateway so every request was billed accurately without manual intervention.

**Action:**  
First, I mapped out the rule set: base price per model, multiplier for higher‑capacity models, token‑level discount thresholds, and a cap on maximum charge per session. Using a rules engine (Drools) I encoded these as reusable decision tables. Then I implemented a lightweight microservice in Go that intercepted each API call, extracted metadata from the request headers, invoked the rules engine to compute the final price, and pushed the result to our billing queue. I also added telemetry hooks to log token counts and response latencies for audit purposes.

**Result:**  
The new tier launched on schedule; we saw a 35 % lift in upsell revenue within the first month and reduced billing disputes by 78 %. The rule engine proved flexible enough that we later added dynamic pricing based on real‑time GPU utilization, keeping our cost model competitive while maintaining transparency for users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
