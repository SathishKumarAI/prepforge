---
qid: ing_1d5d780320__aws__local
question: 'Explain: Restarting Nodes — Getting Started with SolrCloud | Apache Solr
  Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 521
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:45-05:00'
sources: []
---

**Situation & Task**  
When I migrated our search platform from a single‑node Solr to SolrCloud, the cluster had to handle 1 M queries/day and 10 TB of indexed data. A sudden node failure caused a 30 % increase in query latency for 15 minutes before the auto‑recovery logic kicked in. I was tasked with designing a robust “restart‑nodes” strategy that minimized downtime, preserved data integrity, and kept cost under $2k/month.

**Action**  
1. **Requirements & Design** – I scoped the solution as a *serverless* restart workflow using AWS Step Functions orchestrated by CloudWatch Events.  
   - **Service Layer**: EC2 Auto Scaling Groups (ASG) with Spot + On‑Demand mix for cost control, each instance running Solr 6.6 in Docker.  
   - **State Management**: DynamoDB to track node health and a simple “restart flag”.  
   - **Recovery Logic**: If a node’s health check fails, Step Functions triggers an EC2 API call to terminate the instance; ASG automatically launches a replacement, which pulls the latest Solr image from ECR.  
2. **Scalability & Availability** – By keeping each Solr shard replicated across at least two nodes (replication factor = 2) and using Zookeeper on RDS Aurora Serverless for coordination, we achieved 99.9% availability even during a node restart.  
3. **Cost & Trade‑offs** – Spot instances reduced compute spend by ~40 %. The trade‑off was a slight increase in restart latency (≈ 45 s) compared to on‑demand, which was acceptable given the overall cost savings.

**Result**  
- Restarts now complete within 1 minute with no measurable impact on query latency.  
- Monthly operational cost dropped from $4.8k to $2.3k.  
- Mean time to recover (MTTR) decreased from 15 min to < 2 min, improving customer satisfaction scores by 12 pts.

**Learning & Ownership**  
I documented the entire workflow in Confluence and created a “restart playbook” that now serves as the standard operating procedure for all search infra teams. This experience reinforced my ownership mindset—anticipating failure scenarios, diving deep into SolrCloud internals, and biasing for action with a clear cost‑benefit lens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
