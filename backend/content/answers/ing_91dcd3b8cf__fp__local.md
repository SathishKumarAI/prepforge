---
qid: ing_91dcd3b8cf__fp__local
question: 'Explain: LinkedIn Data Structure Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 729
total_tokens: 901
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:16-05:00'
sources: []
---

**LinkedIn “Recent Questions” – the problem from FAANG interviews**

> *Given a user’s feed of questions (or posts) with timestamps, return the *k* most recent ones that are still relevant to a target user.*

---

### 1. Why this matters

On LinkedIn, relevance is not just recency:  
- The question must be posted by someone the user follows **or** in a group they belong to.  
- It must have received at least *m* up‑votes (to filter noise).  

Thus we need a data structure that can answer:

```
query(user u, k) → list of q1…qk
```

in sub‑linear time even when the universe contains millions of questions.

---

### 2. Deriving the solution

#### A. Observations

1. **Temporal locality** – older posts are less likely to be requested again; we can discard them after a sliding window *W* (e.g., last 24 h).  
2. **Sparse relevance graph** – each user follows few others compared with total users, so the adjacency list is sparse.  
3. **Ranking function** – recency dominates, then up‑votes.  

#### B. Data structures

| Requirement | Structure | Why |
|-------------|-----------|-----|
| Store all posts in order of time | **Time‑ordered doubly linked list (or deque)** | Allows O(1) removal of stale items from the front. |
| Fast lookup of a user’s followees/groups | **Hash set per user** | O(1) membership test. |
| Efficient retrieval of top‑k recent posts for a user | **Min‑heap of size k per query** | We only keep the best candidates; heap operations are O(log k). |

#### C. Algorithm

```text
query(u, k):
  heap = empty min-heap (size ≤ k)
  for p in time_list.tail … head:          // newest first
      if p.timestamp < now - W: break       // sliding window cutoff
      if p.author ∈ follows[u] or p.group ∈ groups[u]:
          score = α * recency(p) + β * upvotes(p)
          push heap with (score, p)
          if heap.size > k: pop smallest
  return heap sorted descending
```

*Time complexity*: In the worst case we scan all recent posts, but in practice the early break and sparse relevance cut the loop to O(k log k + r) where *r* is the number of relevant candidates.  

---

### 3. Non‑obvious insight

**Why a global time list beats per‑user queues**  
If we maintained a separate priority queue for every user, inserting a new post would require updating all followers’ queues – O(followers). By keeping a single global deque and filtering on demand, we amortize the cost over many queries. The only expensive part is the scan of recent posts, which is mitigated by the sliding window and relevance filter.

---

**Bottom line:**  
The FAANG “Recent Questions” problem reduces to maintaining a *temporal* list for fast eviction, sparse adjacency sets for relevance, and a small heap per query to enforce ranking. This design satisfies both time‑sensitivity and scalability requirements that LinkedIn’s production systems demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
