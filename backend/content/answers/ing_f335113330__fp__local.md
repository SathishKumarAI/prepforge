---
qid: ing_f335113330__fp__local
question: 'Explain: 6.2 Newsfeed Generation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 532
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:36:08-05:00'
sources: []
---

## 6.2 Newsfeed Generation – Why the System Must Work This Way

**The problem**: every user should see a personalized stream of posts that maximizes *engagement* (likes, comments, shares) while respecting freshness and relevance. The system must deliver ~10⁹ posts per day to billions of users with <1 s latency.

### 1. Fundamental objective  
We formalize the goal as maximizing an **expected utility** U(u,p) for user *u* and post *p*.  
U = f(relevance, recency, popularity, diversity).  
This is a classic *bandit* problem: we must balance exploitation (high‑utility posts) against exploration (new content).

### 2. Why the three‑stage pipeline?  

1. **Candidate Generation** – A low‑cost filter that uses user–profile similarity and follow graph to produce ~10⁴ candidates.  
   *Why*: the follow graph is a sparse, high‑dimensional manifold; sampling from it preserves locality (the “friendship principle”) while keeping compute manageable.

2. **Scoring & Ranking** – A learning‑to‑rank model that scores each candidate with U(u,p).  
   *Why*: ranking must be linear‑time in the candidate set; we cannot afford a full pairwise comparison across all posts, so we use a neural net or gradient‑boosted trees trained on click data.

3. **Personalization & Caching** – The top‑k results are cached per user and served with minimal recomputation.  
   *Why*: caching exploits temporal locality; most users view the same top stories repeatedly, so precomputing saves bandwidth.

### 3. Non‑obvious insight  
The **follow graph is not a tree but a directed hypergraph**: a single post can “fan‑out” to many followers, and those followers may share the post with their own networks. Treating it as a hypergraph allows us to propagate *content popularity* across overlapping follower communities without double‑counting, which boosts relevance for niche topics that would otherwise be invisible.

---

> **Bottom line**: The feed is an online optimization problem on a massive directed hypergraph; the three‑stage pipeline turns an intractable combinatorial search into a linear‑time, learnable ranking while preserving freshness and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
