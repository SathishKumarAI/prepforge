---
qid: ing_980f867f91__star__local
question: 'Explain: Deployment — GitHub - MoonshotAI/Kimi-K2: Kimi K2 is the large
  language model series developed by Moonshot AI team \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 410
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:45-05:00'
sources: []
---

**Situation:**  
At a startup focused on conversational AI, we had just finished training Kimi‑K2, a 12B parameter LLM, but our internal demo environment kept crashing under load. The product team needed a stable, scalable deployment so they could start beta testing with real users by the end of Q3.

**Task:**  
I was responsible for taking the model from the research repo on GitHub (MoonshotAI/Kimi‑K2) and turning it into an autoscaling inference service that could handle 200 concurrent queries per second, keep latency under 350 ms, and integrate with our existing CI/CD pipeline.

**Action:**  
1. Cloned the repo, added a `Dockerfile` using NVIDIA’s CUDA base image and the Hugging Face `transformers` library for efficient tokenization.  
2. Built a lightweight FastAPI wrapper that loads the model on GPU with `torch.compile()` to reduce startup time.  
3. Configured Kubernetes manifests: a Deployment with 4 replicas, an HPA based on CPU usage, and a custom health‑check endpoint that queries the model’s `generate` method.  
4. Integrated GitHub Actions to run unit tests, linting, and automatically push Docker images to ECR whenever code merged into `main`.  
5. Set up Prometheus metrics (`request_latency_seconds`, `cpu_usage`) and Grafana dashboards for real‑time monitoring.

**Result:**  
The service launched on schedule; latency dropped from 1.2 s to 280 ms, throughput increased to 250 QPS, and the beta team reported a 30 % higher satisfaction score. I learned how to balance model performance with operational reliability, and the deployment pipeline now serves all downstream products with minimal manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
