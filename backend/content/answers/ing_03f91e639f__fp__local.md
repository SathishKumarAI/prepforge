---
qid: ing_03f91e639f__fp__local
question: 'Explain: Disadvantage(s): DNS — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 490
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:13:58-05:00'
sources: []
---

### Why DNS is a **bottleneck** in large‑scale systems

#### The core problem it solves  
DNS turns human‑readable names into IP addresses so that clients can locate services. Internally, every lookup must traverse a hierarchy of authoritative servers and propagate changes through the internet.

#### Why it cannot scale naïvely  
1. **Latency budget:** A single round‑trip to an external resolver can add 10–50 ms; in latency‑sensitive systems (e.g., real‑time trading) this is unacceptable.  
2. **Cache invalidation vs. consistency:** DNS caching is governed by TTLs. Shorter TTLs give fresher data but increase query volume, while longer TTLs reduce load at the cost of stale routing. The trade‑off cannot be tuned independently for every service.  
3. **Single point of failure / split‑brain:** If the authoritative zone or a resolver goes down, all services that rely on it become unreachable, even if the underlying infrastructure is healthy.

#### Deeper principle: *Information propagation cost*  
In a distributed system, disseminating state (here, IP addresses) incurs a communication cost proportional to the number of hops and replicas. DNS centralises this state in authoritative zones; every change must propagate through a hierarchy, violating the *locality* principle that modern architectures favour.

#### Non‑obvious insight  
**DNS is not just a name service—it becomes an *implicit load balancer*.** Because clients cache IPs for TTL durations, a sudden spike to one server can be hidden behind cached entries, causing uneven traffic distribution. Designers often overlook this when scaling microservices; they must either reduce TTLs (increasing query churn) or embed fine‑grained routing logic in the application layer.

In short, DNS’s simplicity hides complex trade‑offs between latency, consistency, and fault tolerance—making it a natural Achilles’ heel for systems that demand rapid, reliable service discovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
