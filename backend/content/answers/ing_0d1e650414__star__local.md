---
qid: ing_0d1e650414__star__local
question: How much does Claude / GPT / Gemini / DeepSeek cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 383
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:50-05:00'
sources: []
---

**Situation:** While leading the AI integration for our SaaS analytics platform, we needed to decide which large language model would power the natural‑language query feature without blowing the quarterly budget.

**Task:** I had to estimate and compare the operational cost of Claude, GPT‑4o, Gemini‑Pro, and DeepSeek‑LLM for a projected 200 k token/day workload and recommend the most economical yet performant option.

**Action:** I scripted a micro‑benchmark that sent 1 000 representative prompts through each model’s API, logged response times, and calculated cost per 1 000 tokens using official pricing tables. I also factored in our on‑prem GPU cluster for DeepSeek to see if self‑hosting would be cheaper. The analysis included latency (average 350 ms for GPT‑4o vs 210 ms for Gemini), token costs ($0.03/1k for GPT‑4o, $0.02/1k for Gemini, $0.015/1k for Claude, $0.008/1k for DeepSeek on‑prem). I presented a cost‑per‑query matrix and highlighted trade‑offs in accuracy and response time.

**Result:** We chose Gemini‑Pro, which reduced monthly API spend from an estimated $12 k to $7.5 k while maintaining 95% of the precision of GPT‑4o. The project launched on schedule, and I learned that a small, data‑driven cost comparison can uncover significant savings without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
