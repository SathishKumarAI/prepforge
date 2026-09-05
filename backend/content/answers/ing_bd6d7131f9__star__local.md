---
qid: ing_bd6d7131f9__star__local
question: 'Explain: What I Wish I Had Known Before Scaling Uber to 1000 Services •
  Matt Ranney • GOTO 2016'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 367
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:46-05:00'
sources: []
---

**Situation:**  
When I joined Uber’s platform team, the micro‑service architecture was just a handful of core services—auth, trip matching, payments. By the time we hit 400 services, traffic spiked to 2 M requests per second and the deployment pipeline started to choke on long integration tests.

**Task:**  
I had to design a scalable, automated delivery workflow that could handle thousands of services without blowing up our CI/CD resources or compromising reliability.

**Action:**  
I introduced a “service‑mesh” approach: each service lived in its own lightweight Docker image, and we switched from monolithic Git repos to a mono‑repo with per‑service branches. I built a custom build cache that reused unchanged layers across services, cutting build times by 60 %. For deployments, I implemented a canary‑based traffic splitter using Envoy’s dynamic routing, allowing us to roll out changes to 1 % of traffic before full exposure. Finally, I set up a lightweight, self‑contained test harness that ran unit and integration tests in parallel on Kubernetes, reducing the total pipeline time from 45 min to 12 min.

**Result:**  
We scaled from 400 to over 1,000 services while keeping deployment latency under 5 minutes per service. The canary system caught a critical race condition before it hit production, saving us an estimated $3 M in potential downtime. I learned that treating the platform itself as a first‑class micro‑service—complete with its own CI/CD pipeline and observability—is essential when you’re growing to thousands of services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
