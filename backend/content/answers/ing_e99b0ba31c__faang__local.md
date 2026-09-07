---
qid: ing_e99b0ba31c__faang__local
question: 'Explain: Least connection method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 424
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:42:50-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of the *least‑connection* load‑balancing algorithm and how it fits into overall load balancing strategy. I’ll assume the audience knows basic web traffic concepts but not necessarily the specifics of connection‑based routing.

**Approach**  
1. Define “load balancing” in the context of distributing client requests across backend servers.  
2. Describe the *least‑connection* method as a dynamic, stateful algorithm.  
3. Contrast it with other common methods (round‑robin, IP hash).  
4. Mention practical use cases and limitations.

**Depth**  
Load balancing is the technique of evenly distributing client requests to multiple servers so that no single node becomes a bottleneck. The **least‑connection** algorithm keeps a counter for active connections on each server; a new request is forwarded to the instance with the smallest count. Because it reacts in real time to traffic spikes, it handles sessions or long‑running streams better than static schemes. Unlike round‑robin (fixed order) or IP hash (deterministic mapping), least‑connection adapts to varying connection durations, reducing tail latency and improving resource utilization.

**Edge Cases**  
- **Stateless requests**: if all connections are short, the advantage over round‑robin is minimal.  
- **Unequal server capacity**: naive counting may overload a powerful node; weighted least‑connections mitigate this.  
- **Connection churn**: rapid connect/disconnect can cause oscillations—implement smoothing or exponential moving averages.

**Optimize & Communicate**  
Explain that most modern load balancers expose configuration knobs (weights, timeouts, health checks) to fine‑tune the algorithm. Emphasize that understanding traffic patterns is key: use least‑connection when session persistence or long streams dominate; otherwise, simpler algorithms may suffice. This showcases structured reasoning and practical depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
