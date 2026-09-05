---
qid: ing_279213bcff__fp__local
question: 'Explain: Handling Intentional Duplicates — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 551
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:29:40-05:00'
sources: []
---

**Why duplicates matter**

A crawler’s objective is to *collect* unique content efficiently: each HTTP request should add new information about the web. If a URL is fetched twice, the bandwidth and storage spent on that page yield zero marginal value.  
From an **information‑theoretic** view, we want to maximize the entropy of the set of retrieved documents per unit cost; duplicate fetches reduce this ratio by adding redundant bits.

**The fundamental constraint**

Let \(S\) be the set of all reachable URLs and let \(f: S \to \{0,1\}\) indicate whether a URL has been fetched. The crawler’s *policy* must satisfy

\[
\sum_{u\in S} c(u)\, f(u) \leq B
\]

where \(c(u)\) is the cost (bandwidth + storage) of fetching \(u\), and \(B\) is the budget.  
We want to maximize the **utility** function

\[
U(f)=\sum_{u\in S} w(u)\, f(u)
\]

with \(w(u)\) the intrinsic value of page \(u\). The optimal solution is a 0‑1 knapsack: fetch a URL only if it increases the ratio \(w(u)/c(u)\).

**Intentional duplicates**

Some sites deliberately serve different content under identical URLs (e.g., A/B tests, personalized ads). Treating these as true duplicates would discard useful information. The crawler must therefore **detect semantic divergence**:

1. **Hash‑by‑content**: compute a rolling hash of the body; if it differs from the stored hash for that URL, treat it as a new version.
2. **Metadata comparison**: examine `Last-Modified`, ETag, or custom headers to detect updates.

If the *semantic* content changes, we must re‑index and possibly update downstream services (search ranking, recommendation). If not, we skip fetching again, saving resources.

**Non‑obvious insight**

Many designs rely on URL canonicalization alone. The deeper principle is that **duplicate suppression should be a dynamic optimization problem**, not a static filter: the cost–benefit ratio of re‑fetching changes over time as page popularity and freshness requirements evolve. A crawler that periodically re‑evaluates \(w(u)/c(u)\) for each URL, using recent click‑through or update frequency statistics, will maintain optimal throughput while still capturing intentional content shifts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
