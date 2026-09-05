---
qid: ing_02d44cff12__fp__local
question: 'Explain: Push vs Pull model — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 387
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:07-05:00'
sources: []
---

**Push vs Pull in Social‑Network Feed Design**

*Fundamental problem*: users must decide which of the millions of posts to read at any moment. The network designer can either *push* a curated stream (e.g., “Your Timeline”) or let users *pull* by browsing their own profile, hashtags, etc.  

**Why push works**  
- **Signal‑to‑noise optimization**: Each user has a finite attention budget; the platform must maximize expected utility of each consumed item. By ranking posts via an engagement model (probability of like/comment), the feed becomes a *greedy* approximation to the optimal set under a knapsack constraint—each slot is filled with the highest‑value item.  
- **Latency minimization**: Precomputing the top‑N list reduces on‑device search time, essential for mobile UX and battery life.  

**Why pull works**  
- **User agency & exploration**: Pull gives users control to explore beyond the platform’s relevance model, mitigating *filter bubbles*. From an information‑theoretic view, pull increases entropy of consumed content, potentially exposing novel signals that can improve future push models (a learning loop).  

**Non‑obvious insight**  
The tension is not merely speed vs. choice; it is a **trade‑off between *predictive bias* and *information gain***. Push aggressively biases toward known high‑utility items, reducing variance but increasing systematic error if the relevance model drifts (e.g., viral trends). Pull injects fresh data that can correct this drift faster than any offline re‑training cycle. Thus, hybrid systems that blend push with periodic pull‑based sampling often achieve both low latency and high adaptivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
