---
qid: ing_d9d06e7e6a__fp__local
question: How to choose a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 439
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:42:49-05:00'
sources: []
---

Choosing a CDN is an *optimization* problem: you want to minimize the **expected latency** of serving static assets while respecting budget and compliance constraints.  
Formally, for each user \(u\) at location \(l_u\), let  

\[
L(l_u)=\min_{p}\{\,t_{\text{connect}}(l_u,p)+t_{\text{fetch}}(p)\,\}
\]

where \(p\) ranges over CDN edge servers.  
The objective is \(\mathbb{E}_{u}[L(l_u)]\).  

**Why this must hold**

1. **Network geometry**: latency grows roughly with the *geodesic* distance between user and server, plus propagation delays of the back‑haul link.  
2. **Caching policy**: a CDN that stores more objects locally reduces \(t_{\text{fetch}}\) but increases storage cost; this is the classic *storage–latency* trade‑off.  
3. **Cost model**: each edge location incurs a fixed fee plus per‑GB traffic charges, so you solve a constrained knapsack problem.

**Non‑obvious insight**

Most teams pick the CDN with the most global coverage, overlooking that *regional pricing tiers* can dramatically alter the cost‑latency curve. A small shift of 5 % in edge‑server density around your high‑traffic region can reduce average latency by >30 ms while cutting monthly spend by 10–15 %.  
Thus, evaluate a CDN not just on “number of PoPs” but on *per‑region cost per RTT* and the *hit‑rate* achievable with its caching algorithm.  

In practice:  
1. Map your traffic heatmap.  
2. Query each CDN’s price for that region (fixed + per‑GB).  
3. Estimate \(L(l_u)\) using their reported edge latencies.  
4. Pick the CDN minimizing \(\mathbb{E}[L]\) under your budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
