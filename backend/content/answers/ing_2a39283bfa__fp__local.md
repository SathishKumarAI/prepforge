---
qid: ing_2a39283bfa__fp__local
question: 'Q120: Request-level model routing just went mainstream: one production
  router reports frontier quality at roughly 60% lower cost. Design the router. Where
  do the labels come from, and how do you avoid feedback loops?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 764
total_tokens: 967
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:45-05:00'
sources: []
---

### From “Where a request goes” to a low‑cost frontier

**Problem statement**  
A single *production router* must decide, for every incoming request, which backend (model variant, data shard, or inference pipeline) will yield the highest expected quality under a hard latency/throughput budget. The cost of routing decisions (CPU, memory, network hops) is non‑negligible; we want to reduce it by ~60 % compared with per‑request micro‑services.

**Why a *probabilistic frontier* works**  
We model each candidate backend \(b\) as a random variable \(Q_b \sim \mathcal{N}(\mu_b, \sigma_b^2)\), where \(\mu_b\) is the expected quality (e.g., BLEU, F1) and \(\sigma_b\) captures uncertainty from limited data or non‑stationarity. The *frontier* consists of those \(b\) that are not dominated in both mean and variance:  
\[
\mathcal{F} = \{ b : \nexists\,c\neq b \text{ with }\mu_c \ge \mu_b,\,\sigma_c^2 \le \sigma_b^2\}.
\]
Choosing from \(\mathcal{F}\) guarantees that no other backend offers both higher mean quality and lower variance. The router samples a single backend from \(\mathcal{F}\) according to a cost‑aware distribution \(P(b|c)\propto \exp(-\lambda\,\text{cost}_b)\), where \(\lambda\) tunes the trade‑off.

**Label generation (ground truth)**  
Labels come from *online A/B tests* on a small, statistically powered cohort. Every request is duplicated to two backends: one chosen by the current router and one random control. The downstream evaluation service records quality metrics (e.g., user engagement or automated scores). These outcomes are then used to update \(\mu_b,\sigma_b\) via Bayesian online learning:
\[
\mu_b^{(t+1)} = \frac{n_b\,\mu_b^{(t)} + q}{n_b+1},\quad
\sigma_b^{2(t+1)} = \frac{n_b\,(\sigma_b^2+\mu_b^2) + q^2}{n_b+1} - (\mu_b^{(t+1)})^2.
\]
Because the control arm is randomized, bias is eliminated and the frontier remains well‑grounded.

**Avoiding feedback loops**  
A naïve router that always picks the best‑performing backend will starve others, causing their statistics to drift upward (the *rich get richer* effect). We mitigate this by:

1. **Reservoir sampling of control requests** – keep a fixed fraction \(p\) of traffic routed uniformly at random regardless of frontier status.
2. **Stale‑value decay** – each backend’s \(\mu_b,\sigma_b\) is exponentially smoothed with a decay factor \(\gamma<1\), ensuring that outdated evidence gradually loses influence.
3. **Exploration bonus** – add \(\beta/\sqrt{n_b}\) to \(\mu_b\) (UCB style) so under‑sampled models get a higher chance of being selected.

These mechanisms guarantee *no single backend dominates* and the router continually refines its frontier without collapsing into a self‑reinforcing loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
