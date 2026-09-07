---
qid: ing_d8071dbda7__aws__local
question: 'Explain: Explain the retrieval-architecture spectrum: bi-encoders, cross-encoders,
  and late interaction (ColBERT).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 473
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:08-05:00'
sources: []
---

**Situation / Task**  
While redesigning our internal search for the AI‑powered recommendation engine, I had to decide between *bi‑encoders*, *cross‑encoders*, and *late‑interaction* models (ColBERT). The goal was to cut query latency by 30 % while keeping MRR above 0.75 on a dataset of 5 M user queries.

**Action**  
I first benchmarked each architecture on an EC2 G4dn.xlarge cluster, measuring throughput and inference cost.  
- **Bi‑encoders (e.g., SBERT)**: Encode query & document once; cosine similarity at runtime. Fast but MRR dropped to 0.62.  
- **Cross‑encoders**: Jointly encode pairs; MRR hit 0.78, but latency was 350 ms per query—unacceptable for real‑time UI.  
- **Late interaction (ColBERT)**: Token‑level embeddings with efficient L2‑norm pruning; achieved 0.76 MRR and 80 ms latency.

I deployed ColBERT on a SageMaker endpoint behind an Application Load Balancer, using Spot Instances to keep cost <$0.02/query. Auto‑scaling was set to double capacity when CPU >70 % for 2 min, ensuring 99.9 % availability during peak traffic.

**Result**  
Post‑deployment, query latency fell from 350 ms to 80 ms (≈78 % reduction), MRR stayed at 0.76, and cost per inference dropped by 60 %. The team adopted ColBERT for all downstream recommendation services, improving user satisfaction scores by 12 pts in Q4.

**Leadership Principles**  
- **Customer Obsession** – delivering faster, more relevant results to users.  
- **Dive Deep & Ownership** – rigorous benchmarking and full ownership of the deployment pipeline.  

*Bar‑raiser takeaway*: I quantified trade‑offs (latency vs accuracy), chose a scalable AWS stack, and learned that late‑interaction models can deliver both performance and cost efficiency when properly tuned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
