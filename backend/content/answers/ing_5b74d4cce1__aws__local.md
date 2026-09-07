---
qid: ing_5b74d4cce1__aws__local
question: Why Not Just Use LLM for Everything? — Recommendation Engine
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:01-05:00'
sources: []
---

**Why not just use an LLM for everything?**  

*Situation*: At my previous role I was tasked to overhaul the recommendation engine for a media‑streaming platform that served 3 M active users daily. The existing system was rule‑based and struggled with cold‑start content, leading to a 12 % drop in engagement during new releases.

*Task*: Build a hybrid model that keeps LLMs’ creativity but anchors decisions in real user signals, ensuring compliance, latency, and cost constraints.

*Action*:  
1. **Data‑driven pipeline** – Ingest clickstream (Kinesis), enrich with content metadata (Glue) and store in Redshift for analytics.  
2. **LLM + Collaborative Filtering** – Use a fine‑tuned GPT‑4 via SageMaker endpoint for semantic relevance, while a matrix‑factorization model on SageMaker Pipelines supplies collaborative signals.  
3. **Feature Store** – Feast (self‑hosted) to serve real‑time features with <5 ms latency from Lambda edge.  
4. **Cost & Availability** – Spot instances for batch training, multi‑AZ SageMaker endpoints for high availability; auto‑scaling keeps cost 30 % below baseline.

*Result*: 18 % lift in per‑session watch time and a 22 % reduction in server costs within six months, while keeping latency <100 ms.  

**Leadership Principles Highlighted**:  
- **Customer Obsession** – Metrics directly tied to user engagement.  
- **Dive Deep & Ownership** – Built end‑to‑end pipeline, monitored drift, and iterated on failures (e.g., mis‑ranked content during a seasonal spike).  

Bar‑raisers look for evidence of *ownership* (I maintained the system post‑launch), *depth* (understood every component from Kinesis to Lambda), quantified impact (18 % lift), and learning from failure (resilient fallback to rule‑based fallback when LLM latency spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
