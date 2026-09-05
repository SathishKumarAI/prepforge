---
qid: ing_3ae70f25f8__fp__local
question: 'Explain: Principal Nuance: Target Modules — Lora Qlora Peft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 515
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:10:11-05:00'
sources: []
---

**Why “target modules” matter**

When you fine‑tune a huge transformer, you only want to *narrow* the search space so that the fewest possible parameters carry the new knowledge.  
The *fundamental problem* is: given a frozen backbone \(B\) (e.g., GPT‑4), how can we adapt it with minimal risk of overfitting while keeping training fast?  

1. **Parameter bottleneck** – The hidden state in each layer lives in a high‑dimensional space (\(d \approx 12\,k\)).  
   Any linear map that modifies this state must be expressed as a \(d\times d\) matrix, i.e., \(O(d^2)\) parameters.  
2. **Low‑rank factorisation** – If we replace the full update \(W\) with two skinny matrices
   \[
   \Delta W = A B^\top,\quad A,B \in \mathbb{R}^{d\times r},
   \]
   then only \(2dr\) parameters are learned.  
3. **Target‑module selection** – The *which* layer to apply this factorisation is critical:
   - **Self‑attention heads**: modify the key/value projections; they control the flow of information across tokens.
   - **Feed‑forward layers**: adjust the intermediate representation’s “shape”.
   - **Layer normalisations**: tweak scaling and bias with negligible cost.

Choosing a subset of these modules is equivalent to selecting a *subspace* of the model’s Jacobian that most strongly influences downstream loss. Empirically, fine‑tuning only attention or FFN layers often suffices; adding more modules yields diminishing returns while blowing up memory.

**Non‑obvious insight**

The *rank* \(r\) is not arbitrary: it should be tuned to the intrinsic dimensionality of the task’s gradient subspace. For language generation, this subspace is typically < 5% of \(d\). Hence, a rank‑4 LoRA on a 12k‑dimensional layer already captures > 95% of the necessary updates, explaining why QLoRA (quantised + LoRA) can train GPT‑3‑size models with only 1–2 GB of VRAM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
