---
qid: ing_708b3b4d92__star__local
question: 'Explain: Triage and Production Context — What is an AI SRE?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 333
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:15-05:00'
sources: []
---

**Situation** – In my last role I joined a startup that had just launched an NLP chatbot into production. Within the first week we hit a 12 % spike in latency and a sudden drop in uptime, causing customer complaints.

**Task** – My job was to act as the AI Site Reliability Engineer: monitor model performance, guarantee SLAs for inference latency, and ensure safe rollback of any model updates without interrupting live traffic.

**Action** – I set up a Prometheus‑Grafana stack that scraped custom metrics from our TensorFlow Serving API—batch size, queue depth, GPU utilization—and built an alerting rule for 95th percentile latency >200 ms. I also implemented a canary deployment pipeline with KubeMQ to route 10% of traffic to the new model version while continuously comparing AUC‑ROC against the baseline. When anomalies appeared, I used a lightweight “shadow” inference mode that logged predictions without affecting real responses, allowing quick debugging.

**Result** – Within 48 hours we restored latency to <180 ms and achieved 99.7 % uptime for the next month. The canary system reduced rollback time from hours to minutes, and I documented an incident‑response playbook that cut mean time to resolution by 35 %. This experience taught me that AI SREs blend ML ops with traditional reliability practices to keep intelligent services robust at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
