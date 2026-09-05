---
qid: vq_4659fd2a48__fp__local
question: What are SVM's different Kernels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 563
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:33:11-05:00'
sources: []
---

**SVM kernels from first principles**

An SVM seeks a hyperplane that maximally separates two classes in some feature space \(\mathcal{F}\). The *kernel trick* lets us compute inner products \(K(x_i,x_j)=\langle \phi(x_i),\phi(x_j)\rangle_{\mathcal{F}}\) without explicitly mapping to \(\mathcal{F}\). Thus the choice of kernel is equivalent to choosing a geometry for the data: the shape of the decision boundary in input space.  

| Kernel | Feature map intuition | Typical use |
|--------|-----------------------|-------------|
| **Linear** \(K(x,y)=x^\top y\) | Identity mapping; hyperplane remains flat. | High‑dimensional sparse text, when classes are linearly separable. |
| **Polynomial** \(K(x,y)=(\gamma x^\top y + r)^d\) | Implicitly maps to all monomials up to degree \(d\); controls curvature via \(\gamma,r,d\). | Non‑linear but low‑degree interactions, e.g., image patches. |
| **Radial Basis Function (RBF)** \(K(x,y)=\exp(-\gamma\|x-y\|^2)\) | Maps to infinite‑dimensional space; each training point becomes a “bump”. | General purpose when no prior structure is known. |
| **Sigmoid** \(\tanh(\kappa x^\top y + c)\) | Resembles neural net activation; can approximate shallow networks. | Historically used, now rarely due to non‑positive definiteness. |

*Why they work*:  
- Linear: the decision surface in input space is a hyperplane—optimal when classes are already separable.  
- Polynomial: higher‑order terms allow bending around data clusters while still keeping the optimization convex.  
- RBF: its Gaussian shape guarantees locality; points far apart influence each other weakly, preserving global structure yet capturing local patterns.  

**Non‑obvious insight:**  
The *effective dimensionality* of a kernel is not fixed—it depends on both the kernel parameters and the data distribution. For instance, an RBF with very large \(\gamma\) behaves almost like a nearest‑neighbor classifier (high effective dimension), while small \(\gamma\) yields a smoother, lower‑dimensional manifold. Thus tuning \(\gamma\) is as much about controlling model capacity as it is about regularization; over‑large values can lead to overfitting even if the optimization remains convex.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
