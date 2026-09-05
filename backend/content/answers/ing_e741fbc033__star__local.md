---
qid: ing_e741fbc033__star__local
question: 'Explain: Structural Patterns — Top 10 Kubernetes Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:07-05:00'
sources: []
---

**Situation:** In my last role I led a migration of our recommendation engine from on‑prem GPUs to a Kubernetes cluster on GKE, and the team was struggling with unpredictable latency spikes during traffic surges.

**Task:** My goal was to design a resilient, cost‑effective deployment that could scale automatically while keeping SLA below 200 ms for 99.9% of requests.

**Action:** I applied the top ten Kubernetes patterns:  
1) *Microservices* – split the model inference into separate pods.  
2) *Service Mesh (Istio)* – added traffic shaping and retries.  
3) *Horizontal Pod Autoscaler* – tuned based on CPU & custom metric “inference latency”.  
4) *StatefulSets* – for the Redis cache of feature vectors.  
5) *Rolling Updates* – to deploy new model versions with canary analysis.  
6) *Sidecar* – used Prometheus exporter per pod for fine‑grained metrics.  
7) *ConfigMaps & Secrets* – kept model hyperparameters out of code.  
8) *Persistent Volumes* – for model checkpoints stored on GCS.  
9) *Namespace Quotas* – prevented runaway resource claims.  
10) *Cluster Autoscaler* – scaled node pools according to pod demand.

I also implemented a custom metric adapter that pushed latency data from the inference service into Kubernetes, allowing HPA to react faster than CPU alone would.

**Result:** After deployment, we reduced average latency from 320 ms to 145 ms and maintained <0.5 % error rate during peak load. Cost dropped 18% thanks to more efficient scaling, and the team now follows a repeatable pattern set for all future ML services. I learned that combining these patterns with real‑time custom metrics is key to balancing performance and cost in production ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
