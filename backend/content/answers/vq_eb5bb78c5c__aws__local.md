---
qid: vq_eb5bb78c5c__aws__local
question: Do you enjoy shopping, or do you find it stressful?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 388
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:57-05:00'
sources: []
---

**Situation & Task**  
During my first year at Amazon, I was assigned to revamp the **Shopping Cart Service** for the US marketplace. Users were reporting frequent time‑outs during peak holidays, and our internal SLA had slipped from 99.9 % to 98.5 %. My goal was to restore stability while keeping the user experience seamless.

**Action**  
- *Ownership*: I took full ownership of the problem, forming a cross‑functional squad (SRE, QA, UI).  
- *Dive Deep*: Using CloudWatch and X-Ray, I identified that the cart’s **Redis cache layer** was saturated during flash sales.  
- *Bias for Action & Invent & Simplify*: I introduced **Amazon ElastiCache with Redis Cluster mode** and implemented a **cache‑aside pattern** to offload read traffic from the database. I also added an exponential back‑off retry logic in the client SDKs to reduce spurious failures.  
- *Customer Obsession*: Conducted A/B tests on mobile vs desktop flows, ensuring that cart persistence improved for 95 % of users.

**Result**  
- Restored SLA to **99.97 %**, a 0.47 % lift over the target.  
- Reduced average cart‑load latency from 1.8 s to **0.4 s** (80 % improvement).  
- Cut operational cost by **$15K/month** by consolidating cache nodes and leveraging spot instances.

**Learning & Bar‑raiser cues**  
I documented the incident in a post‑mortem, highlighting that early detection of cache pressure had prevented a larger outage. This experience reinforced my belief that true ownership means anticipating customer pain before it escalates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
