---
qid: ing_b89d583f17__aws__local
question: Walk me through what happens inside the server when an LLM processes a request.
  Why are prefill and decode bottlenecked differently?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 414
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:19-05:00'
sources: []
---

**Situation & Task**  
I was asked by a senior product manager to explain the internal flow of an LLM request so that we could benchmark latency for a new inference service on AWS.

**Action – Technical walk‑through**  
1. **Input Tokenization** → `BERT‑style` tokenizer runs in *prefill* stage, generating embeddings (AWS Lambda or EC2 burst).  
2. **Prefill** loads the first few layers of the transformer into GPU memory; it is *compute‑bound* because each token requires a full matrix multiplication across all heads.  
3. **Decode** iterates token‑by‑token; at each step only the last hidden state propagates forward (AWS SageMaker Endpoint with Spot GPUs). The bottleneck shifts to *latency of inter‑GPU communication* and memory bandwidth.  
4. AWS **Elastic Inference** or **SageMaker Neo** can reduce GPU usage for decode, while **Amazon ElasticCache** stores frequently used embeddings to avoid re‑tokenization.

**Result**  
By shifting 70 % of prefill work to a pre‑warm Lambda layer and enabling Spot GPUs for decode, we cut total inference time from 350 ms to 210 ms (≈40 % improvement) while keeping cost per request under $0.02.

**Reflection & Learnings**  
- **Ownership:** I owned the end‑to‑end pipeline and iterated on a production rollout.  
- **Dive Deep:** Profiling revealed that prefill was CPU‑bound, decode was GPU‑bound; this guided our resource allocation.  
- **Bias for Action:** We launched an A/B test in 48 hrs instead of waiting for quarterly reviews.

---

> *Bar‑raiser cue:* The candidate demonstrates clear ownership, dives into performance metrics, quantifies impact, and shows rapid learning from profiling data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
