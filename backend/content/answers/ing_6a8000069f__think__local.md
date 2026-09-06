---
qid: ing_6a8000069f__think__local
question: What are some disadvantages of CDNs? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 467
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:03:37-05:00'
sources: []
---

**Thinking process for answering “What are some disadvantages of CDNs?”**

1. **Clarify the scope & assumptions**  
   - *Scope*: Only discuss typical CDN drawbacks (cost, complexity, data privacy, caching limits).  
   - *Assumptions*: The audience knows what a CDN is; we’re not covering alternatives like edge computing or server‑less.

2. **Choose a mental model / framework**  
   - Use a **“Cost–Benefit” matrix**: list each disadvantage as a cost side, and pair it with the benefit (latency reduction) to keep perspective balanced.

3. **Reason step‑by‑step toward concrete points**  
   - Identify common pain points from real deployments:  
     1. **Financial overhead** – subscription fees, pay‑per‑GB charges.  
     2. **Operational complexity** – cache invalidation, origin failover configuration.  
     3. **Limited control over content** – inability to run custom code at the edge (unless using functions‑as‑a‑service).  
     4. **Data residency & privacy concerns** – copies of data stored in multiple jurisdictions.  
     5. **Cache staleness / consistency issues** – stale content if TTLs are misconfigured.  
   - For each, explain *why* it’s a disadvantage and give a brief example.

4. **Avoid common traps**  
   - Don’t conflate CDN with “edge computing”; they’re related but distinct.  
   - Resist over‑generalizing: not every CDN has the same feature set (e.g., some offer custom rules, others don’t).  
   - Steer clear of overly technical jargon that could alienate a non‑expert audience.

5. **Sanity‑check & communicate clearly**  
   - Verify each point against reputable sources (vendor docs, industry case studies).  
   - Keep sentences concise; use bullet points for readability.  
   - End with a quick summary: “While CDNs dramatically cut latency, they add cost, complexity, and sometimes privacy trade‑offs that teams must weigh.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
