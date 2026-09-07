---
qid: ing_6addae1503__aws__local
question: 'Explain: the risk of finding some points that — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 438
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:50-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation / Task** – While building Doordash’s real‑time delivery routing, I noticed that the K‑Nearest‑Neighbors model was over‑fitting to a handful of “hot” pickup points in dense city cores. This risk meant new drivers or restaurants outside those clusters would receive sub‑optimal ETA predictions, hurting *Customer Obsession* and *Deliver Results*.  

> **Action** –  
> 1. **Dive Deep** into the training data: I plotted point density across all ZIP codes, revealing a >90 % skew toward 5 k points in 2 % of the city.  
> 2. Implemented a **geo‑hashing bucket** (10 km²) and trained separate models per bucket to reduce bias.  
> 3. Added a *fallback* ensemble that blends the local model with a global baseline, ensuring every point gets at least one prediction.  
> 4. Used **WebSockets** for continuous location updates; combined with an **Amazon Kinesis Data Stream** (shard size 1 MB/s) to feed the models in real time.  
> 5. Deployed on **AWS SageMaker endpoints** behind an Application Load Balancer, auto‑scaling based on CPU % and latency (target <100 ms).  

> **Result** – Post‑deployment A/B test showed a **32 % reduction in ETA error** for low‑density areas and a **12 % increase in driver satisfaction scores**. Cost per inference dropped 18 % by pruning the model size after geo‑hashing.  

> **Learning** – I documented that over‑reliance on aggregate metrics can mask local outliers; future projects will incorporate *geo‑segmented* monitoring from day one. This demonstrates ownership, depth, and a bias for action—key traits of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
