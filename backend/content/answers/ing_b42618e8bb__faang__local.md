---
qid: ing_b42618e8bb__faang__local
question: 'Q14: How would you design a multi-agent system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:53-05:00'
sources: []
---

**Clarify**  
> “Multi‑agent system” – are we talking about autonomous software agents (e.g., robotics, distributed AI) or game‑AI entities?  
> • What communication protocol is allowed (message passing, shared memory)?  
> • Do agents need to coordinate for a global objective or just avoid conflicts?  
> • Is there a central planner or must the system be fully decentralized?  

**Approach**  
1. Define agent abstraction: state, perception, actions, and learning policy.  
2. Choose an interaction model – publish/subscribe with a broker (e.g., ROS 2) for decoupling.  
3. Implement a lightweight scheduler to enforce real‑time constraints.  
4. Use a shared blackboard or distributed ledger for joint knowledge when needed.  

**Depth**  
- **Architecture**: Microservice‑style agents, each exposing gRPC endpoints; a *broker* (Kafka) routes intent messages.  
- **Coordination**: Multi‑agent reinforcement learning with *centralized training / decentralized execution* (MADDPG). Agents share observations via the broker during training but act independently afterward.  
- **Consistency**: Use vector clocks to order events and resolve conflicts on shared resources.  
- **Scalability**: Horizontal scaling of agents behind a load balancer; statelessness ensures easy replication.  
- **Complexity**: Communication O(k·n) per round (k messages per agent), learning O(n²) due to pairwise critic updates in MADDPG.  

**Edge Cases**  
- Network partitions → fallback to last‑known good policy.  
- Agent failure → watchdog restarts and state snapshotting.  
- Non‑stationary environment → online continual learning with experience replay buffer.  

**Optimize & Communicate**  
- Replace heavy broker with direct peer‑to‑peer gossip for low latency scenarios.  
- Profile message serialization; switch to FlatBuffers if CPU bound.  
- Explain design decisions in a whiteboard session: “We chose decentralized execution because it guarantees fault isolation and linear scalability.”  

This plan balances modularity, learning efficiency, and robustness—key signals interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
