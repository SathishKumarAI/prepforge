---
qid: ing_abfe347b16__think__local
question: 'Q: What determines TTFT vs TPS? — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 764
total_tokens: 955
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:21:51-05:00'
sources: []
---

**1. Clarify the question & assumptions**

- *What is meant by TTFT and TPS?*  
  – TTFT = **Time To First Token** (latency until the first output token).  
  – TPS = **Tokens Per Second** (throughput after the pipeline starts producing tokens).  
- Assume we’re talking about a typical transformer‑based inference pipeline: tokenizer → model forward pass(es) → decoder → post‑processing.  
- Assume “determines” refers to architectural and operational factors that influence each metric.

---

**2. Mental model / framework**

Treat the pipeline as two stages:

| Stage | Affects TTFT | Affects TPS |
|-------|--------------|-------------|
| 1️⃣ Input processing (tokenization, batching) | Yes – longer tokenization or larger batch → more prep time. | Limited impact after start. |
| 2️⃣ Model inference (forward pass) | Single forward pass latency dominates initial token generation. | Throughput depends on how many tokens can be produced per second given model size and hardware. |
| 3️⃣ Post‑processing & decoding | Minor, but still adds to first‑token delay. | Adds negligible overhead when many tokens are being streamed. |

---

**3. Step‑by‑step reasoning**

1. **Tokenization cost**: If you tokenize a long prompt or use an inefficient tokenizer, TTFT rises; TPS is unaffected because token generation starts only after the prompt is ready.  
2. **Batch size & parallelism**: Larger batches improve GPU utilization → higher TPS, but they also increase initial queueing time → higher TTFT.  
3. **Model depth/width & precision**: Deeper/wider models give more context per pass (potentially fewer passes for the same output length) → lower TTFT, but each pass takes longer → potentially lower TPS if not offset by hardware acceleration.  
4. **Hardware throughput vs latency**: GPUs excel at high‑throughput batch processing (good TPS) but may have higher per‑token latency compared to specialized inference chips tuned for low‑latency single token generation.  
5. **Beam width / sampling strategy**: Larger beam widths increase per‑step computation → TTFT grows, while TPS falls because each token requires more operations.  

---

**4. Common traps**

- Confusing *batch size* as a direct speedup for both metrics; it boosts TPS but can hurt TTFT due to queuing.  
- Ignoring **tokenization overhead**, which can dominate TTFT for short prompts.  
- Assuming higher precision always gives better TPS; in practice, lower‑precision (FP16/INT8) often yields the best trade‑off.  

---

**5. Sanity‑check & verbalizing**

1. Pick a concrete example: “Generate 100 tokens from a 200‑word prompt on an A100.”  
2. Estimate tokenization time (~0.01 s), first forward pass latency (~0.05 s), subsequent passes (~0.02 s each).  
3. Sum to get TTFT ≈ 0.06 s, TPS ≈ 100 tokens / (0.06 + 99×0.02) ≈ 4.8 tokens/s.  
4. If you double batch size, TPS should go up, but TTFT might jump to ~0.1 s—confirm the trade‑off verbally: “We’re trading a bit of initial delay for higher steady‑state throughput.”  

By following this structured approach, you can systematically identify which parts of the pipeline influence latency versus throughput and avoid common misconceptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
