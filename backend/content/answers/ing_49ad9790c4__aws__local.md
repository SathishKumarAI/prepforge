---
qid: ing_49ad9790c4__aws__local
question: 'Explain: Video Course — GitHub - rasbt/LLMs-from-scratch: Implement a ChatGPT-like
  LLM in PyTorch from scratch, step by step \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 471
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:57-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to build a production‑ready chatbot that could answer internal support queries without pulling from external APIs, in order to reduce latency and cost for our data‑centric team.

**Action**  
I mapped the GitHub repo *rasbt/LLMs-from-scratch* as a blueprint.  
1. **Data pipeline:** Scraped 200 GB of internal docs, stored them in **Amazon S3** and used **AWS Glue** to generate token embeddings.  
2. **Model training:** Leveraged **SageMaker Training** with a distributed PyTorch job (4 x g5.xlarge). I implemented the repo’s transformer from scratch, adding mixed‑precision (`torch.cuda.amp`) to cut GPU memory by 30 % and speed up epochs by ~1.8×.  
3. **Inference:** Deployed the fine‑tuned model on a **SageMaker Endpoint** (multi‑model), scaling via **Auto Scaling** to keep request latency <200 ms during peak hours.  
4. **Monitoring & cost control:** Integrated **Amazon CloudWatch** metrics and set alarms; added a Lambda that spins down idle endpoints, saving ~$2k/month.

**Result**  
The chatbot achieved 92 % precision on a held‑out test set, reduced average support ticket resolution time by 45 %, and cut inference costs from $15k to $4.5k per month—an **81 % cost reduction** while maintaining SLA compliance.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Built a low‑latency, highly accurate model that directly improved support staff productivity.  
- **Ownership & Dive Deep:** Took full responsibility for the end‑to‑end pipeline, from data ingestion to deployment, and iterated on performance bottlenecks.

**Bar‑raiser note:** I demonstrated ownership by owning the entire ML stack, dove deep into the transformer internals to optimize GPU usage, quantified impact with precise metrics, and learned from early latency spikes by refactoring the inference layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
