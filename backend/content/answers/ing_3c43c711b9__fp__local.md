---
qid: ing_3c43c711b9__fp__local
question: 'Explain: Network Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 472
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:37-05:00'
sources: []
---

**Network‑Failure Availability: A First‑Principles View**

At its core, a distributed system is a *stochastic process* that must keep delivering service despite random edge failures.  
Let \(F(t)\) be the event “the network link fails at time \(t\).”  The probability of a successful request over a path of length \(L\) is
\[
P_{\text{succ}} = \prod_{i=1}^{L}(1-p_i),
\]
where \(p_i=P(F_i)\).  
Because the product shrinks exponentially, even modest link reliabilities demand *redundancy* to maintain high availability.  

Redundancy is not just “copy‑and‑paste”; it follows from **reliability theory’s minimal cut sets**: a set of links whose simultaneous failure disconnects the system.  The probability that any cut fails is bounded by
\[
P_{\text{cut}} \le \sum_{C} \prod_{i\in C} p_i.
\]
Designing for *k‑out‑of‑n* paths guarantees that only when more than \(k-1\) links fail does the system go down, yielding a mathematically provable lower bound on availability.

A subtle insight: **link failures are correlated by shared physical media** (e.g., a fiber cut).  If we treat each link as independent, we over‑estimate availability. The solution is *geo‑diversity*: place redundant paths in distinct topologies so that the joint failure probability is multiplicative rather than additive.

In practice, this means:

1. **Measure \(p_i\)** for every hop using real traffic data.  
2. **Identify minimal cuts** and enforce at least \(k\) disjoint routes.  
3. **Diversify infrastructure** to break correlation.  

By grounding availability in probability theory and topology, we ensure that the system truly withstands network failures rather than merely hoping they don’t happen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
