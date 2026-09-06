---
qid: ing_4c279dd432__fp__local
question: 'Explain: Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 444
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:56-05:00'
sources: []
---

**Availability – the “work‑on‑time” metric that turns a cluster into a service**

At its core, availability answers: *how often can a system be used when requested?*  
If we model each component as a Bernoulli process with probability \(p\) of being operational at any instant, then for a single node the expected uptime fraction is simply \(p\). A monolithic server has no redundancy, so its availability equals its mean time between failures (MTBF) divided by MTBF + mean time to repair (MTTR).  

When we add **redundancy**—duplicate nodes, quorum protocols, or erasure coding—the system’s failure event is no longer a single component outage but a *joint* event. The probability of all replicas failing simultaneously drops multiplicatively: \(P_{\text{fail}} = \prod_i (1-p_i)\). This is why a two‑node active–passive pair with independent MTBFs of 100 h and MTTR of 1 h achieves >99 % availability, whereas a single node would only reach ~90 %.  

Mathematically this is an instance of **increasing the reliability function** \(R(t)=e^{-t/\text{MTBF}}\) by transforming it with a *min* (or *max*) operator over replicas. The deeper principle is that availability is essentially a **probability of success under a failure distribution**, and we can shape that distribution through architecture.

A non‑obvious insight: **latency and consistency trade‑offs are not independent of availability**. In a quorum system, raising the read or write threshold reduces the chance of stale reads but also lowers availability because more nodes must be up for each operation. Thus, tuning availability is tantamount to choosing a geometry in the latency–consistency plane; ignoring this coupling leads to over‑optimistic uptime figures that collapse under real traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
