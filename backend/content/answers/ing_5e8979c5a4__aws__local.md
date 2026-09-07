---
qid: ing_5e8979c5a4__aws__local
question: 'Explain: Evaluation plan — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 471
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:23-05:00'
sources: []
---

**Situation & Goal (S)**  
When I joined the CX team at a SaaS firm, our ticket volume doubled during peak seasons and average handling time (AHT) rose to 9 min, hurting CSAT scores. The leadership wanted an AI‑augmented evaluation plan for support agents that would reduce AHT by 20% while keeping quality above 95%.

**Task & Action (T)**  
I built a data‑driven evaluation framework anchored in **Customer Obsession** and **Dive Deep**.  
1. **Requirements** – Agents must meet:  
   * AHT ≤ 7 min,  
   * CSAT ≥ 4.5/5,  
   * First‑contact resolution (FCR) ≥ 85%.  
2. **Design** – A microservice architecture on AWS:  
   * **Amazon Connect** + **Lex** for live chat routing.  
   * **Amazon DynamoDB** stores real‑time metrics per agent.  
   * **AWS Lambda** aggregates logs, calculates KPIs hourly.  
   * **Amazon QuickSight** dashboards feed into a weekly review board.  
3. **Scalability & Cost** – Serverless (Lambda + DynamoDB) auto‑scales; we stay under $0.02 per evaluation cycle (~$30/month). Availability is 99.95% via Multi‑AZ deployment.

**Result (R)**  
Within three months:  
* AHT dropped to **6.2 min** (+12%).  
* CSAT rose from **4.3** to **4.7** (+10%).  
* FCR improved to **88%** (+3%).  
The bar‑raiser flagged my ownership of the end‑to‑end pipeline, deep dive into latency logs (identified a 200 ms bottleneck in Lambda cold starts), and learning loop—adding a pre‑warm step that cut cold start time by 70%.

**Learning**  
Iteratively refining thresholds based on real feedback keeps the system aligned with customer needs while preserving agent morale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
