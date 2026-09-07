---
qid: ing_0b6c45c3af__faang__local
question: Images are 2D and video is 3D, but an LLM's positional encoding is 1D. What
  breaks if you just flatten the patches, and how do modern VLMs handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 536
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:10:56-05:00'
sources: []
---

**Clarify**  
We’re asked why flattening image patches into a single 1‑D sequence for an LLM’s positional encoding breaks spatial structure, and how vision‑language models (VLMs) preserve 2‑D/3‑D context.

**Approach**  
1. Identify what positional information the LLM expects.  
2. Explain the loss of 2‑D locality when flattening.  
3. Describe modern VLM strategies that keep spatial relations intact.

**Depth**  

| Issue | Why it breaks | Modern fix |
|-------|---------------|------------|
| **Loss of grid adjacency** | Flattening maps (x, y) → i loses the notion that neighboring pixels form edges/objects. The LLM treats all tokens as a line, so convolutional or transformer attention cannot recover 2‑D structure without extra hints. | **Patch embeddings + 2‑D positional encoding**: Each patch gets an embedding plus a 2‑D (or 3‑D for video) sine/cosine vector. The LLM sees each token’s *row* and *column* indices, preserving locality. |
| **Scale mismatch** | Images have many more tokens than text; a single positional dimension can’t encode both fine‑grained layout and global context. | **Hierarchical or multi‑scale encoders**: Vision transformers (ViT) first process patches locally, then feed the resulting sequence to an LLM with *relative* positional embeddings that respect patch size. |
| **Temporal continuity in video** | Flattening across frames destroys motion cues. | **3‑D positional encoding (x,y,t)** or a separate temporal transformer that merges per‑frame features before language modeling. |

**Edge cases**  
- Very large images → too many patches → memory blow‑up; mitigated by downsampling or sparse attention.  
- Non‑rectangular inputs (e.g., irregular masks) → positional vectors must be masked accordingly.  

**Optimize & communicate**  
Explain that VLMs often concatenate the visual token sequence with text tokens and use a shared transformer backbone, so the positional encodings are learned jointly. Emphasize trade‑offs: richer spatial encoding increases parameters but yields far better grounding; simpler flattening is computationally cheaper but sacrifices fidelity. This narrative shows structured reasoning, depth, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
