---
qid: ing_b3dccc1170__think__local
question: Why does scaled dot-product attention divide by √d_k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 554
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:15-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - *What is being asked?* We need to explain the mathematical reason behind the scaling factor \(1/\sqrt{d_k}\) in scaled dot‑product attention.  
   - *Assumptions:*  
     - The reader knows the basic attention formula: \(\text{Attention}(Q,K,V)=\operatorname{softmax}\!\bigl(QK^\top / \sqrt{d_k}\bigr)V\).  
     - We’re focusing on the *why* (variance, gradients) rather than implementation details.

**2️⃣ Mental model / framework**  
   - Think of dot products as inner products in a high‑dimensional space.  
   - The softmax function is sensitive to input magnitude: large values → near‑one probabilities; small values → nearly uniform distribution.  
   - We want *stable* gradients and meaningful similarity scores, so we must control the scale of \(QK^\top\).

**3️⃣ Step‑by‑step reasoning**  
   1. Each element of \(QK^\top\) is a sum of \(d_k\) products of independent random variables (assuming embeddings are roughly zero‑mean).  
   2. By the central limit theorem, its variance grows linearly with \(d_k\): \(\operatorname{Var}(q_i\cdot k_j)=d_k\,\sigma^4\).  
   3. If we don’t scale, larger \(d_k\) yields more extreme logits → softmax saturates → vanishing gradients.  
   4. Dividing by \(\sqrt{d_k}\) normalizes the variance to a constant (≈1), keeping logits in a range where softmax is neither too flat nor too peaked.  

**4️⃣ Common traps to avoid**  
   - *Misconception*: “It’s just a hyper‑parameter tweak.”  
   - *Over‑generalization*: Applying the same scaling to all attention variants without checking their dot‑product distribution.  
   - *Ignoring initialization:* Even with proper scaling, poor weight init can still cause issues.

**5️⃣ Sanity‑check & communicate**  
   - Verify: if \(d_k=1\), no scaling needed; as \(d_k\) grows, the factor dampens growth.  
   - Explain in plain terms: “We’re preventing the dot product from exploding with dimensionality so that the softmax behaves nicely.”  
   - End with a quick recap: variance control → stable training and better gradients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
