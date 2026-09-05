---
qid: ing_b295e50353__star__local
question: 'Explain: Week 3: LLM Judge — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 300
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:54-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a chatbot that needed to comply with regulatory standards. The quality team flagged that our existing LLM responses were inconsistent, especially around privacy statements.  

**Task** – I was tasked with building an automated evaluation framework that could judge each answer for compliance and style, produce actionable metrics, and surface problematic outputs in real time.

**Action** – I integrated LangWatch to collect usage telemetry from the production bot, then wired LangFuse’s “Judge” feature to run every response through a custom prompt‑based LLM evaluator. The evaluator scored on a 0–5 compliance scale and flagged violations. I wrapped this into an Airflow DAG that refreshed every hour, logged results to InfluxDB, and pushed alerts via Slack when scores dropped below 4.5. To reduce cost, I used a tiered prompt strategy: only high‑risk categories triggered the expensive GPT‑4 inference.

**Result** – Within two weeks, compliance incidents fell from 12 per day to 3, saving us $7k in potential fines. The dashboard gave us a 15% faster turnaround on bug triage, and I learned how to balance model fidelity with operational cost by smart prompt gating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
