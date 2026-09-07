---
qid: ing_fa3ea50ee1__aws__local
question: 'Explain: Describe the throughput - latency tradeoff curve for an LLM server,
  and explain goodput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 430
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:10-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Customer Obsession, Ownership)**  
When I was building a low‑latency inference platform for a commercial chatbot, the engineering team needed to understand how throughput and latency interact on our LLM servers so we could pick the right instance type and autoscaling policy.

**Action (Dive Deep, Bias for Action)**  
I profiled 10 k requests per second across *g4dn.xlarge* and *p3.2xlarge* instances. I plotted a **throughput‑latency curve**: as we pushed more concurrent requests, latency rose sharply after the saturation point (≈5 k rps on g4dn). The curve is convex—initially small throughput gains for modest latency increases, then steep latency penalties beyond capacity.  
I introduced **goodput** = *throughput × success‑rate*, measuring the amount of useful data actually returned per second. On g4dn at 5 k rps goodput was 4.8 k rps (2% loss due to queuing), while on p3.2xlarge it stayed near 9.7 k rps with <1% loss.

**Result (Deliver Results, Invent & Simplify)**  
By selecting *p3.2xlarge* and configuring a target tracking policy at 70 % CPU, we reduced average latency from 120 ms to 45 ms while increasing goodput by 30 %. Cost per inference dropped 18 % because the higher throughput amortized GPU charges.

**Bar‑raiser takeaways**  
- Ownership: I owned end‑to‑end performance tuning.  
- Dive Deep: Quantified latency spikes and calculated goodput to reveal hidden losses.  
- Learning from Failure: The initial plan underestimated queuing, so we iterated on autoscaling thresholds—demonstrating rapid bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
