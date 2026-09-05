---
qid: ing_fd237ada54__star__local
question: 'Explain: The Metrics That Actually Matter — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 334
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:47-05:00'
sources: []
---

**Situation:**  
At my last startup, we launched a conversational AI for customer support that had been struggling with high abandonment rates (45% of interactions ended without resolution). The product team wanted a clear way to measure and improve the model’s real‑world performance.

**Task:**  
I needed to build an evaluation framework that tracked the metrics most relevant to our users—response relevance, user satisfaction, and business impact—while also providing actionable insights for the ML engineers.

**Action:**  
I integrated Langwatch and Langfuse into our pipeline. With Langwatch I monitored real‑time latency, token usage, and error rates across all endpoints. For Langfuse, I set up custom evaluation runs: 1) automated unit tests on a curated test set (accuracy, F1), 2) live A/B tests feeding user logs back as labeled data, and 3) a “human‑in‑the‑loop” rubric that scored relevance and politeness. I configured dashboards that plotted these metrics against SLA targets and built alerts for sudden drops in accuracy or latency.

**Result:**  
Within three months the abandonment rate dropped to 18%, overall user satisfaction scores rose from 4.1 to 4.7 out of 5, and we reduced token consumption by 12% through smarter prompt tuning. The team now uses Langwatch/Langfuse dashboards daily to iterate on both model and infrastructure, turning raw data into tangible product improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
