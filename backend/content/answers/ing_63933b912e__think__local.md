---
qid: ing_63933b912e__think__local
question: 'Explain: Adding master-eligible nodes — Add and Remove Elasticsearch nodes
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 563
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:37:03-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal:* Understand how adding/removing master‑eligible nodes affects cluster health and leadership election in Elasticsearch.  
   - *Assumptions:* You have a functioning ES cluster, you’re using the default discovery mechanism (Zen or X-Pack), and you’re comfortable with CLI/REST calls.

**2. Adopt a mental model of the cluster**  
   - Think of the cluster as a set of nodes that must agree on which one is *master*.  
   - Master‑eligible nodes form a “quorum” group; at least ⌊N/2⌋+1 must vote for a master.  
   - Adding a node increases N, changing quorum size and potentially moving the master to a different node.

**3. Step‑by‑step reasoning**  
   1. **Add a node:**  
      - Start the new instance with `cluster.name` matching the cluster.  
      - It joins via discovery, becomes part of the master‑eligible pool if `node.master: true`.  
      - The cluster re‑elects a master if the current one is not in majority or prefers a “better” node (e.g., lower load).  
   2. **Remove a node:**  
      - Shut it down gracefully (`curl -XDELETE /_cluster/health?timeout=30s` then stop process).  
      - The remaining nodes detect the loss, recalc quorum, and may elect a new master if needed.  
   3. **Monitor health:** Use `_cat/nodes`, `_cluster/state`, and logs to confirm elections.

**4. Common pitfalls to avoid**  
   - Adding a node without `node.master: true` when you expect it to participate in elections.  
   - Removing nodes one by one until quorum drops below majority—causes split brain or cluster shutdown.  
   - Forgetting to update the discovery seed list, leading to orphaned nodes.

**5. Sanity‑check & communicate clearly**  
   - Verify that `cluster.routing.allocation.cluster_concurrent_rebalance` is set appropriately so shards reallocate after changes.  
   - Explain the impact of quorum size change: “Adding a node increases required majority from 3 to 4 in a 6‑node cluster.”  
   - Summarize with a quick command list: start/stop, `curl -XGET /_cluster/state`, and monitoring tools.

This framework lets you reason through any master‑eligible node modification while keeping the cluster stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
