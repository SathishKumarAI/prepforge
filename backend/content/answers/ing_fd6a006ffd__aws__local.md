---
qid: ing_fd6a006ffd__aws__local
question: 'Explain: Evaluation plan — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 455
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:04-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* At my previous firm we launched an “Enterprise RAG Assistant” to reduce knowledge‑base search time for support agents. *Task:* Design a robust evaluation plan that proved the assistant’s ROI and drove adoption.

*Action:*  
1. **Define Success Metrics** – Average ticket resolution time (target ↓30 %), agent satisfaction score (↑15 pts), and RAG hit rate (≥90 %).  
2. **Controlled Rollout** – A/B test with 500 agents: control group uses legacy search; treatment group gets the assistant.  
3. **Data Collection & Analysis** – AWS CloudWatch + Athena to ingest logs, then Redshift for OLAP queries. I built a Power‑BI dashboard that refreshed hourly and surfaced key KPIs in real time.  
4. **Iterative Feedback Loop** – Weekly sprint reviews; each sprint we added 10 new FAQ embeddings from the latest product docs (S3 + SageMaker Pipelines).  

*Result:* After 8 weeks, resolution time dropped 32 %, satisfaction rose 18 pts, and RAG hit rate hit 92 %. Cost per ticket decreased by $4.50, saving ~USD 120k annually. The initiative was adopted company‑wide, scaling to 10,000 agents with a 99.9 % uptime guarantee (using Lambda + DynamoDB global tables).  

**What the bar‑raiser looks for**

- **Ownership:** I led the entire experiment from hypothesis to post‑mortem.  
- **Dive Deep:** Leveraged AWS analytics stack to uncover root causes of slow queries and iterated on embeddings.  
- **Quantified Impact:** Delivered concrete, measurable business outcomes.  
- **Learning from Failure:** When early A/B tests showed no lift, I pivoted strategy to enrich the knowledge graph—turning a near‑miss into a success story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
