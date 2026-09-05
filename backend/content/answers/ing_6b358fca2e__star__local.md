---
qid: ing_6b358fca2e__star__local
question: How does adapter merging work, and how do multi-LoRA serving and hot-swapping
  work in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 360
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:41-05:00'
sources: []
---

**Situation:**  
When our NLP team rolled out the next‑generation chatbot for a financial client, we needed to support several fine‑tuned language models (LoRA adapters) without redeploying the heavy base model each time.

**Task:**  
I had to implement adapter merging so that multiple LoRAs could be combined on the fly, set up multi‑LoRA serving in a single inference endpoint, and enable hot‑swapping of adapters while the service stayed online.

**Action:**  
Using Hugging Face’s `transformers` library I wrote a lightweight merging utility: it loads the base transformer once, then applies each LoRA weight tensor to the corresponding attention/query matrices, summing them with a configurable scaling factor. For serving I deployed a FastAPI wrapper behind Nginx, exposing an `/infer?model=XYZ` query that pulls the desired adapter set from S3, merges it into memory (≈200 MB RAM per model), and caches the merged weights for 30 minutes. Hot‑swapping is achieved by atomically swapping the cached state dictionary; the inference thread reads the new dict on the next request without stopping the process.

**Result:**  
The system handled up to 5 concurrent LoRA sets, cutting inference latency from 1.2 s (full reload) to 0.35 s and reducing GPU usage by ~40%. The client saw a 25% increase in user satisfaction scores, and I learned that careful caching plus atomic swaps can make large‑model serving both flexible and low‑overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
