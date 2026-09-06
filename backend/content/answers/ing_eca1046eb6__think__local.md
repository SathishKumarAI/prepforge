---
qid: ing_eca1046eb6__think__local
question: 'Q: Your agent''s memory store has 50M memories across 10K tenants. How
  do you guarantee cross-tenant isolation and what''s your blast radius if isolation
  fails?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 692
total_tokens: 905
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:38:47-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
* Confirm what “memory store” means (e.g., key‑value DB, vector index, RDBMS).  
* Define “cross‑tenant isolation”: no tenant can read/write another’s data or infer its existence.  
* Identify threat model: accidental leaks via bugs, mis‑configured queries, or intentional attacks.  
* Assume we have a central service layer that mediates all access and a persistent store that supports per‑record tags.

**2️⃣ Mental model / framework**  
Use the *“least privilege + defense‑in‑depth”* pattern:  
1. **Data partitioning** – physical separation or logical tagging.  
2. **Access control** – fine‑grained ACLs enforced at every layer (API gateway, service, DB).  
3. **Audit & monitoring** – detect anomalies early.  
4. **Fail‑safe defaults** – deny on error.

**3️⃣ Step‑by‑step reasoning**  

1. **Partitioning**  
   * Option A: separate schema/collections per tenant → physical isolation (e.g., one database per tenant).  
   * Option B: single collection with a mandatory `tenant_id` column and enforce it via query filters or row‑level security.

2. **Access enforcement**  
   * API gateway injects the authenticated `tenant_id`.  
   * Service layer automatically appends the filter (`WHERE tenant_id = :id`).  
   * Database enforces RLS so that even if a query omits the filter, rows are invisible.

3. **Sanity checks**  
   * Run automated tests: try cross‑tenant reads/writes; expect failures.  
   * Perform code reviews on any place where `tenant_id` is omitted or overridden.

4. **Monitoring & alerts**  
   * Log every query with tenant context.  
   * Detect spikes in “unknown tenant” errors → potential mis‑routing.

5. **Fail‑safe defaults**  
   * If a request fails to supply a tenant ID, reject it instead of proceeding.

6. **Blast radius calculation**  
   * With RLS enabled and no logical gaps, the blast radius is limited to the tenant’s own rows.  
   * If isolation fails (e.g., RLS disabled or query filter omitted), the worst‑case is all 50 M memories being exposed – a global data breach.

**4️⃣ Common traps & how to avoid them**  

* **Assuming physical separation alone suffices** – logical checks must still be present.  
* **Hardcoding tenant IDs in code** – leads to copy‑paste errors; always derive from auth context.  
* **Ignoring default deny policies** – a missing ACL can become the weakest link.  
* **Overlooking indirect data flows** (e.g., logs, metrics) that could leak tenant IDs.

**5️⃣ Communicating the plan**  

Explain the layered approach: “We’re using row‑level security to enforce isolation; every request carries a tenant ID injected by our gateway, and we audit all accesses. Even if one layer slips, RLS prevents cross‑tenant data visibility. The blast radius is therefore contained to the affected tenant’s 50 M rows, not the entire store.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
