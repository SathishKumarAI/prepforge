---
qid: ing_069cc4ef59__star__local
question: 'Explain: 3.2. Self-Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 381
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:10-05:00'
sources: []
---

**Situation**  
At my last role I was building a real‑time recommendation engine that had to scale from a few hundred users to tens of thousands. The microservices—feature extraction, model inference, and logging—were spun up in Kubernetes on AWS. When we hit the 5k request per second mark, service outages started creeping in because each component couldn’t reliably find its peers.

**Task**  
I needed to implement a robust Service Discovery layer so that any new instance of a microservice could automatically register itself and be discoverable by others without manual IP updates, while keeping latency low for the inference pipeline.

**Action**  
I chose Consul as the discovery backend because it integrates natively with Kubernetes via sidecar containers. Each pod runs a lightweight agent that registers its service name, port, and health checks (via HTTP liveness probes). I added DNS‑based lookup in our client libraries so that calls to `model-inference` always resolve to healthy instances. To reduce churn, I set a short TTL of 10 s and used Consul’s circuit breaker to prevent traffic from hitting unhealthy nodes. Finally, I automated the registration process through Helm charts so new deployments automatically get the sidecar without code changes.

**Result**  
After deployment, service discovery reduced mean request latency by 18 % (from 120 ms to 98 ms) and cut down manual configuration errors by 95 %. The system could now scale to 20k RPS with zero downtime. I learned that coupling health checks with dynamic DNS in a container orchestration environment is key to resilient, self‑registering ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
