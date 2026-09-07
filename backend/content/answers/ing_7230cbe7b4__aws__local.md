---
qid: ing_7230cbe7b4__aws__local
question: 'Explain: Putting it together: a bank support agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 482
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:35-05:00'
sources: []
---

**Situation (S)** – At my previous role I was tasked to build an AI‑powered chat assistant for a retail bank that could handle over **10k daily support tickets** while keeping the first‑response time below **2 s**.

**Task (T)** – Own the end‑to‑end pipeline: ingest user intent, generate responses, and route complex queries to human agents with minimal escalation. I had to ensure 99.9 % uptime and keep costs under $200k/month.

**Action (A)** –  
- **Data ingestion & preprocessing**: used **Amazon Kinesis Data Streams** → **Glue** for schema inference → **Redshift** for analytics.  
- **Model serving**: deployed a fine‑tuned BERT model on **SageMaker Endpoint** behind an **Application Load Balancer** with auto‑scaling; latency < 1 s per request.  
- **Routing logic**: built a Lambda layer that checks confidence scores and sends high‑confidence replies directly, otherwise forwards to **Amazon Connect** for live agents.  
- **Observability**: CloudWatch metrics + X-Ray traces fed into a Grafana dashboard; automated alerts sent to the on‑call team.

**Result (R)** – Reduced average ticket handling time from **8 min** to **30 s**, cut escalation rate by **67 %**, and achieved **99.95 % availability** with a total cost of **$180k/month**—a 10 % savings over the projected budget.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant, accurate responses that improved user satisfaction scores from 78 to 92.  
- **Ownership & Dive Deep** – Took full ownership of data pipelines and model performance; iterated on error logs until confidence thresholds were optimal.

### Bar‑Raiser Signals I Hear
- Clear ownership narrative.  
- Quantified impact (time savings, cost reduction).  
- Deep dive into trade‑offs: chosen SageMaker for rapid iteration vs. custom inference servers.  
- Lessons from failed model rollouts—rolled back to a baseline version and added A/B testing before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
