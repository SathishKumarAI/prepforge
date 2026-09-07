---
qid: ing_b1ca0ad1bd__faang__local
question: 'Explain: Explore more from Machine Learning — Machine Learning in Production
  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 477
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:17-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how one takes an ML model from research to production—covering deployment, monitoring, scaling, and governance. I’ll assume we’re talking about supervised models in a cloud‑native environment and that the audience knows basic ML concepts.

**Approach**  
1. *Model packaging* (serialization, containerization).  
2. *Serving architecture* (REST/GRPC endpoints, model servers like TensorFlow Serving or TorchServe).  
3. *Scalability* (auto‑scaling, load balancing, canary releases).  
4. *Observability* (metrics, logs, traceability of predictions).  
5. *Governance & compliance* (data drift detection, A/B testing, rollback mechanisms).

**Depth**  
- **Packaging:** Serialize weights and code (`joblib`, `ONNX`) inside a Docker image; version the image with a Git tag or OCI registry.  
- **Serving:** Deploy to Kubernetes using an Ingress controller; expose endpoints via gRPC for low‑latency inference. For batch jobs, use Spark or Flink pipelines.  
- **Scalability:** Horizontal Pod Autoscaler monitors CPU/memory or custom latency metrics; canary releases roll out 5% traffic before full deployment.  
- **Observability:** Instrument with Prometheus (latency, error rates), OpenTelemetry traces per request, and log model inputs/outputs for debugging.  
- **Governance:** Use a feature flag system to toggle models; schedule periodic drift checks against validation datasets; store predictions in a data lake for audit.  

**Edge Cases**  
- Sudden traffic spikes → autoscaler lag leads to timeouts.  
- Model drift → predictions become stale, causing revenue loss.  
- Security: model artifacts exposed if registry credentials leaked.

**Optimize & Communicate**  
Explain that the pipeline is automated via CI/CD (GitHub Actions → Helm charts) and that a “Model Registry” tracks lineage. Emphasize trade‑offs: tighter latency vs higher cost, or more observability vs larger logs footprint. Conclude with how this approach aligns with FAANG’s emphasis on reliability, scalability, and continuous delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
