---
qid: ing_6b3fd393a1__faang__local
question: 'Explain: Neural Network Optimizers from Scratch in Python | Towards Data
  Science'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 783
total_tokens: 1019
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:14-05:00'
sources: []
---

**Clarify**  
You’re asking how to build a neural‑network optimizer (e.g., SGD, Adam) from scratch in pure Python.  
Assumptions:  
* We already have a simple feed‑forward network with forward/backward passes that give gradients.  
* Only CPU execution; no NumPy or autograd libraries—everything is manual lists/tuples.

**Approach**  
1. Create an `Optimizer` base class that stores hyper‑parameters (`lr`, `beta1`, `beta2`, etc.).  
2. Implement a `step(params, grads)` method: update each weight matrix/vector in place.  
3. For SGD: `w ← w – lr * g`.  
4. For Adam: maintain moving averages `m` and `v`; bias‑correct them; apply the update formula.

**Depth**  
```python
class Adam:
    def __init__(self, lr=1e-3, beta1=0.9, beta2=0.999, eps=1e-8):
        self.lr, self.beta1, self.beta2, self.eps = lr, beta1, beta2, eps
        self.t, self.m, self.v = 0, None, None

    def step(self, params, grads):
        if self.m is None:
            self.m = [{k: [[0]*len(v) for _ in v] for k,v in p.items()} for p in params]
            self.v = [{k: [[0]*len(v) for _ in v] for k,v in p.items()} for p in params]

        self.t += 1
        for p, g in zip(params, grads):
            for k in p:
                # m_t
                self.m[k] = [[self.beta1 * pm + (1-self.beta1)*gm 
                              for pm, gm in zip(pm_row, gm_row)]
                             for pm_row, gm_row in zip(self.m[k], g[k])]
                # v_t
                self.v[k] = [[self.beta2 * pv + (1-self.beta2)*(gg**2)
                              for pv, gg in zip(pv_row, gg_row)]
                             for pv_row, gv_row in zip(self.v[k], g[k])]

                m_hat = [[m/(1-self.beta1**self.t) for m in row] for row in self.m[k]]
                v_hat = [[v/(1-self.beta2**self.t) for v in row] for row in self.v[k]]

                # parameter update
                p[k] = [[w - self.lr * mh / (vh**0.5 + self.eps)
                         for w, mh, vh in zip(w_row, m_hat_row, v_hat_row)]
                        for w_row, m_hat_row, v_hat_row in zip(p[k], m_hat, v_hat)]
```
Complexity: O(N) per step (N = number of parameters). Memory: O(N) for `m` and `v`.

**Edge Cases**  
* Zero gradients → no update.  
* Very small learning rates → numerical underflow; clip or use eps.  
* Large batches → overflow in v‑update; use float64.

**Optimize & Communicate**  
- Vectorize inner loops with NumPy to cut runtime by ~10×.  
- Add momentum variants for SGD (`SGD + Nesterov`).  
- Provide unit tests: check weight decay, learning rate schedules, and convergence on a toy regression problem.  

This skeleton shows the core mechanics of an optimizer while keeping the explanation concise enough for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
