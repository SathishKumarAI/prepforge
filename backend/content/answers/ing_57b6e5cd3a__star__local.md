---
qid: ing_57b6e5cd3a__star__local
question: 'Explain: Resource state monitoring and alerting — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 363
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:04-05:00'
sources: []
---

**Situation:**  
In my last role I was responsible for the ML model serving layer of a real‑time recommendation system that handled ~5 M requests per day. The models were hosted on Kubernetes, but we kept seeing sudden latency spikes and occasional 503 errors during traffic surges.

**Task:**  
I needed to build an automated monitoring and alerting pipeline that could detect when the underlying resources (CPU, GPU, memory) were entering a degraded state and trigger corrective actions before users noticed any impact.

**Action:**  
I implemented an event‑driven architecture using Prometheus for metrics collection, Alertmanager for routing alerts, and Kafka as the event bus. Custom exporters scraped pod metrics and pushed them to Prometheus every 5 s. When thresholds (e.g., CPU > 80% for > 30 s) were breached, a JSON alert was published to a “resource‑state” topic. A downstream microservice consumed these events, applied a debounce logic, and triggered horizontal pod autoscaling via the Kubernetes API. I also integrated Grafana dashboards for real‑time visibility and set up an automated rollback script that restored previous model versions if latency exceeded 200 ms.

**Result:**  
After deployment, we reduced production incidents by 68% and cut average recovery time from 12 min to under 2 min. The system now self‑heals during traffic spikes, keeping the SLA of < 250 ms latency for 99.9% of requests. I learned that coupling lightweight metrics with an event bus gives you the flexibility to orchestrate complex remediation workflows without hard‑coding logic into each service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
