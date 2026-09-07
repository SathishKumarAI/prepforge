---
qid: ing_e37ea286ed__faang__local
question: 'Explain: NewsFeed Service — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 487
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:28:00-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *News Feed* service for a social‑media platform (think Facebook/Instagram).  
Key assumptions I’d confirm:  

1. What data must the feed show? Posts, stories, ads, reels, etc.?  
2. How real‑time is “freshness” – seconds or minutes?  
3. What user actions affect ranking (likes, comments, shares, time spent)?  
4. Is the service read‑heavy or write‑heavy?  
5. Expected scale (billions of users, terabytes of content).  

**Approach**  
1. **Data ingestion** – stream posts to a *write‑ahead log* and update per‑user candidate queues.  
2. **Candidate generation** – pull recent posts from friends/brands + personalized ads.  
3. **Ranking engine** – compute a score (ML model) using features like recency, interaction likelihood, relevance.  
4. **Serving layer** – cache top‑k items per user in Redis/Memcached; fallback to a distributed search index.  

**Depth**  
- *Candidate size* ~ 10× expected feed length to ensure diversity.  
- ML model: gradient‑boosted trees or deep neural nets trained offline, served via TensorFlow Serving with inference latency < 5 ms.  
- Use *negative sampling* for efficient training.  
- Store user graph in a graph database (Neo4j) and materialize friend lists in cache.  

**Edge Cases**  
- New users: fallback to popular posts + cold‑start model.  
- Spam/abuse: flagging pipeline with human review; weight decay.  
- Offline mode: serve cached feed, mark unsynced actions for later replay.  

**Optimize & Communicate**  
- Batch updates to reduce write amplification.  
- Use *eventual consistency* for ranking – acceptable latency trade‑off.  
- Monitor key metrics (CTR, dwell time) and A/B test new features.  
Explain this flow to interviewers: start from ingestion → ranking → serving, highlighting scalability, latency, and how ML feeds into ranking. This demonstrates clear problem framing, technical depth, and practical engineering insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
