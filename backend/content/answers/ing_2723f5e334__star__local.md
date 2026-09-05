---
qid: ing_2723f5e334__star__local
question: What should you log for every LLM call in production, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 346
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:49-05:00'
sources: []
---

**Situation:**  
When I migrated our chatbot platform from a single‑model setup to a multi‑tenant large language model (LLM) service, we started seeing sporadic latency spikes and a few outlier responses that caused user complaints.

**Task:**  
I needed to design a logging strategy that would give us visibility into every LLM invocation—so we could diagnose performance issues, enforce compliance, and maintain cost control—without flooding the system or leaking sensitive data.

**Action:**  
First, I defined a minimal payload: request ID, tenant ID, model name, temperature, max tokens, timestamp, input length, and output length. For each call I also captured the round‑trip latency and the cost estimate (tokens × price per 1K). To keep privacy safe, I masked personally identifiable information in the prompt before logging. The logs were sent to a structured log store (Elastic Search) with ingestion throttling via Logstash; we used Kafka topics for high‑throughput streams and set retention to 30 days. I added alerts that trigger when latency > 1 s or cost per request exceeds a threshold.

**Result:**  
Within two weeks, our incident response time dropped from ~45 min to under 10 min for performance regressions. We reduced over‑billing by 12% through early detection of anomalous token usage. The team learned that logging too much detail (full prompts) can hit storage limits and risk privacy breaches, while too little data makes root cause analysis impossible—so a balanced, schema‑driven approach is key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
