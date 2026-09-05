---
qid: ing_38e9a30edb__fp__local
question: 'Explain: Contact sales — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 492
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:45-05:00'
sources: []
---

**Why the two Elastic Cloud models differ**

The core problem Elastic solves is *search‑and‑analytics at scale*.  
A user needs a cluster that can ingest, index, query and store data with predictable latency while remaining cost‑effective.  

1. **Hosted (VM‑based) clusters**  
   *Infrastructure* – you pay for virtual machines, storage, networking, and the Elastic software license per node.  
   *Control* – you decide CPU, RAM, disk type, scaling policy, backup cadence, etc.  
   *Optimization principle*: You trade off **capability vs. cost** by provisioning just enough hardware to satisfy peak throughput, then using autoscaling or manual resizing for lower periods.  

2. **Serverless clusters**  
   *Abstraction* – Elastic abstracts away the VM layer; you pay per request‑unit (RU) or token that represents a combination of CPU, memory and I/O consumed during a query or index operation.  
   *Probabilistic billing* – Because requests vary in cost, Elastic aggregates them into RUs that are statistically equivalent to a fixed compute budget.  
   *Optimization principle*: You pay for actual *work done*, not idle capacity, aligning costs directly with usage patterns.

**Why the pricing must look different**

- **Fixed vs. variable resources**: Hosted models require you to provision ahead of time; serverless pays only when work happens.  
- **Risk allocation**: In hosted mode the customer bears risk of over‑provisioning; in serverless Elastic absorbs that risk by handling scaling automatically.  
- **Cost predictability**: For steady, predictable workloads, hosted pricing can be cheaper because you avoid per‑RU overheads. For bursty or highly variable traffic, serverless avoids waste.

**Non‑obvious insight**

Many overlook that *serverless RU units are not a one‑size‑fits‑all metric*. They encapsulate **probabilistic performance guarantees**—Elastic’s internal scheduler may throttle or batch requests to keep latency within SLA, so two identical RUs can represent different actual resource consumption depending on cluster load. Thus, when comparing costs you must also consider the *workload profile*: a heavily throttled serverless deployment may end up cheaper than a lightly used hosted cluster because fewer real resources are consumed overall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
