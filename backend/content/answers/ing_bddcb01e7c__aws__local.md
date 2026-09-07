---
qid: ing_bddcb01e7c__aws__local
question: 'Explain: Indexing — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 435
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:37-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a feature that let users search millions of product listings in <200 ms. The database had grown to 3 TB and query latency doubled each month.

**Action (A)**  
I re‑architected the indexing layer with **Amazon DynamoDB Global Tables + Amazon OpenSearch Service**.  

1. *Data model*: Each listing got a composite key (category#id) and a secondary index on keywords.  
2. *Scalability*: DynamoDB’s auto‑scaling handled 10 k RCU/WCU spikes; the OpenSearch cluster was sharded across three AZs with warm replicas for high availability.  
3. *Cost*: By using **DAX** caching for hot queries, I cut read capacity by 70 % and saved ~$1.2K/month.  
4. *Fail‑over*: The Global Table replicated to a secondary region; OpenSearch used cross‑region snapshots for disaster recovery.  

I also added **Lambda@Edge** to enrich search metadata on the fly, reducing backend load.

**Result (R)**  
Latency dropped from 350 ms to 95 ms (a 73 % improvement). Search throughput rose from 1 k/s to 8 k/s without provisioning new servers. The cost‑to‑performance ratio improved by 45 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Faster searches directly improved conversion rates.  
- **Ownership & Dive Deep**: I owned the end‑to‑end pipeline, measured every metric, and iterated until we hit SLAs.

*Bar‑raiser notes*: Clear ownership, depth in trade‑offs (DynamoDB vs OpenSearch), quantified impact, and post‑mortem learning from earlier latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
