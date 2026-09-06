---
qid: ing_cbd628e0b4__fp__local
question: 'Explain: Redundancy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 408
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:37-05:00'
sources: []
---

**Redundancy in ML systems: a first‑principles view**

The *fundamental problem* is that real deployments run on hardware and networks that fail with probability p>0. If an ML service must keep latency ≤L with probability ≥q, we need to guarantee that the *system failure rate* (all replicas down) stays below 1−q.  
For a single replica, failure probability = p. For n identical replicas in parallel, the probability that *every* replica fails is pⁿ (assuming independence). Thus

\[
P_{\text{down}}=p^n \le 1-q
\;\Rightarrow\;
n \ge \frac{\log(1-q)}{\log p}.
\]

This simple inequality shows why redundancy “must work” the way it does: adding copies multiplies survivability geometrically, not linearly.  
From an **optimization** lens, we’re trading cost (extra compute/storage) against reliability (lower variance in latency). The objective is to minimize expected loss = C·n + λ·P_{\text{down}}, where C is per‑replica cost and λ penalizes downtime.

A subtle insight often missed: *redundancy should be applied at the right abstraction*. If we duplicate only the inference endpoint but keep a single pre‑processor, a failure in that component still kills all replicas. The optimal design duplicates end‑to‑end pipelines—data ingestion → feature extraction → model inference—so each replica is truly independent.  

**Preparation tip:** practice deriving n from p and q for various scenarios (batch vs streaming) and discuss trade‑offs with cost and latency constraints. This shows you understand both the math and the engineering rationale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
