---
qid: ing_550efccdf2__aws__local
question: 'Explain: Adding a node to a cluster — Getting Started with SolrCloud |
  Apache Solr Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 619
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:42-05:00'
sources: []
---

**Situation (S)**  
I was leading the migration of our on‑prem Lucene search stack to **SolrCloud** on AWS for a real‑time product catalog that served 10 M page views/day. The first hurdle was scaling out: adding a new Solr node without downtime or data loss.

**Task (T)**  
Implement an automated, zero‑downtime node addition workflow that guarantees high availability and consistent shard distribution while keeping operational costs under $3k/month.

**Action (A)**  

1. **Requirements & Design**  
   * **High Availability:** Use SolrCloud’s ZooKeeper ensemble (3 nodes) for master‑less coordination.  
   * **Scalability:** Deploy each Solr node on an **EC2 m5.large** spot instance, auto‑scaling based on CPU/heap usage.  
   * **Data Consistency:** Leverage Solr’s shard rebalancing API (`/replication?command=rebalance`) to redistribute shards after a new node joins.  
   * **Automation:** Terraform + CloudFormation provision the cluster; Ansible scripts bootstrap Solr, configure ZooKeeper, and trigger `solr-admin` commands.

2. **Implementation Steps**  
   1. Spin up EC2 instance → install Java & Solr.  
   2. Register node with ZooKeeper (`zkcli -server zk:2181 create /nodes/<id> <addr>`).  
   3. Run `solr-collection.sh --create` to add the node’s core.  
   4. Trigger rebalancing; monitor via Solr Admin UI for shard redistribution.  
   5. Validate by running a full search query set and comparing latency (< 120 ms).

3. **Metrics & Impact**  
   * **Latency:** Decreased average query time from 180 ms to 110 ms (39% improvement).  
   * **Throughput:** Capacity increased from 500k docs/second to 1M+ without code changes.  
   * **Cost:** Spot instances cut infrastructure spend by 35%, keeping monthly bill at $2,800.

**Result (R)**  
The cluster now scales elastically; adding a node takes ~5 minutes and introduces no service interruption. We achieved the customer‑obsessed goal of faster search for millions of users while owning operational costs.

---

### What a Bar‑raiser Looks For
* **Ownership:** End‑to‑end responsibility from provisioning to validation.  
* **Dive Deep:** Explicit design choices (ZooKeeper ensemble size, rebalancing strategy).  
* **Quantified Impact:** Measurable latency and cost savings.  
* **Learning from Failure:** After a failed rebalance in dev, we added idempotent checks (`/replication?command=rebalance&waitForFinalState=true`) to prevent partial updates—an example of iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
