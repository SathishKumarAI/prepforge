---
qid: ing_9b09d5ad16__faang__local
question: 'Explain: Prefill and decode disaggregation — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 773
total_tokens: 1010
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:48-05:00'
sources: []
---

**Clarify**  
We’re asked how a *LLM gateway* uses **prefill‑decode disaggregation** to serve large language models. I’ll assume we want to explain the architecture that splits inference into two stages (the “prefill” of prompt tokens and the “decode” of generated tokens), and why this matters for latency, throughput, and resource utilization in a production serving platform.

---

### 1️⃣ Approach  
1. **Define the problem**: Serve many concurrent requests with low latency while keeping GPU memory usage bounded.  
2. **Explain prefill vs decode**: Prefill is the initial forward pass over prompt tokens; decode is repeated generation of single tokens.  
3. **Show how a gateway orchestrates them**: batch prefills, stream decodes, schedule GPUs/TPUs, and manage model replicas.  
4. **Touch on trade‑offs**: batching vs latency, memory reuse, dynamic scaling.

---

### 2️⃣ Depth  

| Stage | What happens | Key tech |
|-------|--------------|----------|
| Prefill | Tokenise prompt → embed → multi‑head self‑attention over *n* tokens (usually >1) in a single forward pass. | Parallel GPU kernels, tensor parallelism, memory‑efficient attention (flash‑attention). |
| Decode | Generate one token at a time; only the last layer’s hidden state is needed to compute logits for next token. | Autoregressive sampling, beam search, KV‑cache reuse across steps, incremental transformer layers. |

The **gateway**:
- Receives requests → queues them by model & batch size.
- For each model, it keeps a *prefill buffer* (batched prompts) and a *decode stream* (per‑request token generators).
- Uses *pipeline parallelism*: while one request is in decode stage on GPU A, another can prefill on GPU B.
- Implements **dynamic batching**: if no batch size hits threshold within X ms, serve immediately to avoid latency spikes.

Complexities:
- Prefill cost ≈ O(n²) for self‑attention; decoding cost ≈ O(1) per token thanks to KV cache.
- Memory: prefill uses full attention matrix; decode reuses cached key/value tensors → ~3× memory savings.
- Latency trade‑off: larger prefill batches reduce GPU utilization but increase queuing delay.

---

### 3️⃣ Edge Cases  

| Scenario | What can break |
|----------|----------------|
| Very short prompts (1–2 tokens) | Prefill overhead dominates; may be cheaper to skip prefill and start decode immediately. |
| Extremely long prompts (>4k tokens) | GPU memory overflow → need prompt truncation or streaming prefill. |
| Mixed request mix (short + long) | Batching policy must avoid “batch starvation” where short requests wait for long ones. |

Testing: simulate varying batch sizes, prompt lengths, and network latencies; measure throughput, GPU occupancy, and tail latency.

---

### 4️⃣ Optimize & Communicate  

- **Adaptive batching**: Use a predictive model to estimate optimal batch size per request mix.
- **Memory‑efficient attention**: Switch to rotary or linear attention for very long prompts.
- **Fine‑tuned KV cache eviction**: Drop rarely used keys to free memory for new requests.

When explaining, I’d start with the high‑level goal (low latency + high throughput), then walk through the two stages, showing how each maps to GPU kernels and why the gateway’s orchestration matters. Conclude by highlighting trade‑offs and future improvements, keeping the narrative concise yet complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
