---
qid: ing_98cf311d9c__aws__local
question: 'Explain: Apache HBase — Apachehbase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 419
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:59-05:00'
sources: []
---

**Answer – Interview Style**

I was tasked to replace a legacy key‑value store that served 3 M reads/sec for an ad‑tech platform.  
*Situation:* The old system hit latency spikes during peak traffic and had no native replication.  
*Task:* Build a highly available, horizontally scalable solution with <10 ms average read latency.  
*Action:* I chose **Apache HBase** on **Amazon EMR** + **EBS** for persistence, leveraging its automatic sharding (region servers) and strong consistency.  
- **Design:** Each region server hosts 1 TB of data; we pre‑split tables based on user ID hash to avoid hotspots.  
- **Scalability:** Auto‑scaling EMR clusters add region servers when CPU >70 % or read latency >15 ms, keeping cost predictable (~$0.75/hr per node).  
- **Availability:** Enabled HBase’s multi‑region replication across 2 AZs; failover occurs in <30 sec with zero data loss.  
- **Cost/Trade‑off:** Using EBS gp3 (5 MIOPS) keeps costs low versus SSD; we trade a slight write amplification for lower latency.  

*Result:* Latency dropped from 45 ms to 8 ms, throughput increased by 4×, and uptime rose to 99.99%. The solution also reduced ops overhead by 30% (auto‑rebalancing).  
**Leadership Principles:** *Ownership* – I owned the end‑to‑end migration; *Dive Deep* – I profiled micro‑latencies to guide split strategy.  

Bar‑raiser cues: clear ownership, quantitative impact, deep technical reasoning, and lessons learned from early prototype failures (e.g., mis‑estimated region splits causing hotspots).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
