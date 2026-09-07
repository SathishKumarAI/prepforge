---
qid: ing_e55e71d642__faang__local
question: 'Explain: DAC (Discretionary Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 499
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:31-05:00'
sources: []
---

**Clarify**  
We’re asked to design a permission system that implements *Discretionary Access Control* (DAC). DAC lets owners of resources grant or revoke access at will; the model is owner‑centric and flexible but can be vulnerable if not carefully audited. I’ll assume we need:  
- Fine‑grained permissions on objects (files, APIs, data sets)  
- Role‑based inheritance (users → groups → permissions)  
- Auditability and revocation in real time  

**Approach**  
1. **Entity model** – `User`, `Group`, `Object`, `Permission` (read/write/delete).  
2. **Ownership flag** on each object.  
3. Store ACL entries: `(subject, object, permissions)` where subject can be a user or group.  
4. Resolve effective rights by merging owner rights + inherited group rights + explicit denies.  
5. Use an event‑driven audit log (Kafka) to capture every grant/revoke.  

**Depth**  
- **Data store**: NoSQL key‑value for ACLs (fast lookup), relational DB for users/groups, and a distributed cache (Redis) for hot paths.  
- **API**: `grant(user|group, object, perms)`; `revoke`; `check(user, object, perm)` that checks owner first, then group hierarchies.  
- Complexity: ACL read is O(log n + g) where *g* = number of groups a user belongs to (usually small). Grants/revokes are amortized O(1).  
- Security: Deny entries override allows; audit log ensures tamper‑evidence.  

**Edge Cases**  
- Cyclic group memberships → detect via DFS at grant time.  
- Revoking an owner’s rights must trigger re‑assignment or denial.  
- Large objects with many ACLs → paginate and cache partial results.  

**Optimize & Communicate**  
To scale, batch writes to the ACL store and use vector clocks for conflict resolution in distributed environments. I’d present this architecture as a layered diagram: users/groups → ACL store → permission engine → audit stream, emphasizing that DAC’s flexibility is balanced by strict auditing and efficient lookup. This satisfies FAANG’s signal of structured reasoning, depth, and clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
