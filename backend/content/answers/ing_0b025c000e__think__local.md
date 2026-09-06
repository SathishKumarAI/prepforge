---
qid: ing_0b025c000e__think__local
question: You need to serve 200 customer-specific fine-tunes of the same 8B base model.
  How do you do that on a handful of GPUs, and what breaks first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 578
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:26:18-05:00'
sources: []
---

**1. Clarify scope & assumptions**

- “Same 8B base model” → one frozen checkpoint (e.g., Llama‑2‑8B) that will be fine‑tuned per customer.
- 200 *customer‑specific* fine‑tunes: each requires its own set of weights (or at least a small delta).
- “Handful of GPUs”: assume 4–8 GPUs, each ~24 GB VRAM (e.g., A100‑SXM4 or RTX‑3090).
- Goal: serve inference for all 200 fine‑tunes with minimal GPU memory and latency.

**2. Mental model / framework**

1. **Parameter‑efficient finetuning** (PEFT) – keep most weights frozen; only train small adapters.
2. **Model partitioning & sharding** – split the base model across GPUs to reduce per‑GPU memory load.
3. **Efficient serving architecture** – use a lightweight runtime that can swap in/out adapter weights on demand.

**3. Step‑by‑step reasoning**

- *Choose PEFT*: LoRA, prefix tuning, or prompt embeddings add < 1 % of parameters (~50–100 k) per customer. These are tiny compared to 8B (~34 M bytes).  
- *Store adapters on disk/SSD*; load them into GPU memory only when a request arrives.
- *Use model parallelism*: split the transformer layers across GPUs (pipeline or tensor‑parallel), so each GPU holds a fraction of the base weights (≈ 1–2 GB).
- *Cache strategy*: keep a small number of active adapters in RAM; LRU eviction for others.  
- *Inference pipeline*: route request → load adapter → run forward pass → unload if needed.

**4. Common traps to avoid**

- **Memory blow‑up**: loading all 200 adapters simultaneously will exceed VRAM.
- **Cold‑start latency**: swapping adapters per request can be slow; pre‑warm popular ones.
- **Model parallelism complexity**: incorrect sharding leads to performance bottlenecks or deadlocks.
- **Security leakage**: ensure adapter isolation so one customer’s data isn’t exposed to another.

**5. Sanity checks & communication**

- Verify that per‑GPU memory ≈ base shard + 1–2 MB adapters < GPU limit.
- Benchmark inference latency with a few adapters loaded vs. all loaded; confirm acceptable overhead.
- Communicate the design: “We’ll keep the 8B backbone sharded across GPUs and swap in tiny LoRA adapters per request, so we can support 200 fine‑tunes on a handful of GPUs without exceeding memory limits.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
