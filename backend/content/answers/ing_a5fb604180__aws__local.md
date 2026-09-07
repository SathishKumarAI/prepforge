---
qid: ing_a5fb604180__aws__local
question: 'Explain: closer to my king and now it — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 456
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:10-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a real‑time “coding adventure” chess engine that would let users write snippets of code as moves, and the system would evaluate those snippets for correctness and strategic value. The goal was a 10 % increase in user engagement over our existing board game.

**Action (Technical)**  
1. **Requirements** – Each move must compile, run in isolation, and return a score based on board position + code complexity.  
2. **Design** –  
   * *Lambda* functions for sandboxed execution (`AWS::Lambda`).  
   * *Amazon SageMaker* hosts an ML model (BERT‑style fine‑tuned on chess game logs) that predicts move quality from the code’s abstract syntax tree and board context.  
   * *DynamoDB* stores user sessions, moves, and cached predictions; *ElastiCache Redis* keeps a hot cache of the last 10 k predictions to reduce latency.  
3. **Scalability & Availability** –  
   * Lambda concurrency auto‑scales to 5 k requests/sec with provisioned concurrency for peak hours.  
   * SageMaker endpoints are multi‑AZ and use spot instances (cost ↓ 30 %).  
4. **Cost** – Estimated $12 K/month vs the legacy $18 K/month, a 33 % savings.

**Result**  
- User engagement rose 13 % within two months; session length grew from 5 min to 7.8 min (p‑value <0.01).  
- Model accuracy for move quality hit 87 %, beating the previous rule‑based system by 15 %.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline, conducted A/B tests, and iterated on the model after noticing a bias toward high‑rating players (bias for action). The bar‑raiser’s focus—ownership, dive deep into latency bottlenecks, quantified impact, and learning from the early spike in cold start errors—guided my continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
