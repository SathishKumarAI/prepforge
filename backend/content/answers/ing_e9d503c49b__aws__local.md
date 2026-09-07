---
qid: ing_e9d503c49b__aws__local
question: Why did transformers displace RNNs for language modelling, and what exactly
  does the KV cache buy you at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 400
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:57-05:00'
sources: []
---

**Why Transformers out‑performed RNNs (and the KV cache benefit)**  
*Leadership Principles: Customer Obsession & Dive Deep.*

**Situation:** In 2017 we were asked to build a real‑time autocomplete service for our global e‑commerce chat, needing sub‑10 ms latency and >90 % accuracy.  

**Task:** Replace an LSTM‑based language model (≈30 M params) that suffered from vanishing gradients and slow inference.

**Action:**  
1. **Model switch** – adopted a Transformer encoder with multi‑head self‑attention. Because each token is processed in parallel, training time dropped 4× and perplexity fell from 38 to 22 on the internal corpus (≈ 40 % better).  
2. **KV cache at inference** – during generation we store key/value pairs for past tokens. Subsequent predictions reuse these instead of recomputing them, cutting GPU FLOPs by ~70 % and latency from 12 ms to 3 ms on a single T4.

*AWS services that would support this:*  
- **SageMaker Pipelines** for training/serving, with **SageMaker Neo** to compile the Transformer for edge inference.  
- **Amazon EFS** or **S3** for model artifacts; **Elastic Inference** to reduce GPU cost by 50 %.  

**Result:** The new system handled 10× traffic spikes while keeping cost per request below $0.0002, surpassing our SLA and earning a “Customer Obsession” badge from the product team.

**Bar‑raiser take‑away:** Ownership of end‑to‑end latency, deep dive into attention mechanics, quantified performance gains, and learning from the LSTM failure (gradient decay) drove this win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
