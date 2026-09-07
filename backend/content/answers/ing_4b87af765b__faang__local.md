---
qid: ing_4b87af765b__faang__local
question: 'Explain: Production patterns (the other half of the interview)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 523
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:40:08-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking about *production patterns*—i.e., how we move an ML model from a research prototype to a robust, scalable production system (the “second half” of the interview). I’ll assume we already have a trained model that passes validation metrics and we need to expose it reliably at scale.

**2️⃣ Approach**  
1. **Model packaging & versioning** – containerize or use frameworks like TorchServe/TensorFlow Serving; tag each release with semantic versions.  
2. **Deployment strategy** – blue‑green/rolling updates to avoid downtime, coupled with canary routing to monitor latency and error rates before full rollout.  
3. **Observability** – instrument request/response latencies, throughput, CPU/GPU usage, and drift metrics (e.g., feature distribution shift).  
4. **Scalability & resiliency** – autoscaling based on queue depth or CPU/GPU load; circuit breakers for downstream services.  
5. **Governance** – audit logs, access controls, and compliance checks (GDPR, HIPAA) integrated into the CI/CD pipeline.

**3️⃣ Depth**  
- *Containerization*: Docker + Kubernetes ensures isolation and reproducibility.  
- *Serving layer*: TensorFlow Serving offers low‑latency inference with batch support; TorchServe adds model registry & metrics.  
- *CI/CD*: GitHub Actions → build image → push to Artifact Registry → Helm chart deployment.  
- *Observability stack*: Prometheus + Grafana for metrics, OpenTelemetry for tracing, ELK for logs.  
Complexity: O(1) per request latency; autoscaling adds O(log n) overhead for cluster state. Trade‑offs: heavier containers increase start‑up time vs. lighter images may miss dependencies.

**4️⃣ Edge Cases**  
- *Data drift*: sudden shift in input distribution → retraining trigger.  
- *Model poisoning*: adversarial inputs causing misclassification—need input validation and anomaly detection.  
- *Resource exhaustion*: GPU memory overload → fallback to CPU inference or request throttling.

**5️⃣ Optimize & Communicate**  
Explain how each component reduces risk: versioning isolates failures, canary routing catches anomalies early, observability gives root‑cause insights. Highlight that a well‑structured pipeline turns “research code” into an SLA‑guaranteed service—exactly what FAANG teams expect for production AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
