---
qid: ing_e536bdf16b__faang__local
question: 'Explain: Pattern Selection Guide — Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 590
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:09-05:00'
sources: []
---

**Pattern Selection Guide – AI Architectures**

| **Pattern** | **When to Use** | **Key Trade‑offs** |
|-------------|-----------------|--------------------|
| **Linear/Sequential** (feed‑forward, RNN) | One‑dimensional data, no branching. Simpler training, low latency. | Limited parallelism; deep stacks cause vanishing gradients. |
| **Branching / Multi‑Head** (transformer, attention) | Parallelizable features, need context from multiple sources. | Higher compute & memory; requires careful positional encoding. |
| **Residual / Dense Blocks** | Very deep models; gradient flow is critical. | Adds extra parameters but improves convergence. |
| **Sparse / Mixture‑of‑Experts** | Huge parameter budgets with limited compute per inference. | Complexity in routing, load balancing overhead. |
| **Neural Architecture Search (NAS)** | Need optimal model for a specific metric or hardware constraint. | Expensive search; may overfit to training data. |

### 1️⃣ Clarify
We’re selecting the *architectural pattern* that best fits data type, latency budget, and resource constraints. Confirm assumptions: input shape, target accuracy, inference device, and training data volume.

### 2️⃣ Approach
- **Profile** data characteristics (sequential vs. multi‑modal).  
- **Map** each candidate pattern to those traits.  
- **Quantify** compute/memory costs via FLOPs & parameter count.  
- **Validate** with a quick prototype on representative hardware.

### 3️⃣ Depth
For a text classification task, a *transformer* (multi‑head attention) offers parallel token processing and state‑of‑the‑art accuracy. However, its quadratic self‑attention cost is \(O(n^2)\). If latency matters, replace with *sparse transformers* or *Longformer* to reduce complexity while preserving context.

### 4️⃣ Edge Cases
- **Very long sequences**: vanilla transformer fails; use sparse attention.  
- **Edge devices**: residual blocks may be too heavy—opt for depth‑wise separable convolutions.  
- **Limited GPU memory**: mixture‑of‑experts can keep per‑inference memory low but introduces routing latency.

### 5️⃣ Optimize & Communicate
Iterate by swapping in *efficient attention* (Linformer, Performer) and benchmark on target device. Present trade‑offs in a concise table, explain why the chosen pattern balances accuracy and resource usage, and outline next steps for hyper‑parameter tuning or hardware‑specific optimizations.

**Key takeaway:** Pattern selection is a cost–benefit exercise—match data shape → pattern type → compute budget, then validate with quick prototyping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
