---
qid: ing_e55014f0dd__fp__local
question: 'Explain: Now coming to the non-functional requirements the'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 509
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:18-05:00'
sources: []
---

### Why Non‑Functional Requirements (NFRs) Matter for ML

When we build a predictive model, **the functional goal is to minimize error on unseen data**.  
But that goal alone does not guarantee *deployability*: the system must also be fast, reliable, secure, and fair.  
These are the NFRs—constraints that shape how the solution behaves rather than what it predicts.

#### From Optimization to Constraints

1. **Resource budget** – In a stochastic gradient descent loop, each epoch consumes CPU/GPU time and memory.  
   We model this as an *optimization* with constraints:  
   \[
   \min_{\theta}\; L(\theta) \quad\text{s.t.}\quad T(\theta)\leq T_{\max},\; M(\theta)\leq M_{\max}
   \]
   where \(T\) is latency and \(M\) memory.

2. **Robustness** – The loss surface may contain sharp minima that generalize poorly.  
   Adding a *regularization* term (e.g., weight decay, dropout) penalizes such minima, effectively enforcing the NFR of robustness.

3. **Fairness & privacy** – Constraints like differential privacy (\(\epsilon\)-DP) or fairness metrics (equalized odds) are imposed on the learning objective:
   \[
   \min_{\theta}\; L(\theta)\quad\text{s.t.}\quad D_{\mathrm{KL}}(P_{Y|A=0}||P_{Y|A=1})\leq \delta
   \]
   Here, \(A\) is a protected attribute.

#### One Non‑Obvious Insight

Most practitioners tune hyperparameters only for accuracy.  
**The *shape* of the loss landscape—its curvature and smoothness—directly determines NFR compliance**.  
Sharp minima yield high variance predictions (violating robustness), while flat minima promote generalization but may be computationally expensive to find.  
Thus, a careful balance between *optimization trajectory* and *landscape geometry* is essential: techniques like stochastic weight averaging or cosine annealing not only improve accuracy but also implicitly satisfy latency and stability constraints.

In short, NFRs are the side‑constraints that transform an optimal mathematical solution into a usable, trustworthy system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
