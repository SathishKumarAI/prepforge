---
qid: ing_cb364590b1__star__local
question: 'Explain: 2.1 Traffic Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 445
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:25-05:00'
sources: []
---

**Situation**  
While leading a feature‑rollout for a new playlist recommendation service at my previous company, we hit a roadblock: our internal load balancer reported sudden spikes during early morning hours in the U.S., causing 2 % latency increase. The engineering team needed a realistic traffic estimate to scale the new microservice before launch.

**Task**  
I was tasked with creating a traffic‑forecast model that would predict peak request rates, concurrent users, and data throughput for Spotify‑style music streaming so we could dimension our CDN nodes, cache layers, and database replicas appropriately.

**Action**  
1. I collected historical analytics from the existing catalog service (≈ 15 million streams/day) and applied a 30 % growth projection based on marketing spend.  
2. Using a Poisson distribution, I modeled request arrivals per second to estimate a 95th‑percentile peak of ~ 12 k RPS during prime time.  
3. For concurrency, I multiplied average session length (≈ 35 min) by active users (~ 4 M), yielding ~ 1.2 M simultaneous streams.  
4. I then fed these numbers into a capacity calculator: 10 % headroom, 50 GB/sec bandwidth per region, and 8 replicas for the metadata store to keep read latency < 20 ms. Finally, I presented a heat‑map of regional traffic to the ops team.

**Result**  
The forecast allowed us to provision 12 CDN edge nodes and scale the database cluster by 3× ahead of launch. Post‑deployment metrics showed 99.8 % uptime, 15 % lower cache miss rate, and a 30 % reduction in cost compared to our initial over‑provisioning plan. I learned that blending statistical modeling with real‑world usage patterns is key to reliable traffic estimates in large‑scale streaming systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
