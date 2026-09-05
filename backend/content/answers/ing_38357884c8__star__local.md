---
qid: ing_38357884c8__star__local
question: 'Explain: Hierarchical (Parent-Child) Chunking — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 338
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:47-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a real‑time document summarization service for legal contracts. Our initial model processed each contract as one long text block, but the latency was unacceptable—average inference time was 3 seconds per 10 k token file, and the accuracy dropped after 2 k tokens due to GPU memory limits.

**Task:**  
I needed to redesign the input pipeline so that the model could handle arbitrarily large contracts in under a second while maintaining or improving F1 on key clause extraction.

**Action:**  
I implemented a hierarchical (parent‑child) chunking strategy. First, I split each contract into logical sections using regexes for headings (“Definitions,” “Liabilities,” etc.)—these became parent chunks. Then each section was further divided into 512‑token child chunks, fed to a transformer encoder. The embeddings of child chunks were aggregated with a lightweight attention layer to form the parent representation, which was passed to the decoder for summary generation. I used PyTorch Lightning for training and leveraged mixed‑precision inference on NVIDIA A100 GPUs.

**Result:**  
Inference time dropped from 3 s to 0.8 s per contract (≈75% speedup). Accuracy improved: clause extraction F1 rose from 0.72 to 0.81, and user satisfaction scores increased by 18%. I learned that careful hierarchical structuring can reconcile memory constraints with contextual fidelity in NLP pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
