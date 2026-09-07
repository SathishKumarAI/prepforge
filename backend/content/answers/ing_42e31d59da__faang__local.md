---
qid: ing_42e31d59da__faang__local
question: 'Explain: 8.5.3. Implementation from Scratch ¶ — 8.5. Batch Normalization
  \u2014 Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 770
total_tokens: 1029
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:42-05:00'
sources: []
---

**Clarify**

You want a concise walk‑through of how *Batch Normalization* is implemented from scratch in *Dive into Deep Learning* (1.0.3).  
Assumptions: we’re working with NumPy, training a fully‑connected layer, and the reader knows the forward/backward formulas for BN.

**Approach**

1. **Forward pass** – compute mean & variance over each mini‑batch; normalize activations; scale by learnable γ and shift by β.  
2. **Maintain running estimates** (µₜ, σ²ₜ) for inference.  
3. **Backward pass** – derive gradients w.r.t. input, γ, β using the chain rule; accumulate them across the batch.

**Depth**

```python
class BatchNorm:
    def __init__(self, dim, eps=1e-5, momentum=0.9):
        self.gamma = np.ones(dim)
        self.beta  = np.zeros(dim)
        self.eps   = eps
        self.mom   = momentum
        self.running_mean = np.zeros(dim)
        self.running_var  = np.ones(dim)

    def forward(self, x, training=True):
        if training:
            mu      = x.mean(axis=0)
            var     = x.var(axis=0)
            x_hat   = (x - mu) / np.sqrt(var + self.eps)
            out     = self.gamma * x_hat + self.beta
            # cache for backward
            self.cache = (x, x_hat, mu, var)
            # update running stats
            self.running_mean = self.mom*self.running_mean + (1-self.mom)*mu
            self.running_var  = self.mom*self.running_var  + (1-self.mom)*var
        else:
            x_hat   = (x - self.running_mean) / np.sqrt(self.running_var + self.eps)
            out     = self.gamma * x_hat + self.beta
        return out

    def backward(self, dout):
        x, x_hat, mu, var = self.cache
        N, D = x.shape
        std_inv = 1.0/np.sqrt(var+self.eps)

        dbeta = dout.sum(axis=0)
        dgamma = (dout * x_hat).sum(axis=0)

        dx_hat = dout * self.gamma
        dvar   = (-0.5*(dx_hat * (x-mu)).sum(axis=0)) * std_inv**3
        dmu    = -(dx_hat*std_inv).sum(axis=0) + dvar*(-2*np.mean(x-mu, axis=0))

        dx = dx_hat*std_inv + dvar*2*(x-mu)/N + dmu/N

        return dx, dgamma, dbeta
```

**Edge Cases**

- Small batch sizes → variance close to zero; `eps` protects division.  
- Inference mode must use running statistics; otherwise gradients vanish.  
- Training with `batchsize=1` makes BN ineffective.

**Optimize & Communicate**

*Optimizations*: vectorize all ops, cache intermediate results only once, avoid recomputing mean/var per sample.  
*Narration*: “During training we normalize every feature within the mini‑batch, then re‑scale it with learnable parameters so the layer can still represent the original function if needed. The backward pass uses the cached statistics to compute exact gradients; this is critical for stable training.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
