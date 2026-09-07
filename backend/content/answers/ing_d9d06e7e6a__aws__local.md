---
qid: ing_d9d06e7e6a__aws__local
question: How to choose a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 392
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:04-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When launching a global SaaS product we saw latency spikes for users in Asia and Europe. I owned the decision to pick a CDN that would reduce 4xx/5xx errors from 3 % to <0.1 % while keeping cost under $2K/month.

**Action (Dive Deep & Ownership)**  
I benchmarked three AWS‑compatible CDNs—Amazon CloudFront, Fastly, and Akamai—using a synthetic load test that simulated 10k RPS from 20 regions. I evaluated:  
- **Edge cache hit ratio** (target >95 %)  
- **Time‑to‑First Byte (TTFB)** (<120 ms globally)  
- **Cost per GB transferred** and **customized pricing tiers**  

CloudFront offered the best trade‑off: 97 % hit ratio, 110 ms TTFB in AP‑Southeast, and a pay‑as‑you‑go model that kept us $1.2K/month. I also enabled **Origin Shield** to reduce origin load by 30 % and set up Lambda@Edge for real‑time header rewrites, cutting error rates from 3 % to 0.07 %.

**Result (Deliver Results)**  
After rollout:  
- Latency dropped 45 % in AP‑Southeast & EU‑Central.  
- Error rate fell 90 %.  
- Monthly CDN spend stayed $1.8K, below budget.  

**Learning** – I documented the benchmark scripts and created a “CDN‑selection playbook” that other teams now use, ensuring repeatable, data‑driven decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
