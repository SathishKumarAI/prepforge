---
qid: ing_c1aadddba2__think__local
question: Walk me through deploying a 70B open-weight model to production on Kubernetes.
  What breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 577
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:43:29-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Confirm which “70 B” model (e.g., LLaMA‑2‑70B, GPT‑4‑like) and that it’s fully open‑weight (no API lock).  
   * Assume a typical cloud Kubernetes cluster (≥ 100 vCPU nodes), GPU accelerators (A100/T4/3090), and a request‑driven inference pipeline.  
   * Decide on the deployment style: single‑pod vs. multi‑pod with model sharding, and whether we’ll use a serving framework (TorchServe, Triton, FastAPI).  

**2️⃣ Mental model – “resource → latency → cost”**  
   * Model size ↔ GPU memory requirement ↔ pod count ↔ cluster sizing.  
   * Inference latency ↔ batch size & pipeline parallelism ↔ user SLA.  
   * Cost ↔ spot vs. on‑demand, preemption risk, autoscaling policies.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Containerize**: build a minimal image with CUDA, PyTorch, model weights (or download at runtime).  
   2. **Memory check**: verify GPU memory > model size + overhead; if not, plan sharding or reduce precision.  
   3. **Deployment strategy**:  
      * *Single‑pod*: simplest but bottlenecked; may need multiple replicas for load.  
      * *Sharded*: use ZeRO/DeepSpeed to split weights across pods; ensure communication layer (gRPC).  
   4. **Service mesh & autoscaling**: set up Horizontal Pod Autoscaler based on GPU utilization or request latency.  
   5. **Observability**: add Prometheus metrics, tracing (OpenTelemetry), and log aggregation.  

**4️⃣ Common pitfalls to avoid**  
   * Under‑estimating GPU memory overhead → pod evictions.  
   * Ignoring inter‑pod communication latency in sharded setups.  
   * Not configuring proper CPU/GPU affinity → resource contention.  
   * Failing to secure model weights (S3 encryption, IAM roles).  

**5️⃣ Sanity checks & verbalizing**  
   * Verify that the pod can start and load the entire weight set before scaling.  
   * Run a synthetic throughput test; confirm latency meets SLA at expected QPS.  
   * Communicate findings as: “The 70 B model requires X GB GPU memory, so we’ll deploy Y sharded pods with Z GPUs each; autoscaling will trigger when GPU usage > 80%.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
