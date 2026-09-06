---
qid: ing_b774ceb7cc__think__local
question: 'Explain: Choosing a serving stack — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 490
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:03:26-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
*What does “serving stack” mean?* – I’ll treat it as the set of software layers that take a trained AI model and expose it as an API or web service.  
*Assume the reader knows basic ML workflow (train → test → deploy) but not deployment details.*  

**2️⃣ Mental model / framework**  
Use the classic *“model → container → orchestration → monitoring”* pipeline:  
- **Model format** (ONNX, TensorFlow SavedModel, TorchScript)  
- **Runtime engine** (TensorRT, OpenVINO, Triton Inference Server, TorchServe)  
- **Containerization** (Docker, OCI images)  
- **Deployment platform** (K8s, ECS, Cloud‑native services)  
- **Observability** (metrics, tracing, A/B testing).  

**3️⃣ Step‑by‑step reasoning**  
1. *Define requirements*: latency, throughput, batch size, hardware (CPU/GPU/TPU), scaling patterns.  
2. *Pick a runtime that matches the model format & hardware* (e.g., TensorRT for NVIDIA GPUs, OpenVINO for Intel).  
3. *Wrap the runtime in a container* to guarantee reproducibility and isolation.  
4. *Orchestrate containers*: use Kubernetes for autoscaling or serverless functions for event‑driven workloads.  
5. *Add observability*: export Prometheus metrics, trace requests with OpenTelemetry.  
6. *CI/CD*: automate model version promotion from staging to production.

**4️⃣ Common traps**  
- Mixing “model” and “runtime”: deploying a TensorFlow graph in a PyTorch runtime fails silently.  
- Ignoring hardware specifics: GPU‑optimized runtimes waste resources on CPU nodes.  
- Skipping observability: hard to debug latency spikes or model drift.  

**5️⃣ Sanity‑check & communicate**  
- Ask, “If I had 10 ms latency for 1000 requests/sec, does my stack meet it?”  
- Summarize the flow: *Train → Export → Runtime Engine → Container → Orchestrator → Observability*.  
- End with a quick checklist to hand‑off to ops or data scientists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
