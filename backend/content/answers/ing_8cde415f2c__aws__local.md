---
qid: ing_8cde415f2c__aws__local
question: How do you choose k in clustering, and how do you evaluate a clustering
  when you have no labels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 423
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:28-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a recommendation engine to SageMaker Clustering for an e‑commerce catalog (~12 M items). We had no ground truth labels and needed to decide on *k* while proving business value to product owners.

**Action – Choosing *k***  
1. **Elbow + Silhouette**: Ran KMeans (SageMaker Training) for k=2…20, plotted inertia vs k and silhouette scores; the elbow appeared at k≈12 with a silhouette of 0.42.  
2. **Domain‑driven sanity check**: Cross‑referenced the resulting centroids against business categories – 10/12 clusters aligned with logical product groupings.  
3. **Cost‑impact trade‑off**: Each extra cluster added ~5 % storage and inference cost; keeping k=12 kept monthly cost < $1,200 vs $2,500 at k=20.

**Evaluation without Labels**  
*Silhouette & Davies–Bouldin* gave internal cohesion/diversity metrics.  
We then ran a **A/B test**: users served recommendations from the new clusters versus legacy rule‑based buckets; lift in click‑through rate was 18 % (p<0.01).  

**Result**  
Reduced storage by 30 %, cut recommendation latency by 22 %, and drove a $150k incremental revenue per quarter.

**Leadership Principles Highlighted**  
- **Ownership & Bias for Action**: Took end‑to‑end responsibility, iterated quickly with SageMaker pipelines.  
- **Dive Deep**: Used multiple statistical indices, cost models, and real‑world A/B data to justify *k*.  

*Bar‑raiser notes*: Look for evidence of measurable impact, a clear decision framework, and learning from the pilot when scaling.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
