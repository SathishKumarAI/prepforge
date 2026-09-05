---
qid: ing_a9b67100e9__star__local
question: 'Explain: Load Balancing Across Multiple Servers — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 334
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:09-05:00'
sources: []
---

**Situation**  
During the launch of our SaaS analytics platform, we saw a sudden spike in traffic—up 250% within an hour—causing one of our three application servers to hit 95 % CPU and start timing out requests.

**Task**  
I had to redistribute traffic evenly across all three backend instances without interrupting user sessions or compromising data consistency.

**Action**  
First, I set up a **forward proxy** (NGINX) on an edge VM that routed all external traffic to our load balancer. Then I configured a **reverse proxy** inside the cluster: NGINX listened on port 80, performed health checks, and used round‑robin with sticky sessions based on cookies. For read‑heavy queries I added a Redis cache layer behind the reverse proxy, so cache misses were routed directly to the app servers. I also enabled session persistence via IP hash for stateful dashboards, ensuring users didn’t lose context when the load balancer shifted them.

**Result**  
Traffic was balanced within 30 seconds; CPU dropped below 60% on all nodes and response times improved from 1.8 s to 0.6 s average. We handled a peak of 15k concurrent users without downtime, and learned that combining forward and reverse proxies with health checks gives the most resilient architecture for scaling AI‑powered analytics workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
