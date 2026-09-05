---
qid: ing_d1e26fc3d6__star__local
question: 'Q: A team prototyped on Ollama and wants to ship it as a shared API. What
  changes and why?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 369
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:26-05:00'
sources: []
---

**Situation:**  
Our data‑science squad built a rapid prototype of an image‑classification model using Ollama locally, achieving 92 % accuracy on the validation set. The product manager wanted to expose this as a shared REST API for our internal analytics platform.

**Task:**  
Migrate the prototype from a single‑node Ollama environment to a scalable, production‑grade API service that could handle concurrent requests, enforce authentication, and provide observability without compromising latency (<200 ms per inference).

**Action:**  
1. **Containerize** the Ollama model with Docker, adding an NGINX reverse proxy for HTTPS termination.  
2. Replace the local `ollama serve` command with a lightweight FastAPI wrapper that loads the model once at startup and streams results via WebSockets for real‑time analytics.  
3. Implement **rate limiting** (using Redis) and OAuth2 JWT validation to restrict access to authorized users only.  
4. Add **Prometheus metrics** (request count, latency distribution) and Loki logs; set up Grafana dashboards for monitoring.  
5. Deploy the stack on Kubernetes with a Horizontal Pod Autoscaler that scales pods based on CPU usage (~70 % threshold).  
6. Run a load test (k6) to confirm 99th‑percentile latency stays below 200 ms under 500 RPS, adjusting pod resources accordingly.

**Result:**  
The API handled 1,200 concurrent users with <180 ms median latency and 0.5 % error rate. Deployment cost remained under $50/month on a managed cluster. I learned how to translate a proof‑of‑concept into a robust, observable microservice while balancing performance and operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
