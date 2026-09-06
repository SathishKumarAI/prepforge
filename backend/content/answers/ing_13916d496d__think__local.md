---
qid: ing_13916d496d__think__local
question: 'Explain: Derive the gradient of cross-entropy loss with softmax inputs,
  and explain why we fuse them numerically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 667
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:00:55-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   * Identify the variables: logits \(z\), softmax output \(\hat y = \text{softmax}(z)\), true one‑hot vector \(y\).  
   * Assume cross‑entropy loss \(L = -\sum_i y_i \log \hat y_i\).  
   * State that we differentiate w.r.t. the logits, not the softmax outputs directly.

**2. Choose a mental model / framework**  
   * Think of two linked sub‑tasks: (a) computing gradients of cross‑entropy wrt probabilities, and (b) backpropagating through the softmax.  
   * Use chain rule systematically: \(\partial L/\partial z = (\partial L/\partial \hat y)\cdot(\partial \hat y/\partial z)\).

**3. Step‑by‑step reasoning**  
   1. Compute \(\partial L/\partial \hat y_j = -y_j / \hat y_j\).  
   2. Recall softmax Jacobian: \(\partial \hat y_i/\partial z_j = \hat y_i (\delta_{ij} - \hat y_j)\).  
   3. Multiply and sum over \(j\):  
      \[
        \frac{\partial L}{\partial z_i}
          = \sum_j \left(-\frac{y_j}{\hat y_j}\right) \hat y_i(\delta_{ij}-\hat y_j)
          = \hat y_i - y_i.
      \]
   4. Thus the gradient simplifies to the difference between predicted probabilities and true labels.

**4. Common traps & pitfalls**  
   * Mixing up derivatives of \(\log \hat y\) vs \(\hat y\).  
   * Forgetting the minus sign in cross‑entropy or misapplying the Jacobian.  
   * Not realizing that the softmax Jacobian collapses to a simple subtraction because the loss is a sum over classes.

**5. Sanity checks & verbal communication**  
   * Verify dimensions: both \(\hat y\) and \(y\) are vectors of length \(C\).  
   * Test on a toy example (e.g., 2‑class case) to see that the gradient equals \([\hat y_1-y_1,\;\hat y_2-y_2]\).  
   * Explain verbally: “The cross‑entropy pulls each logit toward its true label; after softmax, this pull becomes a clean probability minus one-hot difference.”  

**Why fuse them numerically?**  
   * The analytical simplification \(\partial L/\partial z = \hat y - y\) lets us compute gradients in one pass, avoiding explicit Jacobian matrix multiplications.  
   * It reduces computational cost (no \(O(C^2)\) operations) and numerical instability (avoiding separate softmax + log + division steps).  
   * In practice, frameworks implement this fused operation for speed and stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
