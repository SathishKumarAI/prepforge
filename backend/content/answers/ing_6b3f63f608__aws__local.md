---
qid: ing_6b3f63f608__aws__local
question: 'Explain: AdTech & Personalization — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 487
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:37-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional AdTech team at my previous company, we needed to serve real‑time personalized ad recommendations for ~30 M daily users. The existing MySQL stack couldn’t deliver sub‑200 ms latency and failed to scale with the 2× monthly traffic growth.

**Action (Technical)**  
I architected a *distributed personalization pipeline* built on **Apache HBase** as the No‑SQL store, coupled with **Kinesis Data Streams** for ingestion and **EMR Spark** for batch feature enrichment.  

- **Schema**: Column families `user_features`, `ad_scores`; row key = `<user_id>#<timestamp>` for time‑series reads.  
- **Scalability**: 4 region servers (auto‑scaling via CloudWatch) ensured <0.5 % hot spot incidence.  
- **Availability**: HBase’s replication across AZs and automatic failover kept uptime >99.9 %.  
- **Cost**: Spot instances for EMR + EBS‑optimized HBase nodes cut spend by 35 % versus RDS.

I introduced a *cache layer* (ElastiCache Redis) to surface the top‑10 ads per user, reducing HBase read load by 60 %.

**Result**  
Latency dropped from 1.2 s to **180 ms**, boosting click‑through rate by **12%** and revenue by **$3.5M/month**. The system handled a 4× traffic surge with no outages.

**Leadership Principles**  
- **Customer Obsession**: Delivered faster, more relevant ads that increased user engagement.  
- **Ownership**: Took end‑to‑end responsibility for architecture, ops, and cost optimisation.

**Bar‑raiser takeaways**  
- Demonstrated *ownership* through proactive scalability design.  
- Showed *dive deep* by selecting HBase based on data model needs and justifying trade‑offs.  
- Quantified impact with clear metrics (latency, CTR, revenue).  
- Learned from a failed pilot that used Cassandra; switched to HBase after analysing write patterns, saving time and money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
