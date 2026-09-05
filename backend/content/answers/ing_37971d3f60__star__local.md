---
qid: ing_37971d3f60__star__local
question: When does model merging work, and what's actually going on underneath?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 339
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:19:32-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had two independently trained language models—one optimized for fraud‑detection queries and another tuned for customer support. Each model scored around 92 % accuracy on its domain but we needed a single inference endpoint to reduce latency and cost.

**Task:**  
I was tasked with merging the two checkpoints into one unified model that maintained high performance across both domains while keeping the inference size under 200 MB.

**Action:**  
First, I analyzed layer‑wise weight similarity using cosine distance; shared transformer layers were highly correlated (≈0.97), so I kept a single set of weights there. For domain‑specific heads, I employed LoRA adapters: frozen backbone + lightweight rank‑1 updates for each head. Then I used knowledge distillation—running both models on a mixed validation set and training the merged model to match their logits with a temperature‑scaled loss (T=2). Finally, I pruned low‑magnitude weights in the adapter matrices and quantized the entire checkpoint to 8‑bit.

**Result:**  
The merged model achieved 91.5 % overall accuracy—only a 0.5 % drop from the best individual models—and inference latency dropped by 35 %. Deploying it cut GPU usage by 40 %, saving $1,200/month. I learned that effective merging relies on aligning shared representations and selectively fine‑tuning only divergent components; otherwise you risk catastrophic forgetting or bloated weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
