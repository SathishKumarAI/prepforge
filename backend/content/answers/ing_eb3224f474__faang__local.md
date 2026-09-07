---
qid: ing_eb3224f474__faang__local
question: 'Explain: Developing with Docker — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 528
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:48-05:00'
sources: []
---

**Clarify**  
We need to explain how to build a production‑ready ML pipeline that uses Docker, TensorFlow Serving (TFS) and the TFX stack. Key assumptions: we already have a trained TF model, want zero‑downtime deployment, and will run in a containerised microservice environment.

**Approach**  
1. **Model Export** – use `tf.saved_model.save()` to export checkpoints to a SavedModel directory (signature defs for inference).  
2. **Dockerfile** – base on the official TFS image (`tensorflow/serving`). Copy the SavedModel into `/models/<model_name>/1`. Add a custom entrypoint if needed (e.g., `--port=8500 --rest_api_port=8501`).  
3. **Compose / Orchestration** – write a `docker‑compose.yml` that exposes ports and mounts volumes for hot‑reload during dev. In production, use Kubernetes with a Deployment + Service, leveraging TFS’s built‑in REST/GRPC endpoints.  
4. **TFX Integration** – in the `Pipeline` definition, set up the `TFRSModelExporter` to write to the same path that the Docker image consumes. Use the `BeamExecutor` or `Kubeflow` executor for scalability.  

**Depth**  
- *Image size*: keep it minimal (`tensorflow/serving:2.x‑gpu` if GPU needed).  
- *Version pinning*: tag images (e.g., `tf-serving:2.12.0`).  
- *Health checks*: expose `/v1/models/<model_name>` for liveness/readiness.  
- *CI/CD*: Dockerfile in a Git repo; use GitHub Actions to build/push to GCR/ECR.  

**Edge Cases**  
- Model signature mismatch → 400 Bad Request.  
- Out‑of‑memory on GPU → container restarts; monitor with Prometheus.  
- Stale model versioning → use `--model_version_policy` or dynamic loading.

**Optimize & Communicate**  
Explain trade‑offs: single‑container vs. multi‑service (e.g., separate TFS and TFX orchestrator). Highlight observability: expose TensorBoard metrics via a sidecar, log inference latency to Cloud Logging. Summarise that Docker + TFS gives deterministic, isolated serving; TFX automates model refresh, ensuring continuous delivery with minimal manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
