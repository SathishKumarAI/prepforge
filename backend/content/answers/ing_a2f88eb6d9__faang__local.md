---
qid: ing_a2f88eb6d9__faang__local
question: 'Explain: Images are tokens, and resolution is money'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 458
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:27-05:00'
sources: []
---

**Clarify**  
You’re asking why *image pixels* become *tokens* for a model and why higher *resolution* costs more compute/memory. I’ll assume we’re talking about transformer‑style vision models (e.g., ViT) that ingest flattened patches as tokens.

---

**Approach**  
1. Explain tokenization of images.  
2. Connect resolution to token count → computational cost.  
3. Highlight memory & bandwidth implications (“money”).  

---

**Depth**  
- **Tokenization**: An image is split into \(p \times p\) patches, each flattened and projected to a vector. Each patch ≈ one “token” like a word in NLP.  
- **Resolution effect**: A \(H\times W\) image with patch size \(p\) yields \((H/p)\times(W/p)\) tokens. Doubling resolution roughly quadruples token count, leading to \(O(n^2)\) attention cost (transformer self‑attention scales quadratically).  
- **Compute & memory**: More tokens → more matrix multiplications and larger intermediate activations. GPUs/TPUs must hold all token embeddings + key/value pairs, inflating VRAM usage (“money”).  

---

**Edge Cases**  
- Very small images: token count < 16 → negligible cost but may under‑represent content.  
- Non‑divisible dimensions: padding or variable patch sizes can add overhead.  
- Models with linear attention or sparse mechanisms mitigate quadratic blowup.

---

**Optimize & Communicate**  
- Use *patch merging* (e.g., Swin) to reduce token count progressively.  
- Adopt *sparse* or *low‑rank* attention to cut FLOPs.  
- Emphasize that “resolution is money” because every extra pixel multiplies the cost of every layer; thus, practical systems balance visual fidelity with budgeted compute.  

By framing it this way, I show clear problem restatement, a methodical plan, technical depth, awareness of pitfalls, and actionable optimizations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
