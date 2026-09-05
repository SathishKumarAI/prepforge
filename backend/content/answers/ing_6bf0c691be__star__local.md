---
qid: ing_6bf0c691be__star__local
question: 'Explain: Creating and Managing Prompts — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 354
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:03-05:00'
sources: []
---

**Situation** – In my last role I led the launch of an internal chatbot for our developer portal. The product team was worried that the model would give outdated or incorrect code snippets, so we needed a rigorous prompt‑engineering pipeline to guarantee quality and compliance.

**Task** – My goal was to build a repeatable system that could generate prompts, evaluate them automatically against real‑world queries, and iterate quickly while logging every version for auditability.

**Action** – I first mapped the conversation flows in LangWatch, creating JSON schema templates for each intent. Using Langfuse, I wired these templates into an evaluation pipeline: a nightly batch ran 200+ user‑generated prompts through our LLM, then compared outputs to golden answers and scored them on correctness, safety, and latency. The results fed back into LangWatch’s prompt repository, where I applied version control tags (“v1.2–security”) and automated alerts if a new prompt dropped below a 90 % accuracy threshold. I also set up a lightweight UI in our internal dashboard so non‑engineers could see performance heatmaps.

**Result** – Within three weeks the chatbot’s answer accuracy climbed from 78 % to 93 %, while latency stayed under 350 ms. The audit trail reduced compliance review time by 60 %. I learned that coupling a prompt library (LangWatch) with an evaluation engine (Langfuse) turns subjective tweaking into data‑driven, reproducible engineering—critical for scaling any AI product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
