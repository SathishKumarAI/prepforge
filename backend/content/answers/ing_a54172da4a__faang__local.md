---
qid: ing_a54172da4a__faang__local
question: 'Explain: ── Per-frame prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 488
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:09:14-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *per‑frame prompting* in vision‑language models—i.e., feeding a unique textual prompt for every image frame instead of a single global prompt. Assume we’re dealing with video or multi‑image inputs and that the model supports text–image conditioning (e.g., CLIP, Stable Diffusion).

**Approach**  
1. Define per‑frame prompting as assigning a distinct textual cue to each frame.  
2. Explain why it matters: temporal consistency, fine‑grained control, handling scene changes.  
3. Contrast with single‑prompt or global prompt strategies.  
4. Discuss implementation: tokenization per frame, conditioning network adaptation, and inference pipeline.

**Depth**  
- *Mechanism*: For each frame \(i\), we generate a prompt vector \(\mathbf{p}_i = f_{\text{text}}(t_i)\). The diffusion or attention module receives \((x_i,\mathbf{p}_i)\) pair.  
- *Benefits*:  
  - **Temporal alignment**: prompts can encode actions (“jumping”, “turning”) that change over time.  
  - **Local detail**: focus on objects appearing only in certain frames (e.g., a balloon).  
  - **Reduced drift**: avoids the model blending disparate scenes into one latent representation.  
- *Trade‑offs*:  
  - **Compute**: token embeddings per frame increase memory and runtime linearly with \(N\).  
  - **Prompt design**: requires careful crafting or learned prompt generation to avoid hallucinations.

**Edge Cases**  
- Static scenes where prompts diverge unnecessarily → model may produce inconsistent artifacts.  
- Rapidly changing backgrounds can overwhelm the conditioning network, leading to jitter.  
- Inadequate tokenization (e.g., OOV words) breaks conditioning.

**Optimize & Communicate**  
Future work: train a lightweight prompt‑generator conditioned on optical flow or scene embeddings, reducing manual effort. For production, batch prompt embeddings and reuse cached attention maps when adjacent frames share similar prompts.  

*TL;DR*: Per‑frame prompting tailors the textual condition to each image slice, enabling precise temporal control at the cost of extra computation and careful prompt engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
