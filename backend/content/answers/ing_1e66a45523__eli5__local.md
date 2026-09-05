---
qid: ing_1e66a45523__eli5__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 216
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:32-05:00'
sources: []
---

Imagine your AI system is a busy kitchen where many dishes (tasks) are being cooked at the same time.  
Each dish is a **span**—a named piece of work, like “image‑classification” or “text‑generation.”  
A **trace** is the whole meal: all the spans that happened during one request, connected in order.

When you want to study how well the “image‑classification” span performs, you first **fetch traces**: pull every recorded meal from your kitchen’s log. Then you **filter by span name**, like pulling out only the plates labeled “image‑classification.”  
You’re left with just those spans, so you can measure latency, errors, or resource usage for that specific task without being distracted by other dishes.

So, fetching traces is grabbing all the cooking logs; filtering by span name is sorting them to look at one particular recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
