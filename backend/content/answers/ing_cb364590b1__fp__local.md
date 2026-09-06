---
qid: ing_cb364590b1__fp__local
question: 'Explain: 2.1 Traffic Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 578
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:35-05:00'
sources: []
---

### Why we need traffic estimates

When designing a music‑streaming service, the *cost* of serving a request is not linear: bandwidth, caching, and compute scale sub‑exponentially but with large fixed costs (CDN nodes, database replicas). To allocate resources economically we must predict how many **unique streams** a user will generate over time.

### Fundamental problem

Let  
- \(U\) = set of users,  
- \(S_u(t)\) = number of songs user \(u\) plays in week \(t\),  
- \(C(s)\) = cost to stream song \(s\).

We want \(\displaystyle E[\text{total cost}] = \sum_{u}\sum_{t}E[C(S_u(t))]\).  
Since streaming costs are dominated by network and storage, we approximate \(C(s)\approx c\) (constant per song). Thus the problem reduces to estimating \(\mathbb{E}[S_u(t)]\).

### Estimation from historical data

For each user \(u\), compute:
1. **Daily play count** \(p_{u,d}\).
2. Fit a Poisson process with rate \(\lambda_u = \frac{1}{|D|}\sum_d p_{u,d}\).  
   The Poisson assumption captures burstiness (songs are played in clusters) while remaining tractable.

Then, the expected weekly traffic for user \(u\) is \(\hat T_u = 7\lambda_u\).

### Scaling to a cohort

Cluster users by activity level using k‑means on \((\lambda_u, \text{avg session length})\). For each cluster \(k\), compute aggregate rate \(\Lambda_k\). The total traffic estimate for the platform is:
\[
\hat T = |U| \sum_k w_k\, 7\Lambda_k,
\]
where \(w_k\) is the fraction of users in cluster \(k\).

### Non‑obvious insight

Most designs stop at *average* streams per user. However, because CDN cache hit rates drop sharply once a song’s request frequency falls below a threshold, we should **weight** traffic by the probability that a song lands in cache:
\[
P_{\text{cache}}(s) = 1 - e^{-\alpha \lambda_s},
\]
with \(\alpha\) tuned from empirical cache statistics. Incorporating \(P_{\text{cache}}\) into \(\hat T_u\) yields a more realistic cost, especially for long‑tail songs that dominate storage but rarely hit caches.

---

*Word count: 216*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
