---
qid: ing_e6f3b0c70d__fp__local
question: 'Explain: Scaling Different Components — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 610
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:10:10-05:00'
sources: []
---

**Why we scale each component separately**

The core goal of an ML pipeline is to minimize *expected loss* \(L(\theta)=\mathbb{E}_{(x,y)\sim D}[ \ell(f_\theta(x),y)]\) under a fixed budget of compute, storage, and latency. Every component—data ingestion, feature extraction, model training, inference—contributes additively to the *total cost* \(C_{\text{tot}}=C_{\text{ingest}}+C_{\text{feat}}+C_{\text{train}}+C_{\text{infer}}\). To achieve a target performance with minimal budget, we must allocate resources so that each marginal benefit \(\partial L/\partial C_i\) is equalized; otherwise, over‑provisioning one part wastes capacity while under‑provisioning another bottlenecks the system.

**Deriving the scaling rule**

1. **Ingestion**: The data rate \(r\) must exceed the downstream throughput \(\tau_{\text{feat}}\); otherwise the buffer grows unbounded.  
2. **Feature extraction**: If feature latency \(\lambda_{\text{feat}}\) exceeds the time to process an incoming sample, the system stalls; thus we scale compute so that \(\lambda_{\text{feat}} \le 1/r\).  
3. **Training**: Stochastic gradient descent converges in \(O(1/\epsilon)\) steps; each step costs \(C_{\text{step}}\). Parallelizing over \(p\) workers reduces wall‑clock time by roughly a factor \(p\), but communication overhead \(\alpha p + \beta n\) (where \(n\) is model size) grows super‑linearly. Hence we choose \(p\) to minimize \(T_{\text{train}}(p)=C_{\text{step}}\frac{O(1/\epsilon)}{p}+\alpha p+\beta n\).  
4. **Inference**: Latency constraints dictate a target \(L_{\max}\); scaling servers reduces queueing delay according to Little’s Law, but each added instance incurs fixed cost \(c_s\). The optimal number of inference nodes satisfies \(\partial L/\partial c_s = 0\).

**Non‑obvious insight**

Often the *communication cost* \(\beta n\) dominates as models grow; scaling compute alone can backfire. A principled approach is to **shard the model** (model parallelism) rather than merely increasing GPUs, thereby keeping \(\beta n\) manageable and preserving the linear speed‑up from adding workers. This trade‑off—between computation and communication—is rarely highlighted but is critical for truly scalable ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
