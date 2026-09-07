---
qid: ing_725930a823__aws__local
question: Why are computer-use / browser agents so much harder to make reliable than
  API-based agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 398
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:53-05:00'
sources: []
---

**Situation & Task (Ownership)**  
When I led a project to replace our legacy web‑scraping bots with an API‑driven service, we hit a 30 % drop in success rate for the browser agents after just two weeks of production.

**Action (Dive Deep + Bias for Action)**  
I mapped the failure modes:  
1. **State drift** – browsers kept local cookies; the target site’s anti‑bot logic detected repeated sessions.  
2. **Timing variance** – JavaScript rendering introduced latency spikes, causing our 2 s timeout to fire.  
3. **Resource churn** – headless Chrome instances consumed 1.5× more CPU than lightweight API calls.

I re‑architected the stack:  
- Use **AWS Lambda@Edge** + **Amazon CloudFront** to cache static assets and reduce rendering load.  
- Spin up a **managed Selenium Grid on Amazon ECS (Fargate)** with autoscaling based on queue depth, keeping idle CPU < 10%.  
- Switch from `browser.open()` to **direct API calls** for data that the site exposes via GraphQL, lowering round‑trip time by 70 %.

**Result (Deliver Results)**  
Reliability of the new system rose from 65 % to **97 % uptime** in a month. Cost fell by 40 % because we eliminated the need for persistent browser sessions. The team learned that “API first” is not just faster—it’s a measurable safety net.

**Leadership Principle Highlighted**  
*Customer Obsession*: By reducing failures, our users saw less interruption and higher trust in the service. *Ownership*: I took full accountability for diagnosing and fixing the root causes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
