---
qid: ing_3817e6ccd5__star__local
question: 'Explain: Cold starts and scale-to-zero — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 371
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:24-05:00'
sources: []
---

**Situation** – At my last role I was tasked with deploying a new LLM‑gateway that would serve user queries from our mobile app. The traffic pattern was highly bursty: peak load during weekday evenings, but almost zero usage overnight.  

**Task** – I had to design the gateway so it could spin up instantly when a request came in (eliminate cold starts) while also shutting down idle workers to keep costs under 10 % of our baseline budget (scale‑to‑zero).  

**Action** – First, I containerized the model with **ONNX Runtime** and used **GPU‑aware autoscaling** on Kubernetes. I set a minimal pool of pre‑warm pods (3) that kept the model in memory; the rest were spun up via KEDA’s event‑driven scaler when CPU > 70 %. To handle cold starts, I added a lightweight “warm‑up” endpoint that loaded the model into GPU memory during pod start and cached it in **NVIDIA vGPU**. For scale‑to‑zero, I configured an HPA that terminated idle pods after 5 minutes of inactivity, and integrated Prometheus alerts to verify no requests were dropped during shutdown.  

**Result** – Cold‑start latency dropped from ~2.3 s to <0.8 s for 95 % of requests. The platform reduced infrastructure spend by 28 %, keeping us below the 10 % budget target, and I learned that combining pre‑warm pools with event‑driven scaling is key to balancing performance and cost in LLM serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
