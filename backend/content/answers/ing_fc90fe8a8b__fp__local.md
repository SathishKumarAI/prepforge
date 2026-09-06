---
qid: ing_fc90fe8a8b__fp__local
question: 'Explain: Daily Storage Calculation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 632
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:56:27-05:00'
sources: []
---

### Why we need a *daily storage estimate*  
When designing a photo‑sharing platform, the chief operational risk is disk exhaustion: a sudden spike in uploads can fill up a rack before the next hardware refresh. To guard against this, we must predict **how many bytes will be added per day** and budget accordingly.

### The fundamental problem  
Each user contributes a stochastic number of *assets* (photos, videos) that differ in size, format, and retention policy. We want an expectation

\[
E[\text{bytes/day}] = \sum_{u=1}^{N}\;\mathbb{E}[B_u]
\]

where \(B_u\) is the daily byte contribution of user \(u\).

### Why the linear‑additive model works  
- **Independence**: uploads by distinct users are largely independent; a single user’s activity doesn’t influence another’s.
- **Linearity of expectation**: regardless of distribution, \(E[\sum B_u] = \sum E[B_u]\).
- **Granularity**: per‑user averages can be aggregated to the global level with minimal loss.

### Deriving \(E[B_u]\)  
For a single user:

1. **Upload rate** \(\lambda\): average number of uploads per day (Poisson assumption for tractability).  
2. **Asset size distribution** \(S\): e.g., a mixture of photos (~3 MB) and videos (~30 MB).  
3. **Retention factor** \(r\): fraction of assets kept permanently versus pruned.

Then

\[
E[B_u] = \lambda \times E[S] \times r
\]

where \(E[S]\) is the mean asset size from the mixture distribution.

### Aggregating and scaling  
With \(N\) users, the total expected daily bytes:

\[
E[\text{bytes/day}] = N \cdot \lambda \cdot E[S] \cdot r
\]

We can plug in realistic numbers:  
- \(N=1{,}000{,}000\) active users  
- \(\lambda=0.5\) uploads/user/day  
- \(E[S]=10\,\text{MB}\) (weighted average)  
- \(r=0.9\) (90 % retained)

Result: \(45\;\text{TB/day}\).

### Non‑obvious insight  
**Retention dominates the storage curve, not just upload volume.** A small change in pruning policy (e.g., dropping 10 % of videos after a year) can reduce long‑term capacity by ~10 %, which is often cheaper than scaling raw storage. Thus, modeling \(r\) accurately—through user churn and content lifecycle analysis—is as critical as estimating upload rates.

---  

*This calculation gives engineers a clean, principled way to size disks, plan for growth, and evaluate retention strategies before they hit production.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
