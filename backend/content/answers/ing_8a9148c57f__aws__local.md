---
qid: ing_8a9148c57f__aws__local
question: 'Explain: Week 3 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:48-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional squad on a SaaS product, we needed an internal knowledge‑base that could auto‑generate technical docs from raw code and design specs. The client demanded 80 % reduction in manual documentation time within six months.

**Action (A)**  
I owned the solution: built a serverless pipeline using **Amazon SageMaker** to fine‑tune an open‑source LLM (e.g., GPT‑Neo) on our proprietary corpus, then deployed it as a **SageMaker Endpoint** behind **API Gateway**. To keep costs in check, I used **Spot Instances** for training and **Lambda@Edge** for inference caching, reducing latency to <200 ms per request. I added an **Amazon DynamoDB** layer to store user‑generated prompts and results, ensuring 99.9 % availability with auto‑scaling.

I also instituted a “Fail‑Fast” review loop: every new model version was automatically tested against a validation set; if BLEU score dropped <5 %, the deployment was rolled back, preventing quality drift.

**Result (R)**  
Within five months, documentation time fell from 12 hrs/day to 2.4 hrs/day—a **80 % reduction**—and user satisfaction scores rose from 3.8/5 to 4.6/5. The serverless design kept monthly spend below $1k, a 70 % cost saving over a traditional VM‑based approach.

---

### Leadership Principles Highlighted  
- **Ownership** – drove the end‑to‑end pipeline and continuous improvement loop.  
- **Dive Deep** – tuned hyperparameters, monitored inference latency, and built rollback logic.  

Bar‑raisers will note my quantitative impact, deep technical design choices (SageMaker, Spot, Lambda@Edge), and learning from early failures (automatic rollbacks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
