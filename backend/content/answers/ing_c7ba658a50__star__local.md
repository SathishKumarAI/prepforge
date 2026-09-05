---
qid: ing_c7ba658a50__star__local
question: 'Explain: Backend and Model Access — ''The Open Source AI Stack'''
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 312
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:54-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had to launch a real‑time fraud detection service by the end of Q2. Our data scientists had built a powerful XGBoost model in Python, but the production team only used Node.js and Docker for their services. We needed an easy way to expose the model without rewriting everything.

**Task**  
Create a lightweight, scalable backend that would accept HTTP requests, run the model inference, and return predictions with sub‑second latency, all while keeping costs under $1k/month.

**Action**  
I wrapped the model in a FastAPI microservice, serialized it with ONNX for faster CPU usage, and containerized it with Docker. I set up an internal gRPC gateway so the Node.js app could call the service over HTTP/2, reducing round‑trip time by 30 %. Using Kubernetes’ HPA, I auto‑scaled based on CPU load, ensuring we never exceeded our budget. I also added Prometheus metrics and Grafana dashboards to monitor inference latency and error rates in real time.

**Result**  
The deployment hit the deadline with an average latency of 180 ms per request, a 25 % drop in false positives, and stayed within the $900/month budget. I learned how to bridge disparate tech stacks using open‑source tools and that proper observability is critical for ML production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
