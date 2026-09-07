---
qid: ing_ad62a4bea3__faang__local
question: 'Explain: how we approach microservices and so the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 449
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:33-05:00'
sources: []
---

**Clarify**  
The interviewer asks how we design a machine‑learning system that is decomposed into microservices. I’d confirm: *Which ML workloads?* (batch inference vs online scoring), *What latency and scalability goals are set?*, *Do we need versioning, A/B testing, or continuous deployment?*  

**Approach**  
1. **Define service boundaries** – feature extraction, model training, inference, monitoring, and data pipelines.  
2. **Choose the right tech stack** – container orchestration (K8s), API gateways, gRPC/REST for low‑latency calls, and a dedicated model registry (MLflow, SageMaker).  
3. **Deployment strategy** – blue‑green or canary releases with traffic routing; use feature flags to enable gradual rollouts.  
4. **Observability & governance** – metrics (latency, error rates), logging, version audit trails, and data drift alerts.

**Depth**  
Each service runs in its own container image; the inference service loads a serialized model (e.g., ONNX) once per pod to amortize startup cost. We expose a gRPC endpoint that accepts a batch of feature vectors, returns predictions, and logs request metadata. Training services ingest data from Kafka streams, train nightly jobs via Spark/TF, then push new checkpoints to the registry. CI/CD pipelines use ArgoCD or Spinnaker for automated promotion.

**Edge Cases**  
*Cold starts*: pre‑warm pods or keep a pool of warm instances.  
*Model drift*: schedule periodic re‑training and trigger alerts if accuracy drops below threshold.  
*Security*: enforce mutual TLS between services, encrypt model artifacts at rest.

**Optimize & Communicate**  
We can reduce inference latency by quantizing models (INT8) or using TensorRT for GPU pods. For scaling, we auto‑scale based on request queue length. In my presentation I’d walk through a typical request flow, show the latency budget split per service, and conclude with how observability drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
