---
qid: ing_eca1046eb6__faang__local
question: 'Q: Your agent''s memory store has 50M memories across 10K tenants. How
  do you guarantee cross-tenant isolation and what''s your blast radius if isolation
  fails?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 614
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:50:48-05:00'
sources: []
---

**Clarify**  
We’re storing ~50 M memory entries for 10 k tenants in a single system. The goal: *prevent any tenant from reading or tampering with another’s data* and quantify the impact if that isolation fails.

Key assumptions to confirm:
- Memory store is a shared database/NoSQL cluster (e.g., DynamoDB, Spanner).
- Tenants are identified by a `tenant_id` key on every record.
- Access patterns involve read‑write bursts; no cross‑tenant queries are expected.

---

**Approach**  
1. **Data partitioning** – shard the table by `tenant_id`; each tenant gets its own namespace or key range.  
2. **Access control** – enforce IAM/role policies that bind a tenant’s credentials to its namespace only.  
3. **Encryption** – encrypt at rest per‑tenant (AEAD keys derived from tenant secrets).  
4. **Audit & monitoring** – log every read/write with tenant context; alert on anomalies.  
5. **Isolation verification** – periodic consistency checks: run a “sanity” query that ensures no record leaks across shards.

---

**Depth**  
- *Sharding*: Use consistent hashing to map `tenant_id → shard`. Each shard is a separate table/partition, so cross‑tenant reads are impossible at the storage layer.  
- *IAM*: Leverage fine‑grained policies (e.g., DynamoDB `Condition` on `tenant_id`) that reject any request with mismatched keys.  
- *Encryption*: Store an HMAC of `tenant_id + payload`; verify before decryption to catch accidental cross‑writes.  
- *Complexity*: O(1) lookup per tenant; shard creation cost negligible relative to 50 M records.  
- *Trade‑offs*: Extra metadata overhead (~bytes per record) for tenant tags and HMACs.

---

**Edge Cases**  
- **Shard rebalancing**: Ensure migration preserves tenant boundaries.  
- **Tenant churn**: On deletion, purge all records in that shard atomically.  
- **Privilege escalation**: Test that service accounts cannot bypass IAM checks.  
- **Data corruption**: Detect HMAC mismatches and quarantine affected records.

---

**Optimize & Communicate**  
- Future‑proof by adding a tenant‑level audit log table to track access patterns.  
- Present the design in a diagram (shard → tenant_id → IAM).  
- Emphasize that failure isolation is *per shard*: only the impacted shard’s 5 M records are exposed, not all 50 M—blast radius limited to that tenant’s data set.

> **Blast Radius**: At worst, a single tenant’s ~5 M memories could be leaked or corrupted; the rest of the system remains untouched due to strict sharding and IAM enforcement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
