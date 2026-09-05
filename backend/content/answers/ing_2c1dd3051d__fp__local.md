---
qid: ing_2c1dd3051d__fp__local
question: GPU cold starts take minutes. How do you autoscale an inference fleet anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 613
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:38-05:00'
sources: []
---

**Why GPU cold‑starts hurt inference fleets**

A GPU model loader is a *stateful* operation that must download weights, compile kernels and allocate memory.  
That startup cost \(C\) (minutes) dominates the latency budget of an otherwise fast service.  If you simply spin up a new instance when the queue length exceeds a threshold, the first few requests will be delayed until the GPU is ready—exactly what “cold start” means.

**Autoscaling from first principles**

1. **Model the request stream** as a Poisson process with rate \(\lambda(t)\).  
2. **Queue‑length dynamics** obey the M/M/1 queue: \(Q(t+dt)=Q(t)+\lambda dt-\mu dt\), where \(\mu=1/E[\text{service time}]\).  
3. The *optimal* number of GPUs, \(N^*\), solves  
   \[
   N^*=\left\lceil \frac{\lambda}{\mu}\right\rceil ,
   \]
   but this ignores the startup cost.

4. Introduce a *pre‑warm budget*: keep an extra “reserve” instance that is already loaded for a time \(T_{\text{pre}}\).  
5. Compute the probability that a new request will hit a cold GPU:  
   \[
   P_{\text{cold}} = e^{-\lambda T_{\text{pre}}}.
   \]
6. The *effective* service rate becomes \(\mu_{\text{eff}}=\mu(1-P_{\text{cold}})\).  
7. Replace \(\mu\) in the queue equation with \(\mu_{\text{eff}}\); solve for \(N^*\).

**Practical autoscaling rule**

- **Predictive arrival rate**: use a rolling‑window estimator (e.g., exponential smoothing) to forecast \(\lambda(t+T_{\text{pre}})\).  
- **Reserve one pre‑warm GPU per predicted request surge**: \(N_{\text{reserve}} = \lceil \lambda T_{\text{pre}}\rceil\).  
- **Spin up new GPUs only when the current queue exceeds a *dynamic* threshold** derived from the above equation.

**Non‑obvious insight**

The key is that *pre‑warming does not merely reduce latency—it changes the effective service rate*.  By treating pre‑warm instances as part of the server pool with a higher “availability” factor, you convert a deterministic startup delay into a probabilistic reduction in queue length.  This turns the cold‑start problem from a hard bottleneck into an optimizable parameter in your scaling policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
