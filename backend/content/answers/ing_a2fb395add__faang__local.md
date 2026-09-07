---
qid: ing_a2fb395add__faang__local
question: 'Explain: Why the multiple A record solution doesn’t work with GSLB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 481
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:27-05:00'
sources: []
---

**Clarify**  
You’re asking why a DNS setup that returns *multiple* A‑records (one per server) fails for Global Server Load Balancing (GSLB). I’ll assume:  

- The DNS resolver receives several A records for the same hostname.  
- Clients use the first returned IP or randomize among them.  
- You want global traffic distribution based on proximity, health, etc.

**Approach**  
Explain how GSLB relies on DNS to steer users to the “best” server, and why simply listing all servers defeats that logic. Outline:  

1. DNS caching & TTL.  
2. Resolver behaviour (round‑robin vs. first‑return).  
3. Lack of health or latency feedback.

**Depth**  
When a client queries `www.example.com`, the authoritative nameserver returns, say, 10 A records: 10 IPs spread across regions. The resolver typically picks the *first* record or randomizes only once per TTL. Subsequent queries during that TTL will hit the same IP, even if that server becomes unhealthy. Moreover, DNS cannot convey real‑time metrics; it can’t adapt to latency spikes or failures between lookups. Thus, GSLB’s goal—directing traffic based on current conditions—is lost; all users may end up on a suboptimal or downed node.

**Edge Cases**  
- If the resolver implements true round‑robin per request, you’ll still get uneven distribution.  
- Some resolvers cache only one IP per host, ignoring the rest.  
- Health checks at application layer won’t affect DNS responses.

**Optimize & Communicate**  
Use a *single* A record that points to a GSLB service (e.g., a load‑balancer or Anycast IP) which then routes traffic intelligently. Alternatively, employ Geo‑DNS with weighted records and health checks, ensuring TTLs are short enough for rapid failover. Explain the trade‑off: shorter TTL → more queries but fresher routing; longer TTL → less DNS overhead but stale routing. This demonstrates clear reasoning, technical depth, and an understanding of production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
