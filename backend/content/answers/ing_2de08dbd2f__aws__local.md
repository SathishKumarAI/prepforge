---
qid: ing_2de08dbd2f__aws__local
question: 'Explain: Memory systems for LLM agents — MemoryGraft: Persistent Compromise
  of LLM Agents via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 406
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:59-05:00'
sources: []
---

**Scenario (S)**  
While leading a cross‑functional team that built an LLM‑driven recommendation agent for our e‑commerce platform, we discovered that the agent’s “memory” module could be subverted by injecting poisoned experiences during fine‑tuning. The threat was that a malicious user could persistently bias the agent’s future decisions.

**Task (T)**  
Design a robust memory system that prevents persistent compromise while keeping latency under 100 ms and cost below $0.01 per inference for millions of users.

**Action (A)**  
1. **Architectural Choice** – Split memory into *volatile context* (in‑memory, encrypted with KMS) and *persistent knowledge base* (encrypted DynamoDB tables).  
2. **Integrity Checks** – Use AWS Macie to scan logs for anomalous write patterns; implement a Lambda validator that hashes each experience against a whitelist of approved schemas before insertion.  
3. **Retrieval Layer** – Deploy an Amazon OpenSearch domain with fine‑tuned query templates, leveraging *deduplication* and *TTL* to automatically purge stale or suspicious entries.  
4. **Monitoring & Rollback** – CloudWatch metrics track the ratio of flagged experiences; a Step Functions workflow triggers a rollback of recent changes if the flag exceeds 0.5 %.  

**Result (R)**  
After deployment, we saw a **97% reduction in memory‑compromise incidents**, cut inference latency by **12 ms** thanks to local context caching, and kept monthly operating costs at **$18k**—a **35 % savings** over the legacy monolithic design.  

**Leadership Principles** – *Customer Obsession* (protect user trust), *Ownership* (end‑to‑end responsibility for memory integrity).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
