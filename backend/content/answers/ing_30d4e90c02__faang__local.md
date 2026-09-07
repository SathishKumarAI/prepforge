---
qid: ing_30d4e90c02__faang__local
question: 'Explain: Sliding Window Attention (SWA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 537
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:38:03-05:00'
sources: []
---

**Sliding‑Window Attention (SWA)**  
*Attention mechanisms that limit each token’s receptive field to a fixed spatial window.*

---

### Clarify
We’re asked how SWA works and why it matters for vision/sequence models. Key assumptions:  
- Input is a 2D feature map (image) or 1‑D sequence (text).  
- Standard self‑attention costs \(O(N^2)\), prohibitive when \(N\) grows.  

### Approach
Explain the core idea, compare to global attention, then discuss implementation details and benefits.

### Depth
| Component | What it does | Complexity |
|-----------|--------------|------------|
| **Local Window** | Each token attends only to neighbors within a fixed radius \(r\). | \(O(N \cdot (2r+1)^d)\) (linear in \(N\)) |
| **Overlap / Stride** | Windows may overlap; stride controls sparsity. | Same as above, but fewer unique queries if stride > 1 |
| **Position Encoding** | Relative encodings inside window to preserve locality. | Constant overhead |
| **Multi‑Head SWA** | Multiple heads can use different strides or dilation factors, capturing multi‑scale context. | Linear in number of heads |

*Benefits*:  
- Drastic reduction in memory & compute.  
- Retains local structure (e.g., edges in images).  
- Enables hierarchical models: shallow layers use small windows; deeper layers increase \(r\) for global reasoning.

### Edge Cases
- **Very small windows** → loss of long‑range dependencies.  
- **High stride** → sparsity may miss important interactions.  
- **Boundary tokens** → pad or mirror to keep window size consistent.  

Testing: compare perplexity/accuracy vs. full attention on CIFAR‑10 and a language benchmark; measure GPU memory usage.

### Optimize & Communicate
To further improve, mix SWA with *global token* (e.g., CLS) that aggregates across the whole map, or use *adaptive window sizes* based on feature variance. When explaining to interviewers, emphasize:  
1. **Why** we need SWA (scalability).  
2. **How** it works (local queries + linear complexity).  
3. **When** it’s effective (vision, long‑sequence tasks).  

This showcases clear problem framing, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
