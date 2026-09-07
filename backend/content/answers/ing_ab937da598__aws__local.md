---
qid: ing_ab937da598__aws__local
question: 'Explain: Just-in-Time Retrieval — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 415
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:54:12-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team at a media startup, we were asked to reduce latency for personalized content recommendations from ~3 s to <300 ms so that users wouldn’t abandon the app during video playback. The challenge was that our model required hundreds of feature vectors—most of which were expensive to compute on demand.

**Action – Just‑in‑Time Retrieval & Context Engineering**  
I introduced *just‑in‑time (JIT) retrieval* by building a **context engine**:

1. **Feature Cache Layer** – Redis for hot features, Amazon S3 + Athena for cold ones.  
2. **Context Graph** – Store user–item relationships in DynamoDB; use an adjacency list to pre‑fetch only relevant neighbors.  
3. **Lazy Evaluation** – The inference microservice (AWS Lambda) pulls only the subset of features that change per request, executing a *feature pipeline* on demand.

We added a lightweight **feature‑selector model** (lightGBM) that predicts which features are most predictive for each user segment, cutting feature fetches by 65 %.  

**Result**  
- Latency dropped from 3.2 s to 280 ms (93 % reduction).  
- Cost fell from $12k/month to $4k/month due to fewer compute and storage operations.  
- Engagement metrics improved: click‑through rate rose 18 %, time‑on‑page by 22 %.  

**Reflection**  
I practiced *Ownership* by mapping the entire data‑pipeline, *Dive Deep* into feature importance, and *Bias for Action* by iterating in sprints. The biggest learning was that precomputing everything isn’t always cheaper; selective JIT retrieval can outperform brute‑force caching when guided by data‑driven insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
