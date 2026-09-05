---
qid: ing_1d5d780320__star__local
question: 'Explain: Restarting Nodes — Getting Started with SolrCloud | Apache Solr
  Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 371
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:28:20-05:00'
sources: []
---

**Situation** – In my last role I was maintaining a SolrCloud cluster that powered the search for our e‑commerce platform. One night an upgrade of Solr 6.6 to 7.0 crashed two nodes, causing a spike in latency and a 12 % drop in query throughput during peak hours.

**Task** – My goal was to safely restart the affected nodes without data loss or extended downtime, restore full cluster health, and verify that the index remained consistent across replicas.

**Action** – I first checked the ZooKeeper quorum to confirm the nodes were still registered. Using `solrctl` I stopped each problematic node one at a time, ensuring its replica set was marked as “down” in Solr’s `/admin/collections`. Then I restarted the Java process with the exact JVM flags from our production profile (GC logs, heap size). After launch, I ran `curl http://<node>/solr/admin/collections?action=CLUSTERSTATUS` to confirm that all shards were online and replicas had synced. Finally, I performed a full cluster health check (`/admin/ping`) and re‑indexed any out‑of‑sync documents using the `replication` handler.

**Result** – The cluster returned to 100 % uptime within 12 minutes, query latency dropped back below 120 ms, and our monitoring dashboards showed no error spikes. I documented a step‑by‑step restart playbook that reduced future node recovery time from an hour to under 15 minutes. This exercise reinforced the importance of automated health checks and precise JVM tuning in SolrCloud deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
