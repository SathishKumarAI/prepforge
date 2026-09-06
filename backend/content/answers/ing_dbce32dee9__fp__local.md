---
qid: ing_dbce32dee9__fp__local
question: You need to serve a Llama-class 70B+ model to hundreds of millions of assistant
  users. What does the serving stack look like and where does the money go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 616
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:46:28-05:00'
sources: []
---

**Serving a 70 B‑parameter LLaMA‑style model for 10⁸+ requests**

| Layer | Core function | Why it must be this way | Cost driver |
|-------|---------------|------------------------|-------------|
| **Model sharding (tensor & pipeline)** | Split the weight matrix across GPUs so each card sees < 8 GB of parameters. Pipeline stages let a single request flow through many GPUs without back‑pressure.| The model is too large for any GPU; sharding keeps compute parallel while preserving exact inference semantics.| GPU memory, inter‑connect (NVLink/InfiniBand) bandwidth |
| **Request routing & batching** | A front‑end API gateway gathers user prompts, sorts by length, and groups them into micro‑batches. Shorter queries share a batch to amortize kernel launch costs. | Batching reduces per‑token latency and maximizes GPU utilization; the *“optimal batch size”* is a classic convex optimization problem balancing throughput vs. head‑of‑line delay.| CPU time on the gateway, network egress |
| **Precision & caching** | Use BF16 or INT8 for activations; keep frequently requested prompts in an LRU cache of embeddings. | Lower precision halves memory traffic and speeds matmul; caching turns a *stateless* model into a *stateful* accelerator. | GPU compute cycles, memory bandwidth |
| **Model‑parallel inference engine** | Each pipeline stage runs on its own server rack; stages communicate via RDMA. Fault tolerance is handled by checkpointing state to SSD. | The *pipeline depth* must match the number of GPUs to avoid idle stalls—an instance of *scheduling theory*. | Server racks, power |
| **Serving platform & autoscaling** | A Kubernetes cluster orchestrates pods that host GPU nodes; a custom scheduler triggers on token‑rate spikes. | Autoscaling is governed by a cost‑optimal control loop: “minimize latency + minimize \$/token”. | Cloud provider fees (compute + networking) |

**Where the money goes**

1. **GPUs & NVLink racks** – ~60 % of the budget; high‑end GPUs with fast memory dominate.
2. **Network infrastructure** – 15 %; RDMA switches and egress bandwidth keep pipeline stalls low.
3. **Storage & caching** – 10 % for SSDs that hold checkpoints and embedding caches.
4. **Cloud ops / autoscaling** – 5 % for Kubernetes, monitoring, and billing.
5. **Research & development** – 10 % to refine sharding, precision, and batching algorithms.

*Non‑obvious insight:* The *optimal batch size* is not fixed; it depends on the distribution of prompt lengths. A dynamic batching policy that adapts to real‑time length histograms can yield a 20–30 % throughput boost without additional hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
