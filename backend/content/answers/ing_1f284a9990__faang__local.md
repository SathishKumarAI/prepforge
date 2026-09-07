---
qid: ing_1f284a9990__faang__local
question: 'Explain: Do Not Treat IP as Identity — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 486
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:23-05:00'
sources: []
---

**Clarify**  
The interview question asks why an IP address should **not** be treated as a user’s identity in system design, and what implications this has for privacy, scaling, and security. I’ll assume we’re dealing with typical web services (e.g., API gateways, authentication flows) where users may share or change IPs.

**Approach**  
1. Define “identity” vs. “session”.  
2. Enumerate scenarios that break the assumption.  
3. Show how to design with a proper identity store and session token.  

**Depth**  
- **Identity is immutable, persistent, and unique** (e.g., user ID, email). An IP is *volatile*—mobile devices, NAT, VPNs, CDNs all change it per request.  
- Treating an IP as identity leads to:  
  - *Security flaws*: attackers spoof IPs; legitimate users behind a corporate proxy share one IP → false positives in rate‑limiting or fraud detection.  
  - *Privacy violations*: IP can be geo‑located; using it as a key exposes location data.  
  - *Scalability issues*: IP‑based sharding limits horizontal scaling; sudden traffic spikes from a single IP cause hotspots.  
- Proper design: authenticate via token (JWT, OAuth) → map to internal user ID stored in a replicated database. Use the IP only for analytics or throttling *after* identity resolution.

**Edge Cases**  
- Shared household / IoT devices → same IP but different users → must rely on cookies/tokens.  
- IPv6 vs. NAT64 → address space mismatch; token‑based auth remains consistent.  
- VPNs: IP may point to a data center, not the user’s location.

**Optimize & Communicate**  
Highlight that decoupling identity from transport metadata allows:  
1. **Stateless services** (better scaling).  
2. **Granular ACLs** tied to users instead of network blocks.  
3. **Compliance** with GDPR/CCPA by not linking IP to personal data unless consented.

Conclude by recommending a “token‑first, IP‑last” flow and explaining how this pattern aligns with FAANG’s emphasis on scalable, privacy‑respectful architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
