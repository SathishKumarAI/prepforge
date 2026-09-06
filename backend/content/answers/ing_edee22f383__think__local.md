---
qid: ing_edee22f383__think__local
question: Walk me through continuous batching in an LLM inference server. Why does
  it beat static batching?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 518
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:44:00-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “continuous batching”*? Assume an inference server that keeps a queue of incoming requests and groups them on‑the‑fly as soon as enough tokens are available.  
- *Static batching* means the client or scheduler pre‑decides batch size (e.g., every 8 requests) and sends them together, possibly wasting idle GPU time if requests arrive irregularly.  
- Assume a typical transformer LLM with high per‑token latency, variable request rates, and a GPU that thrives on large matrix multiplies.

**2️⃣ Mental model / framework**  
Treat the inference pipeline as a queuing system:  
- *Arrival process*: Poisson or bursty requests.  
- *Service mechanism*: Transformer layers executed in parallel over batched tokens.  
- *Objective*: Minimize average latency while maximizing GPU utilization.

Continuous batching is akin to an adaptive queue discipline that pulls requests opportunistically, whereas static batching is a fixed‑size FIFO scheduler.

**3️⃣ Step‑by‑step reasoning**  
1. **Latency vs throughput trade‑off**: Large batches give higher throughput but increase per‑request wait time.  
2. **Adaptive waiting**: Continuous batching waits just long enough to fill a GPU‑efficient batch, then processes immediately.  
3. **Resource utilization**: It keeps the GPU busy even under low traffic by merging small requests on the fly, avoiding idle cycles that static batching would incur when the pre‑set size isn’t met.  
4. **Dynamic sizing**: The server can shrink or grow the batch based on current load, thereby keeping latency predictable.

**4️⃣ Common traps to avoid**  
- Assuming continuous batching always gives *lower* latency; it actually trades a tiny extra wait for a big throughput gain.  
- Ignoring request size heterogeneity (different token lengths) which can distort batch homogeneity.  
- Over‑simplifying the GPU kernel’s scaling law; some layers plateau after a certain width.

**5️⃣ Sanity‑check & communicate**  
Ask: “If I double the arrival rate, does continuous batching still outperform static?” The answer should show that as traffic grows, continuous batching automatically builds larger batches, while static batching may under‑utilize or over‑buffer. Summarize by highlighting *adaptive utilization* and *latency predictability* as the key benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
