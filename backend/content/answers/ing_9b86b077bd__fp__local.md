---
qid: ing_9b86b077bd__fp__local
question: What is the 3-2-1 rule for backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 496
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:17-05:00'
sources: []
---

### The 3‑2‑1 Backup Principle

**Problem:** In data‑centric systems, a single point of failure (hardware, software, human error) can erase years of work in seconds. The goal is to minimize the *expected cost* of loss while keeping storage and operational overhead reasonable.

#### Derivation from first principles
Let  
- \(p\) = probability that an incident destroys data per unit time,  
- \(L\) = monetary value lost if data vanish,  
- \(C_s\), \(C_t\), \(C_r\) = costs of storing a copy on *s*torage media, *t*ransferring it off‑site, and *r*ecovering it.

The expected loss over one period is  
\[
E = pL - (1-p)(C_s + C_t + C_r).
\]
Minimizing \(E\) requires a strategy that **reduces \(p\)** most effectively per unit of cost. Empirically, each additional copy multiplies the chance that at least one survives: with two copies on different media and a third stored elsewhere, the probability that *all* fail is roughly \((p_{\text{media}})^3\), which drops dramatically.

#### The rule
- **Three** independent copies of every critical dataset.  
- **Two** distinct storage technologies (e.g., magnetic disks + flash).  
- **One** copy off‑site (cloud or another physical location).

This satisfies the inequality \(p_{\text{all fail}} \ll p\) while keeping \(C_s+C_t+C_r\) modest.

#### Deep insight
Most people treat the rule as a checklist, but its true power lies in *redundancy diversification*. By separating media and geography, we convert correlated failure modes (a single power surge or a regional outage) into largely independent events. This turns a **linear** probability of loss into an **exponential** decay—an optimization principle where marginal redundancy yields disproportionate risk reduction.

In practice, the 3‑2‑1 rule is not just about quantity; it’s a *probabilistic budget* that balances cost against acceptable risk, grounded in the mathematics of independent failure probabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
