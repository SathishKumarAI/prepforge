---
qid: ing_b774ceb7cc__faang__local
question: 'Explain: Choosing a serving stack — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 540
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:27-05:00'
sources: []
---

**Clarify**  
You’re asked how to pick a *serving stack* for AI inference and production workloads. Clarify the scope: Is it a single model or a fleet? What latency, throughput, and scaling requirements exist? Are you constrained by language/ops tooling (Python, Java, Kubernetes)? Do you need A/B testing, monitoring, or CI/CD pipelines?

**Approach**  
1. **Define constraints** – latency budget, traffic patterns, hardware (CPU vs GPU), cost model.  
2. **Catalog options** – in‑process libraries (ONNX Runtime, TensorRT), lightweight containers (TorchServe, Triton Inference Server), managed services (SageMaker Endpoint, Vertex AI).  
3. **Match fit** – evaluate each against constraints; build a decision matrix.  
4. **Prototype & benchmark** – run latency/throughput tests on representative traffic.  
5. **Operationalize** – choose observability stack, auto‑scaling policies, and deployment pipeline.

**Depth**  
- *Inference engines*: ONNX Runtime (fast CPU), TensorRT (GPU), Triton (multi‑framework, GPU + CPU).  
- *Serving frameworks*: TorchServe (Python‑centric, easy model versioning), Seldon Core (K8s‑native, multi‑model).  
- *Managed services*: SageMaker Endpoint (auto‑scaling, spot instances) vs Vertex AI (global autoscaling, integrated MLOps).  
Complexity: In‑process engines give lowest latency but limited scalability; containerized stacks add 5–10 ms overhead but enable rolling updates and can run on any infra. Trade‑offs revolve around operational burden versus performance.

**Edge Cases**  
- **Burst traffic** – ensure autoscaling thresholds don’t trigger cold starts.  
- **Model drift** – need version pinning or continuous validation.  
- **Hardware heterogeneity** – GPU‑only stacks fail on CPU nodes; consider fallback paths.  

**Optimize & Communicate**  
Explain that the “right” stack is context‑dependent: for low‑latency, high‑volume services a Triton + Kubernetes deployment with pre‑warm pods may win; for rapid experimentation or small teams, TorchServe on managed SageMaker suffices. Highlight cost‑benefit analysis and how you’d iterate: start simple, benchmark, then add observability and scaling layers as needed. This demonstrates structured reasoning, depth in tooling choices, and an eye toward production realities—key signals FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
