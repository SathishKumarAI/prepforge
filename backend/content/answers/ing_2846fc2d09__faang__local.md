---
qid: ing_2846fc2d09__faang__local
question: 'Explain: Inference, Serving & Production LLM Systems - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 532
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:17:15-05:00'
sources: []
---

**1️⃣ Clarify**  
> *What is an inference‑to‑deployment pipeline for a large language model (LLM)?*  
I’d confirm the scope: are we talking about a single‑model microservice or a multi‑tenant platform? Do we need real‑time latency <50 ms, 99.9 % availability, or batch scoring? Which hardware (GPU vs CPU), what observability metrics, and how do we handle model drift?

**2️⃣ Approach**  
1. **Model packaging** – export to ONNX/TensorRT or TorchScript; version‑control the checkpoint.  
2. **Inference engine** – pick a runtime (e.g., NVIDIA Triton, OpenVINO) that supports batching & dynamic shaping.  
3. **Serving layer** – expose via gRPC/REST, autoscale with Kubernetes/K8s custom resources, use Envoy for traffic routing.  
4. **Observability** – Prometheus metrics (latency, QPS), log sampling, and A/B‑test results stored in a model‑catalog DB.  
5. **CI/CD & governance** – automated tests on synthetic prompts, drift detection pipelines, rollback hooks.

**3️⃣ Depth**  
- *Latency*: batch size 1 for real‑time; use GPU kernels with TensorRT to hit <30 ms.  
- *Throughput*: enable pipeline parallelism (token‑level pipelining) and model sharding if >8B parameters.  
- *Scalability*: autoscaling based on queue depth; use Spot instances for cost‑efficiency.  
- *Security*: isolate models per tenant via namespaces, enforce token auth, encrypt traffic.

**4️⃣ Edge Cases**  
- **Cold start**: pre‑warm containers or keep a “warm pool”.  
- **Model size > GPU memory**: split across multiple GPUs (pipeline parallelism).  
- **Unexpected input length**: guard against OOM with max‑token caps and graceful truncation.  
- **Version conflicts**: pin dependencies in container images; use semantic tags.

**5️⃣ Optimize & Communicate**  
I’d iterate on batch sizing, monitor tail latency, and introduce model quantization (INT8) once accuracy is validated. In interviews, I’d narrate trade‑offs—e.g., “quantizing reduces inference time by 40 % but introduces a 0.2 BLEU drop”—to show balanced decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
