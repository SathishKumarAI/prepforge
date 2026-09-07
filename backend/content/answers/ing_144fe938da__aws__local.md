---
qid: ing_144fe938da__aws__local
question: 'Explain: Reasoning with o1 - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 583
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:07-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a production‑grade reasoning engine that could answer complex user queries in real time using OpenAI’s *o1* model (the newest LLM optimized for “one‑shot” reasoning). The goal: 99 % accuracy on domain‑specific logic tests while keeping inference cost under $0.10 per request.

**Action**  
- **Design** – I wrapped the o1 endpoint in a **Step Functions** orchestration that first validates input, then calls the LLM via **SageMaker Runtime** (for low latency) and finally stores the response in **DynamoDB** for auditability.  
- **AWS Services** – SageMaker Endpoint (on `ml.m5.xlarge`), Lambda for pre‑processing, Step Functions for control flow, DynamoDB for state persistence, CloudWatch & XRay for observability.  
- **Scalability / Availability** – Auto‑scaling on CPU utilization; multi‑AZ deployment with Route 53 weighted routing to a standby endpoint.  
- **Cost** – 200 ms per inference → $0.03/request (SageMaker) + $0.01 for Lambda + $0.001 DynamoDB; total <$0.10, meeting budget.  
- **Dive Deep** – Monitored token usage and error rates; discovered a 12 % drop in accuracy when prompts exceeded 1 k tokens, so I introduced a prompt‑chunking strategy that raised accuracy from 84 % to 92 %.  

**Result**  
- Achieved **92 % reasoning accuracy** on a curated test set of 5,000 logical puzzles.  
- Reduced average latency to **180 ms** and cut costs by **35 %** compared to the baseline GPT‑4 deployment.  
- Earned a **“Bar‑Raiser” stamp** for demonstrating ownership (full pipeline ownership), depth (token‑level analysis), quantified impact, and learning from failure (prompt optimization).  

**Leadership Principles Anchored**  
- *Customer Obsession* – Delivered fast, accurate answers that directly improved user satisfaction.  
- *Ownership* – Took end‑to‑end responsibility for design, cost, and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
