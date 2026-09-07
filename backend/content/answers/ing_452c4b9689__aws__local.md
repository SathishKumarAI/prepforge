---
qid: ing_452c4b9689__aws__local
question: 'Explain: Cost Analysis — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 438
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:25-05:00'
sources: []
---

**Situation & Task**  
While leading a customer‑support team at a SaaS startup, we spent ~30 % of our ops budget on live agents for high‑volume queries (≈1.2 M tickets/month). I was tasked with reducing cost while keeping CSAT ≥90%.

**Action**  
I scoped an AI‑driven chatbot pipeline:

| Step | AWS Service | Why |
|------|-------------|-----|
| Intent & entity extraction | Amazon Comprehend + Lex | Pre‑built NLP, low latency |
| Contextual response generation | Amazon SageMaker (GPT‑2 fine‑tuned) | Custom domain language |
| Knowledge base search | DynamoDB + Elastic Search | 99.9% availability, auto‑scaling |
| Orchestration & fallback to human | Step Functions + Lambda | Seamless handoff and metrics |

I built a **Cost‑Impact Model**: compute (p3.xlarge for inference), storage (~$0.12/GB), data transfer (~$0.09/GB). Using a 6‑month simulation, projected savings were:

- **Compute**: $180 k → $45 k/month
- **Support hours**: 70 % reduction → $120 k saved

I ran an A/B test (12 weeks) on 200K tickets. The bot handled 68 % of queries autonomously, CSAT rose from 88 % to 92%, and response time dropped 35%.

**Result**  
Implemented at scale: 1.2 M/month → $210 k/month savings, 40 % lift in efficiency, and a scalable framework for new languages (future‑proofing).  

**Reflection** – I learned that early stakeholder buy‑in on the cost model prevented scope creep; we iterated quickly on the fallback logic after initial failures. This exercise reinforced *Ownership* (own the ROI) and *Dive Deep* (model every cost component).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
