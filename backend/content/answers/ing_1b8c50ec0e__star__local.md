---
qid: ing_1b8c50ec0e__star__local
question: 'Explain: How DNS Actually Works — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 354
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:25-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with restoring service for a client’s e‑commerce platform that suddenly stopped resolving the domain “shop.example.com.” Users were hitting a DNS error and revenue dropped by 12% overnight.

**Task**  
I needed to pinpoint why the DNS resolution failed, correct it, and prevent future outages while keeping downtime under 30 minutes.

**Action**  
First I ran `dig @8.8.8.8 shop.example.com` and saw an NXDOMAIN response from the authoritative nameserver. Using `nslookup -debug` I traced the query path back to our internal DNS server, which had a stale zone file due to a recent TTL misconfiguration (TTL set to 86400 instead of 300). I updated the zone file, reloaded BIND with `rndc reload`, and verified propagation with `dig +trace`. To guard against similar issues I added an automated script that checks for unusually long TTLs and sends alerts. Finally, I coordinated a rolling restart of the CDN edge nodes to clear cached bad records.

**Result**  
The domain resolved within 12 minutes, restoring full traffic flow. Post‑incident metrics showed a return to baseline load times in under 15 minutes, and the automated TTL monitor reduced future DNS incidents by 80%. I learned that quick diagnosis relies on understanding both client‑side tools (`dig`, `nslookup`) and server‑side configurations (BIND zone files, TTL settings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
