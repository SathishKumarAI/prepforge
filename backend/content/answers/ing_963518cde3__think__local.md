---
qid: ing_963518cde3__think__local
question: 'Explain: Connect to the Internet - Internet Gateway (IGW)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 432
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:02:45-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Confirm that “Internet Gateway (IGW)” refers to AWS VPC IGWs, not generic routers.  
   * Assume the reader knows basic networking (subnets, routing tables) but not cloud‑specific terminology.

**2️⃣ Choose a mental model**  
   * Think of a VPC as an isolated network → an IGW is the bridge that connects this private space to the public Internet.  
   * Map the flow: *Instance* → *Subnet route table* → *IGW* → *Internet*.

**3️⃣ Step‑by‑step reasoning**  
   1. **Create VPC & subnets** – they’re internal, no external reach by default.  
   2. **Add an IGW resource** – it’s a managed interface that AWS maintains on your behalf.  
   3. **Attach the IGW to the VPC** – establishes the physical link.  
   4. **Update route tables** – add `0.0.0.0/0` (or IPv6 `::/0`) pointing to the IGW for traffic that must leave the VPC.  
   5. **Configure security groups/NACLs** – allow outbound traffic; inbound rules depend on your use case.

**4️⃣ Avoid common traps**  
   * Forgetting to attach the IGW before adding routes → routing fails silently.  
   * Using a NAT gateway when you actually need direct Internet access.  
   * Mixing up “Internet Gateway” with “Virtual Private Gateway” (VPN).

**5️⃣ Sanity‑check & verbalize**  
   * Verify that an instance can resolve DNS (`dig google.com`) and reach external IPs.  
   * Explain the path in plain terms: “The IGW is like a highway exit; once traffic reaches it, AWS hands it off to the global Internet.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
