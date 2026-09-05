---
qid: ing_c66e2b6fd4__star__local
question: 'Explain: Category 4: IT Operations — Use Cases And Case Studies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:38-05:00'
sources: []
---

**Situation**  
At a mid‑size SaaS company, our on‑prem Kubernetes cluster was hitting 70 % CPU during peak hours, causing latency spikes for over 15 % of our users. The Ops team had to manually scale nodes, but the process lagged behind demand.

**Task**  
I was tasked with building an AI‑driven autoscaling solution that could predict load and adjust resources in real time, reducing mean response time below 200 ms while keeping cost under budget.

**Action**  
I gathered historic metrics (CPU, memory, request rates) from Prometheus over six months. Using a lightweight LSTM model in Python with scikit‑learn, I trained on the last 30‑minute window to forecast the next 5‑minute load. The model was wrapped in an Azure Function that injected scaling recommendations into the Kubernetes HPA via custom metrics API. I added a feedback loop: after each scaling event, the actual latency was logged back into the training set for continuous retraining every 12 hours.

**Result**  
Within two weeks of deployment, CPU utilization dropped to 55 % on average, and user‑perceived latency fell from 350 ms to 180 ms—a 50 % improvement. Monthly infra cost decreased by 12 %. I learned that even simple time‑series models can deliver production‑grade value when coupled with robust telemetry and a feedback loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
