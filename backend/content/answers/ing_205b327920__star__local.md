---
qid: ing_205b327920__star__local
question: 'Explain: On-call playbook — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 367
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:10-05:00'
sources: []
---

**Situation:**  
During my second year at a SaaS firm, our nightly batch that distilled raw customer usage logs into feature‑usage reports was tripping over malformed telemetry. The on‑call shift had to resolve the issue within an hour or the next day’s marketing deck would be delayed.

**Task:**  
I needed to create a robust on‑call playbook for the “Customer Distillation Pipeline” that reduced mean time to recovery (MTTR) from 45 min to under 15 min and documented every edge case.

**Action:**  
1. Instrumented each microservice with Prometheus alerts for JSON schema violations, latency spikes, and missing correlation IDs.  
2. Built a Kibana dashboard that visualised pipeline health in real time and automated Slack notifications.  
3. Wrote a step‑by‑step troubleshooting guide: (a) verify log ingestion, (b) run `jq` against sample payloads, (c) rollback to the last stable schema if needed, (d) trigger a retry job via Airflow DAG.  
4. Added an “Escalation Matrix” with clear contact points and a 15‑minute response SLA.

**Result:**  
After deployment, MTTR dropped from 45 min to 10 min on average; no marketing deck was ever delayed again. The playbook became the baseline for other pipelines, cutting incident resolution time across the platform by 30 %. I learned that proactive observability paired with clear, concise documentation is the most powerful tool an engineer can hand‑off during a crisis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
