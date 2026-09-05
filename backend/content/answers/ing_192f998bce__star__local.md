---
qid: ing_192f998bce__star__local
question: Walk me through how you'd take an AI feature from idea to production in
  two weeks. What does v1 actually look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 362
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:41-05:00'
sources: []
---

**Situation:**  
At my last startup, the product team wanted a quick “sentiment‑aware” reply suggestion for customer chats. We had a prototype model trained on public data, but no production pipeline and only a week left before the next sprint demo.

**Task:**  
Build a minimal viable AI service that could take an incoming chat message, score sentiment, and return a canned reply in under 200 ms, ready for deployment in our Node.js backend, all within two weeks.

**Action:**  
1. **Data & Model:** Collected ~5k labeled messages from internal logs, fine‑tuned the HuggingFace DistilBERT on them using PyTorch Lightning (≈4 h training).  
2. **Inference Pipeline:** Exported to ONNX, wrapped in a FastAPI microservice with Uvicorn, added async GPU inference via CUDA.  
3. **Deployment:** Containerized with Docker, pushed to our Kubernetes cluster; set up Horizontal Pod Autoscaler for burst traffic.  
4. **Testing & Monitoring:** Wrote unit tests (PyTest) covering edge cases, integrated Prometheus metrics for latency and error rate, and set up alerts in Grafana.  
5. **Documentation & Rollout:** Created a quick README and API spec; did a staged rollout to 10% of traffic with feature flags.

**Result:**  
Within 12 days we had a production‑ready service that processed 95% of chats with <180 ms latency, reducing average response time by 30%. The team could iterate on reply templates in real time. I learned the importance of choosing lightweight models and containerizing early to avoid last‑minute deployment headaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
