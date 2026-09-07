---
qid: ing_dbce32dee9__faang__local
question: You need to serve a Llama-class 70B+ model to hundreds of millions of assistant
  users. What does the serving stack look like and where does the money go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 486
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:09:25-05:00'
sources: []
---

**Clarify**  
We’re deploying a *Llama‑2 70 B* (or larger) transformer to serve ~10⁸+ concurrent users with <200 ms latency per query. Key assumptions:  
1. Queries are short (<512 tokens).  
2. We can pre‑compute or cache embeddings, but not full inference for every request.  
3. Budget is driven by compute, storage, and network; we’ll assume a 12‑month horizon.

**Approach**  
1. **Model partitioning & quantization** – 8‑bit or 4‑bit weights (GPTQ) to cut GPU memory from ~280 GB → <70 GB.  
2. **Server‑side inference** – use *Megatron‑Llama* + *DeepSpeed ZeRO‑3* on a cluster of NVIDIA A100 GPUs.  
3. **Request routing** – load‑balanced HTTP/GRPC gateway, with per‑tenant token bucket throttling.  
4. **Caching & beam pruning** – cache frequent prompts; use beam width 1 for low‑latency “chat” mode.  
5. **Observability** – metrics (latency, GPU utilization) fed to Prometheus/Kafka.

**Depth**  
- *Compute cost*: Each A100 (~$3 k/hrs) can handle ~200 QPS after quantization → 1 M QPS ≈ 5 GPU‑clusters.  
- *Storage*: Model weights (≈70 GB) on NVMe SSDs; checkpoint sharding across nodes.  
- *Network*: Inter‑node traffic (~10 Gbps) for gradient sync during fine‑tuning; inference traffic via CDN edge.

**Edge Cases**  
- Sudden spike → autoscale to 10× capacity (cost jump).  
- Model drift → schedule nightly re‑quantization.  
- Security: isolate tenant data, enforce GDPR compliance.

**Optimize & Communicate**  
Future gains: use *TensorRT* for runtime fusion, experiment with sparsity or LoRA adapters to reduce load. Communicate ROI by showing cost per QPS and latency SLAs; emphasize that 70 B models can be economically served when aggressively quantized and sharded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
