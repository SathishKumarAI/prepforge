---
qid: ing_23d4aabbb9__faang__local
question: 'Explain: Product — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 449
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:29-05:00'
sources: []
---

**Clarify**  
You’re asking how *Glean* (a knowledge‑search platform) turns a product idea into a job‑matching feature for its users. I’ll assume the goal is to surface relevant internal or external roles based on a user’s profile, activity, and skill set while keeping privacy and relevance high.

**Approach**  
1. **Data ingestion** – crawl resumes, internal postings, LinkedIn feeds, and skill tags.  
2. **Feature engineering** – embed skills, projects, and context (e.g., “remote”, “JavaScript”) using contextualized embeddings (BERT/Graph‑based).  
3. **Matching engine** – a two‑stage pipeline:  
   *Candidate retrieval* via approximate nearest neighbors on sparse skill vectors;  
   *Relevance scoring* with a learned ranking model (LambdaMART or deep pairwise network) that weighs skill match, seniority fit, and user intent.  
4. **Personalization loop** – reinforcement learning to adjust weights based on click‑through and application success rates.

**Depth**  
- Retrieval uses FAISS for sub‑millisecond lookups over millions of jobs.  
- Ranking loss (pairwise NDCG) trained on historical hiring data; regularization mitigates bias toward high‑profile roles.  
- Privacy: all user signals are hashed; GDPR compliance via on‑device filtering before sending to the server.

**Edge Cases**  
- Sparse skill profiles → fallback to keyword matching.  
- New job postings with unseen skills → prompt a quick embedding update.  
- Users who have applied multiple times → introduce cooldown or “too many attempts” flag.

**Optimize & Communicate**  
Iterate on feature importance through A/B tests, monitor latency (target < 150 ms), and deploy the model via Kubernetes with autoscaling to handle peak traffic. Explain trade‑offs: richer embeddings improve relevance but increase inference cost; approximate retrieval keeps latency low at a slight recall loss. This structured pipeline demonstrates clear problem framing, technical depth, and a roadmap for production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
