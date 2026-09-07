---
qid: ing_343441db8e__faang__local
question: 'Explain: Tokens Per Second (TPS) — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 495
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:45:41-05:00'
sources: []
---

**Clarify**  
You’re asking about *Tokens‑Per‑Second* (TPS) for an inference pipeline—essentially the throughput of a language model when generating text token by token. We’ll assume: (1) a standard transformer‑based LLM, (2) batched requests arriving at a serving endpoint, and (3) we care about real‑time latency as well as raw token output rate.

**Approach**  
1. Define TPS = total tokens produced / elapsed time.  
2. Measure two components: *generation latency* per token and *parallelism* across requests.  
3. Compute throughput as `TPS = (batch_size × seq_len) / avg_generation_time`.  
4. Consider GPU/TPU utilization, memory bandwidth, and model size.

**Depth**  
- **Generation Latency**: For a transformer of depth D, each token requires D self‑attention passes; latency ≈ `O(D·(H² + H·V))` where H is hidden size, V vocab size.  
- **Batching & Parallelism**: Larger batches amortize kernel launch overhead but increase per‑token memory traffic. Optimal batch size balances GPU occupancy vs. latency.  
- **Pipeline Stages**: Pre‑processing (tokenization), model inference, post‑processing (detokenization). TPS is limited by the slowest stage.  
- **Complexity & Trade‑offs**: Larger models ↑ accuracy but ↓ TPS; quantization or pruning can restore TPS at modest quality loss.

**Edge Cases**  
- *Very short sequences*: batching overhead dominates → low TPS.  
- *Long‑context requests*: memory stalls, GPU underutilized → TPS drops.  
- *Dynamic scaling*: sudden traffic spikes may temporarily throttle TPS.

**Optimize & Communicate**  
1. Profile each stage; use mixed precision to speed inference.  
2. Implement dynamic batching (group similar length requests).  
3. Use model parallelism for huge models.  
4. Expose a real‑time dashboard showing TPS, latency, GPU utilization so ops can react.

By framing TPS as the product of batch throughput and per‑token latency, we can systematically tune hardware, software, and model design to meet SLA targets while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
