---
qid: ing_708e19648d__aws__local
question: 'Explain: Common Failure Modes — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 467
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:55-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a global AI inference platform that served 2 M users/day. Post‑launch, we hit repeated outages during traffic spikes—availability dropped from 99.999% to 98.5%, costing us $1.8 M in SLA penalties and eroding customer trust.

**Action – Design & Execution**  
*Customer Obsession + Ownership* – I mapped every failure mode (EC2 spot termination, GPU pod failure, network partitions).  
- **Redundancy**: Deployed the inference service on two AZs behind an Application Load Balancer (ALB) with health‑check routing.  
- **Auto Scaling & Spot Fleet**: Configured mixed‑capacity fleets for cost control while maintaining at least 4 GPU instances per AZ.  
- **Stateful fallback**: Persisted model weights in S3 + EFS; if a pod dies, the next instance pulls from the same snapshot, eliminating warm‑up latency.  
- **Circuit Breaker & Retry**: Implemented a local cache with DynamoDB TTL to buffer requests during downstream failures.  
- **Observability**: CloudWatch metrics + X-Ray traces surfaced bottlenecks; alerts triggered on 5xx rate >2%.  

**Result**  
Availability rose to 99.995% in 3 months, SLA penalties dropped by 90%, and monthly inference cost fell 35% due to spot savings. *Dive Deep* was key: I ran post‑mortems, logged every failure pattern, and iterated on the design—learning that “one‑size‑fits‑all” scaling is a myth for AI workloads.

**Bar‑raiser takeaway**  
I demonstrated ownership (owning the whole stack), deep technical dive (identifying root causes), quantified impact (99.995% availability, $1.8 M saved), and continuous learning from failure—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
