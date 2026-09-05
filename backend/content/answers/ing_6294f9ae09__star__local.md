---
qid: ing_6294f9ae09__star__local
question: 'Explain: Scaling & ops — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 373
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:12-05:00'
sources: []
---

**Situation** – In my last role I was leading the rollout of a new document‑intelligence platform for a legal tech client that had to process 200k PDFs per month. The existing pipeline could only handle 5k files before hitting memory limits and the latency dropped from 2 s to over 30 s during peak hours.

**Task** – I needed to redesign the pipeline so it would scale horizontally, reduce cost by 40 %, and keep average inference time under 3 seconds per document while supporting continuous integration of new OCR models.

**Action** – I split the stack into three micro‑services: a Celery worker pool for preprocessing (Tesseract + LangChain embeddings), a TensorFlow Serving cluster behind an NGINX load balancer for model inference, and a Kafka queue to decouple ingestion. Autoscaling on Kubernetes was configured with HPA based on CPU usage and message lag. I introduced Prometheus/Grafana dashboards for real‑time metrics and set up a nightly job that retrains the entity‑recognition model using feedback from users. We also switched from on‑prem GPUs to spot instances on GCP, applying taint/ tolerations to keep cost low.

**Result** – The pipeline now handles 250k files per month with an average latency of 2.4 s and a 42 % reduction in cloud spend. User satisfaction scores rose from 78 % to 92 %. I learned that coupling observability with autoscaling is key to sustaining high throughput while keeping budgets predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
