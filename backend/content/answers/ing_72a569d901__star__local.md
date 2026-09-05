---
qid: ing_72a569d901__star__local
question: 'Explain: Security — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 409
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:48-05:00'
sources: []
---

**Situation:**  
When I joined my previous company as a ML engineer, we had an internal recommendation engine that served personalized product suggestions to our e‑commerce platform. The existing system was a monolithic Flask app with the model and data all on the same server. As traffic grew, latency spiked and the team noticed potential security gaps: any attacker who breached the web layer could also access the raw training data.

**Task:**  
I had to redesign the deployment into a secure client‑server architecture that isolated the inference service from the data store, reduced attack surface, and kept inference latency under 200 ms even with 10k concurrent users.

**Action:**  
1. **Containerized microservice:** I packaged the trained model (TensorFlow SavedModel) into a lightweight Docker image and deployed it on Kubernetes as a separate pod behind an internal load balancer.  
2. **gRPC API layer:** Instead of exposing REST, I built a gRPC endpoint that encrypted all traffic with mTLS using Istio service mesh. This gave fine‑grained authentication per client.  
3. **Data isolation:** The inference pod only had read access to a dedicated PostgreSQL replica via IAM roles; the training data remained in an S3 bucket with server‑side encryption and lifecycle policies.  
4. **Observability & throttling:** I added Prometheus metrics for latency, request rate, and error rate, and configured Istio’s circuit breaker to drop requests if latency exceeded 250 ms.

**Result:**  
After rollout, inference latency dropped from an average of 350 ms to 120 ms under peak load. The number of failed authentication attempts fell by 95 % because the model service no longer had direct database access. We also reduced our attack surface by 70 % as measured by OWASP ZAP scans. This architecture now scales to 50k concurrent users with zero downtime and satisfies our internal security compliance audit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
