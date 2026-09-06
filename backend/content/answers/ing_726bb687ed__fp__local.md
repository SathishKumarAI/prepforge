---
qid: ing_726bb687ed__fp__local
question: 'Explain: The price of availability — The quest for availability in the
  cloud | Pluralsight'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 373
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:07:40-05:00'
sources: []
---

**The price of availability – why “always‑on” in the cloud is a cost, not a free lunch**

At its core, availability is a *resource allocation* problem: you must keep enough compute, storage, and networking capacity idle so that any request can be served within a target response window. In an on‑prem data centre this means provisioning hardware “for peak load” and keeping spare servers warm. In the cloud, the same principle applies but with a different cost structure.

1. **Capacity reservation vs. pay‑per‑use** – Cloud providers charge for virtual machines (VMs) or containers whether they are idle or busy. To guarantee 99.999 % uptime you must run multiple replicas across zones; each replica is a separate billable instance.  
2. **Redundancy as a multiplier** – Fault tolerance requires *geo‑distributed* copies. The probability of simultaneous failure in two regions is the product of individual failure probabilities, so the required redundancy grows logarithmically with desired availability.  
3. **Network & storage I/O** – Even if compute is idle, data must be replicated at 10 Gbps links and stored on high‑durability disks (e.g., S3‑IA vs. S3‑Standard). These are billed per GB‑transfer or per request.

The non‑obvious insight: **availability scales *sublinearly* with the number of replicas because of diminishing marginal costs**—once you exceed a few zones, adding another zone only adds a small percentage of total spend while dramatically reducing failure probability. Thus, architects often overprovision to hit availability targets, but the law of diminishing returns eventually caps the benefit per dollar spent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
