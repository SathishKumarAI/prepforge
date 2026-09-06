---
qid: ing_8dc06eb46e__fp__local
question: 'Explain: High-Level System Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 437
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:25-05:00'
sources: []
---

**Why a crawler needs structure**

A crawler is an *optimization* problem: given finite bandwidth and storage, maximize the number of unique pages read while respecting politeness constraints (robots.txt, rate limits).  
The objective can be formalized as  

\[
\max_{\mathcal{C}\subseteq \text{URL space}} |\mathcal{C}|\quad
\text{s.t. }\sum_{u\in \mathcal{C}}\frac{1}{r_u}\leq B,\;\forall u
\]

where \(r_u\) is the required delay for host \(u\) and \(B\) is the bandwidth budget.  
Solving this requires three sub‑problems:

| Sub‑problem | Design component | Why it works |
|-------------|------------------|--------------|
| **Seed generation** | *URL frontier* (priority queue) | Provides a tractable state space; priorities encode freshness or link‑depth heuristics, turning the global optimization into a greedy local one. |
| **Fetching** | *Politeness manager + worker pool* | Enforces per‑host delay \(r_u\), ensuring the bandwidth constraint is respected while parallelism maximizes throughput. |
| **Parsing & storage** | *Parser → deduplication → persistent store* | Eliminates cycles and redundant work; probabilistic Bloom filters keep memory usage linear in visited set size, a direct application of information‑theoretic compression. |

**Non‑obvious insight**

The *frontier is not a simple queue*.  By attaching a *dynamic score* that decays with time and increases with link popularity, the crawler implicitly performs an online multi‑armed bandit: it balances exploration (new sites) against exploitation (known high‑value hosts).  This turns the static “crawl breadth first” strategy into an adaptive algorithm that maximizes long‑term coverage under resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
