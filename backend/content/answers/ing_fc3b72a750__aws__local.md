---
qid: ing_fc3b72a750__aws__local
question: 'Explain: Consistent Hashing — Consistenthashing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 423
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:14-05:00'
sources: []
---

**Consistent hashing – a quick‑win for scalability**

*Leadership Principles:* **Ownership** (I own the system’s growth), **Dive Deep** (understand the math behind distribution).

**Situation / Task**  
In my last role I had to redesign a key‑value store that was hitting hot spots as we grew from 10 M to 200 M keys. A single node became a bottleneck, causing 30 % slower read latency.

**Action**  
I introduced consistent hashing:  

1. **Virtual nodes (vnodes)** – map each physical server to 200 vnodes on the hash ring.  
2. **Hash function** – use SHA‑256 for uniform distribution.  
3. **Rebalancing** – when a node joins/leaves, only its neighboring vnodes shift, moving < 5 % of keys.  

I implemented this in Go and deployed it on an **Amazon EC2 Auto Scaling Group** behind an **Elastic Load Balancer (ELB)**. For persistence I used **Amazon DynamoDB** for the hash ring metadata, which guarantees 99.999 % availability.

**Result**  
After rollout, read latency dropped from 120 ms to 35 ms (≈ 70 % improvement) and we avoided a 20 % increase in EC2 costs by keeping the cluster size stable. The system now scales linearly: adding a node only nudges 5 % of keys.

**Bar‑raiser takeaways**  
- **Ownership:** I drove the end‑to‑end solution, from design to production.  
- **Dive Deep:** I quantified hotspot shift and calculated vnode count for optimal balance.  
- **Learning from failure:** The initial attempt with no vnodes caused 40 % unevenness; adding vnodes fixed it—showing iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
