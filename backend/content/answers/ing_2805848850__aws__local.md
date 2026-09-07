---
qid: ing_2805848850__aws__local
question: 'Explain: Code — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 482
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:08-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a pilot that deployed *agentic* (self‑directed) AI to automate customer support workflows across three product lines. The goal was to reduce manual ticket triage by 40 % while keeping resolution quality above 95 %.

**Action**  
I built an end‑to‑end pipeline using **Amazon SageMaker** for model training, **Lambda** + **Step Functions** for orchestration, and **Amazon API Gateway** to expose a lightweight REST endpoint. The agentic component was a reinforcement‑learning policy that selected the optimal sequence of actions (e.g., “escalate”, “offer FAQ”, “create ticket”) based on real‑time context from **DynamoDB** logs. To keep costs low, I leveraged SageMaker’s *Inference Recommender* to choose spot instances and set up automatic scaling with CloudWatch alarms.

**Result**  
Within 90 days the bot handled 68 % of inbound tickets, cutting average first‑response time from 12 min to 3 min. Customer satisfaction scores rose from 4.1 to 4.6/5. The solution saved $120K annually in support labor and maintained a **99.9 %** uptime due to the stateless Lambda design.

---

### Leadership Principles Anchored
- **Customer Obsession** – Directly improved CSAT and response times.  
- **Ownership / Deliver Results** – Took full ownership of the MVP, iterated on feedback, and delivered measurable business value.

### What a Bar‑Raiser Looks For
- **Ownership**: I owned the entire stack, from data ingestion to policy training.  
- **Dive Deep**: I profiled latency per Lambda layer, tuned SageMaker hyperparameters, and logged failure modes in CloudWatch.  
- **Quantified Impact**: 68 % ticket automation, $120K cost savings, 99.9 % availability.  
- **Learning from Failure**: Initial RL policy over‑escalated; after adding a confidence threshold we reduced false positives by 35 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
