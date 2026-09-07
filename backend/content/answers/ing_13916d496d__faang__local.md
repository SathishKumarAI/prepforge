---
qid: ing_13916d496d__faang__local
question: 'Explain: Derive the gradient of cross-entropy loss with softmax inputs,
  and explain why we fuse them numerically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 646
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:56-05:00'
sources: []
---

**Clarify**  
We need to (1) derive ∂L/∂z for a neural‑net output \(z\in\mathbb{R}^C\) that goes through a softmax, then cross‑entropy loss against one‑hot target \(y\); (2) explain why the two operations are fused into a single numerically stable routine.

**Approach**  
1. Write the softmax and loss formulas.  
2. Compute ∂L/∂z via chain rule.  
3. Point out the cancellation that yields a simple form.  
4. Discuss numerical pitfalls (overflow/underflow) and how fusing mitigates them.

**Depth**  

Let \(s_j = \frac{e^{z_j}}{\sum_k e^{z_k}}\) be softmax, loss  
\(L = -\sum_j y_j \log s_j\).  
For a one‑hot target \(y_t=1\):  
\[
\frac{\partial L}{\partial z_i}
  = \sum_j \frac{\partial L}{\partial s_j}\frac{\partial s_j}{\partial z_i}
  = -\frac{1}{s_t}\frac{\partial s_t}{\partial z_i}.
\]
Softmax derivative:  
\[
\frac{\partial s_j}{\partial z_i}=s_j(\delta_{ij}-s_i).
\]
Thus for \(i=t\):
\[
\frac{\partial L}{\partial z_t}
  = -\frac{1}{s_t}s_t(1-s_t)=-(1-s_t),
\]
and for \(i\neq t\):
\[
\frac{\partial L}{\partial z_i}= -(-s_i)= s_i.
\]
So the gradient simplifies to  
\[
\boxed{\frac{\partial L}{\partial z_i} = s_i - y_i},
\]
i.e., softmax output minus target.  

**Why fuse?**  
Computing \(e^{z_j}\) can overflow for large positives or underflow for large negatives, making \(\log s_t\) unstable. A fused routine first shifts by \(\max(z)\), computes stabilized exponentials, then directly returns the gradient \(s-y\). This avoids intermediate huge numbers and ensures consistent numerical precision.

**Edge cases**  
- Very large logits → overflow; shift solves this.  
- Small batch size or all‑zero targets → division by zero avoided by direct formula.  
- Mixed‑precision: use FP32 for exponentials, then cast back to FP16.

**Optimize & communicate**  
Implement a single GPU kernel that performs the max‑shift, exponential, softmax, and subtraction in one pass; this reduces memory traffic and leverages fused multiply–add (FMA) hardware. Communicate the rationale: “We fuse because the analytical gradient is \(s-y\); by computing it directly we eliminate unstable intermediate values and get a single, highly parallelizable kernel.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
