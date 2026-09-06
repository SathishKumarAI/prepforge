---
qid: ing_0be0e8479e__think__local
question: 'Explain: Where do the parameters and FLOPs actually live in a transformer?
  Walk me through the budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 776
total_tokens: 975
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:30:27-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
- Identify what “parameters” (weights) and “FLOPs” (floating‑point ops) mean in a transformer context.  
- Assume we’re talking about a standard encoder–decoder or decoder‑only architecture, with self‑attention, feed‑forward layers, and optional layer norms/embeddings.  
- Decide on the granularity: per‑layer, per‑block, or overall model budget.

**2. Mental model / framework**  
- View the transformer as a pipeline of *blocks*. Each block contains:
  - Multi‑head self‑attention (MHA) sub‑module.
  - Position‑wise feed‑forward network (FFN).
  - Residual connections + layer normalisation (negligible FLOPs/params).  
- Parameters are concentrated in weight matrices: query/key/value projections, output projection, and the two linear layers of the FFN.  
- FLOPs arise mainly from matrix multiplications inside MHA and FFN.

**3. Step‑by‑step reasoning**  
1. **Count parameters per block**  
   - For a hidden size `d` and number of heads `h`, each projection is `d × d`.  
     * 3 projections (Q,K,V) + 1 output = 4 × (d²).  
   - FFN: two linear layers with sizes `d → 4d` and `4d → d`: `2 × (d × 4d)` = `8d²`.  
   - Total per block ≈ `(4+8) d² = 12 d²`.  
2. **Count FLOPs per block**  
   - MHA: for each head, compute Q×Kᵀ (`d/h × seq_len` ops) and then multiply by V. Roughly `2 * (seq_len² * d)` FLOPs per block.  
   - FFN: two dense layers → `2 * (4d * d)` = `8 d²` FLOPs per token, times sequence length.  
3. **Aggregate over all blocks**  
   - Multiply the per‑block figures by the number of layers `L`.  
   - Include embeddings and final linear layer if needed.  
4. **Budget walk‑through**  
   - Show a concrete example: e.g., GPT‑2 base (`d=768`, `h=12`, `L=12`). Compute params ≈ 12 × 12 × (768²) ≈ 1B, FLOPs per token ≈ 12 × (2 × seq_len² × 768 + 8 × 768²).  
   - Highlight how most parameters live in the linear projections and FFN, while FLOPs are dominated by MHA’s matrix multiplications.

**4. Common traps to avoid**  
- Forgetting that layer‑norm and residuals add negligible cost.  
- Miscounting head dimension (`d/h`) vs. full hidden size.  
- Ignoring the bias terms or token‑type embeddings in a practical budget.  
- Mixing up FLOPs per *token* versus per *sequence*.

**5. Sanity checks & communication**  
- Verify that parameter counts match published numbers for known models (e.g., 117M for GPT‑2 small).  
- Cross‑check FLOP estimates against empirical timing or profiler data.  
- When explaining, start with the high‑level block structure, then drill down to per‑layer formulas, and finally show a numeric example so the listener can see the budget in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
