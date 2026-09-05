---
qid: ing_af33b7435e__star__local
question: 'Explain: All evaluators registered in one place — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 375
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:31-05:00'
sources: []
---

**Situation**  
When my team was launching a multilingual chatbot for an e‑commerce client, we discovered that each language model (GPT‑4, Claude, Gemini) had its own evaluation pipeline. This fragmented setup caused duplicated effort and inconsistent reporting across the four languages.

**Task**  
I needed to centralize all evaluator registrations into a single, reusable framework so that every new language model could be benchmarked against the same metrics—accuracy, latency, safety—and results could be visualized in one dashboard for stakeholders.

**Action**  
I built an “EvalHub” using Langfuse as the orchestration layer. For each model I defined a Langwatch evaluator script that wrapped the model’s inference API and sent raw predictions to Langfuse via its event‑ingest endpoint. I then created a YAML registry file listing every evaluator, their input schema, and target metrics. A CI pipeline parsed this registry, instantiated evaluators automatically, and pushed results to a Grafana dashboard connected to Langfuse’s database. This approach leveraged Langwatch for data collection, Langfuse for aggregation, and OpenTelemetry for tracing.

**Result**  
The unified evaluator system cut manual setup time by 70 % (from ~8 hours per model to ~2.5 hours). Stakeholders could now see side‑by‑side performance across all languages in real time, leading to a 15 % faster iteration cycle and a 12 % reduction in overall latency for the chatbot. I learned that investing in a modular registry and orchestration layer pays off when scaling multi‑model AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
