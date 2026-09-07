---
qid: ing_56733126d2__faang__local
question: 'Explain: Create and manage ILM policies — Index lifecycle management (ILM)
  in Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 628
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:04-05:00'
sources: []
---

**Clarify**

You’re asked how to *create* an ILM policy and then *apply/maintain* it on indices in Elasticsearch.  
Assumptions:  
- Elasticsearch 7.x+ (ILM introduced 6.5).  
- You have `elasticsearch` CLI or Kibana DevTools, cluster health “green”.  
- Want to move data through phases (hot → warm → cold → delete) and set retention.

**Approach**

1. **Define policy JSON**: list phases, actions (`rollover`, `shrink`, `forcemerge`, `delete`).  
2. **Create policy** via `_ilm/policy` API.  
3. **Associate policy with index template** or apply to existing indices using `_index_template` or `_indices/_settings`.  
4. **Verify assignment**: check `_ilm/explain`.  
5. **Monitor & tweak**: use `GET _ilm/status`, adjust thresholds.

**Depth**

```json
PUT _ilm/policy/my_policy
{
  "policy": {
    "phases": {
      "hot": { "actions": {"rollover":{"max_size":"50gb","max_age":"30d"}}},
      "warm": { "min_age":"30d", "actions": {"shrink":{"number_of_shards":1},"forcemerge":{"max_num_segments":1}}},
      "cold": { "min_age":"60d", "actions": {"allocate":{"include":{"type":"data_cold"}}}},
      "delete": { "min_age":"90d", "actions": {"delete":{}}}
    }
  }
}
```

Assign to template:

```json
PUT _index_template/my_template
{
  "template": {"settings":{"index.lifecycle.name":"my_policy"}},
  "priority": 1,
  "index_patterns":["logs-*"]
}
```

Complexity: policy creation is O(1); applying to existing indices may reindex or apply settings in O(n).  

**Edge Cases**

- Existing indices without `lifecycle` setting → ILM won’t run.  
- Rollover requires a write alias; missing alias breaks rollover.  
- Shrink fails if index isn’t read‑only.  
- Delete phase mis‑configured may purge data early.

Test: create dummy index, apply policy, simulate time/size thresholds with `PUT _ilm/explain`.

**Optimize & Communicate**

Explain trade‑offs: aggressive rollovers reduce hot shard count but increase index churn; deep shrink saves storage but adds I/O.  
Narrate reasoning: “We’ll roll over after 50 GB or 30 days, then gradually move to warm/cold tiers, finally delete after 90 days.”  

This structured flow shows clear problem framing, step‑by‑step solution, complexity awareness, edge‑case handling, and optimization insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
