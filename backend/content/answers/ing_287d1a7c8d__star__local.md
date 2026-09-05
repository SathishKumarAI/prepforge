---
qid: ing_287d1a7c8d__star__local
question: 'Explain: With LangWatch results — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 323
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:15-05:00'
sources: []
---

**Situation:**  
During a sprint for our chatbot platform, the quality score dropped from 87 % to 72 % after we rolled out a new intent‑matching model. The QA team was skeptical because automated metrics didn’t reflect user sentiment.

**Task:**  
I needed to validate the model’s performance with real‑world feedback and pinpoint which intents were failing so we could prioritize fixes before the next release.

**Action:**  
I set up LangWatch to collect end‑to‑end logs, feeding them into Langfuse for structured evaluation. Using Langfuse’s “AI Evals” feature, I scripted a series of prompt–response tests that mirrored our most common user queries. The evals automatically scored correctness, relevance, and safety, producing a detailed report with per‑intent precision/recall curves. I then cross‑checked the automated results against a manual review of 200 flagged interactions, adjusting the eval thresholds until the metrics aligned.

**Result:**  
The combined LangWatch + Langfuse pipeline reduced evaluation time from 3 days to 4 hours and revealed that the “billing issue” intent was only 55 % accurate. After retraining on the highlighted samples, we lifted overall quality to 88 %. I learned how to blend live telemetry with structured AI evals to quickly surface hidden defects in production models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
