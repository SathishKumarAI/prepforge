---
qid: ing_2a7cf84127__aws__local
question: 'Explain: Level 3: Transport, Security, and Where MCP Runs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 447
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:22-05:00'
sources: []
---

**Situation (S)**  
In my last role I led the rollout of a multi‑cloud AI inference platform for a fintech client that required sub‑millisecond latency and end‑to‑end encryption. The key challenge was to decide *where* the Machine‑Learning Compute Platform (MCP) would run and how we’d secure data in transit.

**Task (T)**  
Design an architecture that guarantees **Transport Security**, controls access, and places MCP in the most cost‑effective location while meeting SLA of 99.99% availability.

**Action (A)**  
1. **Where MCP runs:** I chose **AWS Outposts** for on‑prem inference to keep data local, reducing egress costs by 30 % vs. a public cloud deployment.  
2. **Transport security:** Implemented mutual TLS with AWS Certificate Manager and integrated it into the *App Mesh* service mesh so every gRPC call is encrypted end‑to‑end.  
3. **Access control:** Leveraged IAM roles on Outposts, enforced least privilege via AWS Secrets Manager, and added a custom sidecar that audits all inbound/outbound traffic.  
4. **Scalability & cost:** Configured Auto Scaling groups with spot instances for batch inference; this cut compute spend by 25 % while keeping latency <1 ms.

**Result (R)**  
Within three months we achieved:  
- **99.997 % uptime** over a year, exceeding the SLA.  
- **$400k annual savings** from reduced egress and spot usage.  
- Zero data‑leak incidents during penetration testing.

**Leadership Principles**  
*Ownership* – I drove the decision from concept to production without hand‑offs.  
*Dive Deep* – I benchmarked latency, cost curves, and security audits before finalizing Outposts vs. cloud.  

Bar‑raisers look for a clear ownership trail, deep technical justification, measurable impact, and lessons learned—this solution delivered all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
