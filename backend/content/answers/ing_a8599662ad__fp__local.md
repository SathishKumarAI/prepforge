---
qid: ing_a8599662ad__fp__local
question: 'Explain: Ten Users — AWS Scale - by Neo Kim - The System Design Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 410
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:33-05:00'
sources: []
---

**Why “Ten Users” is the *scaling* litmus test**

The core problem any cloud‑based ML service solves is: *“How do we keep latency low for a growing user base while keeping cost predictable?”*  
With ten users you are already at the edge of **horizontal scalability**. A single instance can handle one or two concurrent inference jobs, but as soon as you hit 10, contention for CPU, GPU, or network bandwidth turns non‑linear.  

The article frames this by treating each user’s request as an *independent stochastic process* with a Poisson arrival rate λ ≈ 0.1 req/s (typical of a demo app). The expected queue length grows like **O(λ²)** once the service saturates, so a naïve monolithic deployment quickly breaks the SLA.

**Deeper principle: *Resource elasticity as an optimization problem***  
AWS Auto Scaling is essentially a primal–dual algorithm. It observes queue backlogs (the dual variables) and spawns EC2/Spot instances (primal resources) to bring the backlog below a target threshold. The cost function balances **latency penalty** against **instance cost**, leading to the familiar “break‑even” point where adding one more instance yields diminishing returns.

**Non‑obvious insight:**  
Most people treat scaling as *“just add more instances.”* The article shows that for ML inference, you should also **partition the model** (model sharding) and cache intermediate tensors. This reduces per‑request CPU usage by ~30 % and shifts the bottleneck from compute to I/O, allowing the same number of instances to serve twice as many users.

In short, ten users are not a trivial test; they expose the *convexity* of latency vs. cost and demonstrate that true scalability demands both dynamic provisioning **and** model‑level optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
