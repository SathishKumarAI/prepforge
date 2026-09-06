---
qid: ing_d9d06e7e6a__think__local
question: How to choose a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 531
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:19:37-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
   - *What problem am I solving?* (latency, bandwidth, global reach, security).  
   - *Who are the users?* (regions, device types).  
   - *Budget & SLAs required.*  
   - Assume we need low latency for a globally‑distributed web app with moderate traffic and cost‑sensitivity.

**2️⃣ Adopt a “CDN‑evaluation” framework**  
   - **Coverage**: number of PoPs / edge locations.  
   - **Performance**: RTT, cache hit ratio, TLS handshake speed.  
   - **Features**: dynamic content support, WAF, DDoS protection, image/video optimization.  
   - **Pricing model**: data transfer + requests vs flat rate.  
   - **Vendor lock‑in & APIs**: ease of switching, Terraform/CloudFormation support.

**3️⃣ Step‑by‑step reasoning**  
   1. *List top candidates* (Akamai, Cloudflare, Fastly, AWS CloudFront, Azure CDN).  
   2. For each, gather data from public benchmarks and vendor docs.  
   3. Map features to our prioritized list from step 1.  
   4. Run a small pilot: deploy identical static assets, measure RTT & cache hit ratio in key regions.  
   5. Compute cost projection for expected traffic.  
   6. Rank vendors; pick the one that meets latency + feature requirements at acceptable price.

**4️⃣ Common pitfalls to avoid**  
   - *Assuming higher PoPs = better performance* – edge proximity matters more than sheer count.  
   - *Ignoring dynamic‑content handling* – many CDNs excel only with static assets.  
   - *Overlooking API/automation support* – hard to roll back if you lock into a vendor.  
   - *Neglecting security features* – DDoS and WAF can be critical for public sites.

**5️⃣ Sanity‑check & communicate**  
   - Re‑run the pilot with a second set of assets; verify RTT consistency.  
   - Validate pricing assumptions against real traffic logs (e.g., 1 TB/month).  
   - Summarize findings in a concise table: vendor | latency | cache hit % | cost per GB | key features.  
   - Present to stakeholders, highlighting trade‑offs and the rationale for the chosen CDN.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
