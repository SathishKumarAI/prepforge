---
qid: ing_b93b2a03aa__faang__local
question: 'Explain: SRV (Service) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 504
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:47-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the **SRV (Service) record** in DNS—its purpose, format, and why it matters for modern services (e.g., SIP, XMPP). I’ll assume the audience knows basic DNS types (A, AAAA, CNAME) but not SRV specifics.

**Approach**  
1. Define what an SRV record is and its syntax.  
2. Explain the fields: priority, weight, port, target.  
3. Show how clients use it to discover services.  
4. Highlight common use‑cases (VoIP, LDAP, HTTPS load‑balancing).  
5. Touch on quirks: no caching rules, interaction with CNAMEs.

**Depth**  

| Field | Meaning |
|-------|---------|
| **Priority** | Lower numbers win; used for failover. |
| **Weight** | Distribution among same‑priority targets (0 → use all equally). |
| **Port** | TCP/UDP port where service listens. |
| **Target** | Hostname of the actual server (must end with `.`). |

*Resolution flow*:  
1. Query SRV for `_service._proto.example.com`.  
2. Receive list sorted by priority, then randomize by weight.  
3. Resolve each target’s A/AAAA record and connect to `<target>:<port>`.

**Edge Cases**  
- **Circular references**: target points back to the same domain → resolution loop.  
- **CNAME chains**: RFC 2782 forbids CNAMEs at SRV name; must use A/AAAA instead.  
- **Missing records**: fallback to default port (e.g., HTTP on 80).  
- **TTL impact**: SRV TTL can be long, causing stale routing if backend changes.

**Optimize & Communicate**  
I’d illustrate with a real‑world example (`_sip._tcp.example.com` → `priority 10`, `weight 5`, `port 5060`, `target sip1.example.com`). Emphasize that SRV decouples service location from hostnames, enabling dynamic scaling and multi‑protocol support. Conclude by noting that modern load balancers and service meshes often emulate SRV semantics internally for zero‑configuration discovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
