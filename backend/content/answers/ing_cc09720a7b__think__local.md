---
qid: ing_cc09720a7b__think__local
question: How do images become tokens, and why does image resolution drive inference
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 477
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:25:16-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What is a “token” in vision models?* Assume we’re talking about transformer‑style architectures where an image is broken into patches, each patch → one token (vector).  
- *Why resolution matters for inference cost?* Assume “cost” refers to FLOPs / memory usage during forward passes.  

**2️⃣ Mental model & framework**  
- Think of a vision transformer as a sequence model: tokens = 1‑D items processed by self‑attention.  
- Image → patches → embeddings → positional encodings → stacked Transformer layers.  
- Cost scales with *number of tokens × (token dimension)²* per attention layer.  

**3️⃣ Step‑by‑step reasoning**  
a. **Patch extraction**: image of size H×W, patch size P→ number of patches N = (H/P)·(W/P).  
b. **Token creation**: each patch flattened → linear projection → d‑dim vector.  
c. **Self‑attention cost**: for one layer ≈ 2·N²·d FLOPs (query/key/value matrix multiplications + softmax & weighted sum).  
d. **Inference cost growth**: doubling resolution halves P relative to H,W, roughly quadruples N → ~4× the attention cost.  

**4️⃣ Common traps**  
- Confusing *resolution* with *patch size*: higher resolution can be handled by larger patches without increasing token count.  
- Ignoring that positional embeddings also scale linearly with N but are negligible compared to quadratic attention cost.  
- Overlooking that some models use linear attention or convolutional backbones to mitigate the cost.  

**5️⃣ Sanity‑check & verbalization**  
- Verify scaling: if 224×224 → 14×14 patches (N=196), moving to 448×448 → 28×28 patches (N=784) → 4× tokens, hence ~16× attention FLOPs per layer.  
- Communicate by summarizing: “Images become tokens via patch‑to‑embedding mapping; inference cost explodes because self‑attention scales quadratically with token count, which itself grows with resolution.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
