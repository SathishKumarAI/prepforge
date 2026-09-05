---
qid: ing_965f955e47__star__local
question: 'Explain: LLM-as-judge, properly — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 370
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:31-05:00'
sources: []
---

**Situation**  
In a fintech startup, we launched an automated fraud detection pipeline that used an LLM to act as a “judge” for suspicious transactions. Within the first month, our compliance team flagged dozens of false positives, causing customer churn and regulatory scrutiny.

**Task**  
I was tasked with building a robust evaluation framework and observability stack so the LLM’s decisions could be audited, tuned, and trusted by both engineers and auditors.

**Action**  
First, I defined a multi‑metric evaluation suite: precision‑at‑k, ROC‑AUC, latency per request, and bias scores across demographic slices. We instrumented the inference endpoint with OpenTelemetry to capture prompt embeddings, token usage, and model version metadata. Using Grafana dashboards, we visualized real‑time confidence distributions and flagged anomalies when a transaction’s score drifted beyond ±2σ from its historical mean. For observability, I added a “just‑in‑case” audit trail that stored the raw input, LLM output, and post‑processing rule outcome in an immutable ledger (AWS S3 + DynamoDB). Finally, we set up automated nightly retraining on a curated dataset of human‑reviewed cases to keep the model aligned with evolving fraud patterns.

**Result**  
After implementation, false‑positive rate dropped from 12% to 4%, improving customer satisfaction scores by 18%. The audit trail enabled us to pass an external compliance audit with zero findings. I learned that treating an LLM as a judge requires not only rigorous metrics but also end‑to‑end observability so that its decisions can be traced, validated, and corrected in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
