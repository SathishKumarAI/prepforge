---
qid: ing_b42618e8bb__think__local
question: 'Q14: How would you design a multi-agent system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 510
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:56-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * What problem will the agents solve (e.g., traffic routing, market simulation)?  
   * How many agents?  Static vs. dynamic population?  
   * Do we need coordination or competition?  Are there shared resources?  
   * Assume a discrete‑time environment with observable state and limited communication.

**2️⃣ Adopt a mental model / framework**  
   * Treat the system as an **Agent‑Based Model (ABM)**: each agent = autonomous entity.  
   * Use the classic **Belief–Desire–Intention (BDI)** architecture for reasoning, or a simpler **State Machine** if tasks are deterministic.  
   * Map interactions onto a **graph** where edges represent communication channels.

**3️⃣ Step‑by‑step reasoning toward design**  
   1. **Define agent roles & capabilities** (e.g., navigator, scheduler).  
   2. **Specify state representation** (local observations + shared knowledge).  
   3. **Choose a decision policy**: rule‑based, reinforcement learning, or evolutionary algorithm.  
   4. **Design communication protocol**: publish/subscribe vs. direct messages; include message schemas and QoS guarantees.  
   5. **Implement coordination mechanisms**: auctions for resource allocation, consensus (Paxos/Raft) if consistency is required.  
   6. **Set up a simulation loop**: time step → perception → planning → act → environment update.  
   7. **Integrate monitoring & logging** to detect deadlocks or performance bottlenecks.

**4️⃣ Common traps to avoid**  
   * Over‑engineering the agent architecture (adding unnecessary layers).  
   * Ignoring scalability; a naive broadcast can collapse with many agents.  
   * Forgetting to handle partial observability or noisy inputs.  
   * Mixing synchronous & asynchronous steps without clear boundaries, leading to race conditions.

**5️⃣ Sanity‑check & communicate**  
   * Run a minimal prototype (few agents) and observe emergent behavior.  
   * Verify that each agent’s local policy aligns with global objectives.  
   * Present the design as a flow diagram: environment → perception → decision → action, highlighting message flows.  
   * Ask a peer to explain the system in one sentence; if they can’t, refine your explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
