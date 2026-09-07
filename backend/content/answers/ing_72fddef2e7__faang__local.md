---
qid: ing_72fddef2e7__faang__local
question: What causes high latency in conversational AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 561
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:30-05:00'
sources: []
---

**Clarify**

High latency in a conversational AI system refers to the time between a user’s utterance and the model’s reply.  
Key assumptions to confirm:

1. **Model size & inference engine** – is it GPT‑3, a distilled transformer, or a custom RNN?  
2. **Deployment stack** – cloud VMs, edge GPUs, or on‑device CPU?  
3. **Network path** – user ↔ load balancer ↔ inference nodes.  
4. **Batching & queueing policy** – single vs. batched requests.

---

**Approach**

1. Profile the pipeline: input → tokenization → model inference → post‑processing → response delivery.  
2. Identify bottlenecks (CPU/GPU stalls, disk I/O, network hops).  
3. Correlate latency spikes with resource utilization and request patterns.

---

**Depth**

| Layer | Typical Cause | Mitigation |
|-------|---------------|------------|
| **Tokenization** | Sub‑optimal libraries or large vocab | Use fast tokenizers (e.g., HuggingFace’s `fast` tokenizer) and cache embeddings. |
| **Model inference** | Large transformer depth, poor GPU utilization, cold starts | Quantize/Prune models; use TorchScript/ONNX for faster runtime; keep warm instances. |
| **Post‑processing** | Greedy decoding vs beam search overhead | Limit beam width or switch to nucleus sampling; batch post‑process steps. |
| **Networking** | Multi‑hop latency, DNS resolution, TLS handshake | Deploy in same region, use HTTP/2 multiplexing, cache DNS, enable keep‑alive. |
| **Queueing** | High request volume, FIFO policy | Implement request sharding, priority queues, autoscale workers. |

Complexity: inference cost ~ O(N·H²) for transformer layers; quantization reduces constant factor but adds precision loss trade‑off.

---

**Edge Cases**

- *Burst traffic*: test with sudden spikes to see if cold starts dominate.  
- *Long utterances*: measure token count impact on decoding time.  
- *Distributed deployment*: verify consistency across shards and fallback mechanisms.

---

**Optimize & Communicate**

Explain that latency stems from a combination of algorithmic cost, hardware utilization, and networking overhead. Prioritize low‑impact fixes first (e.g., fast tokenizer, caching), then tackle heavier ones (model compression, autoscaling). Conclude with a monitoring plan: track per‑stage latencies, set SLOs, and iterate on bottlenecks—this demonstrates structured thinking, depth, and clear communication expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
