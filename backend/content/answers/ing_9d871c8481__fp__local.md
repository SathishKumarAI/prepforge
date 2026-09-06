---
qid: ing_9d871c8481__fp__local
question: 'Explain: Q87: Your production agent enters a runaway loop, calling a broken
  tool 400 times in five minutes. Walk through the architectural patterns that prevent
  this - at the orchestrator, the tool layer, and the cost-guard layer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 580
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:40:20-05:00'
sources: []
---

**Why a runaway loop must be impossible**

A production agent that blindly invokes a brittle tool repeatedly can exhaust resources and accrue cost before any human sees the problem. The core issue is *unbounded control flow*—the agent has no external feedback on whether its actions are still useful or safe. To guarantee safety we impose *hard limits* at every layer, turning the system into a controlled dynamical process where each component can observe and constrain the next.

---

### 1. **Orchestrator (control‑flow layer)**  
- **Finite‑state machine + watchdog**: The orchestrator models the agent’s workflow as a deterministic state machine with explicit “idle → call → wait → retry” transitions.  
- **Max‑retry counter + exponential back‑off**: Each transition to *call* is guarded by a per‑tool retry counter; once exceeded, the state jumps to *abort*. Back‑off injects decreasing probability of immediate re‑entry, giving downstream layers time to recover.  

### 2. **Tool layer (execution layer)**  
- **Circuit breaker**: The tool exposes an “open/closed” status. If it reports failures or timeouts beyond a threshold, the circuit opens and immediately rejects further calls for a cool‑down period.  
- **Timeout & resource quota**: Every invocation is wrapped in a strict timeout; the tool also tracks per‑minute CPU/GPU usage and refuses new jobs when quotas are hit.

### 3. **Cost‑guard layer (policy layer)**  
- **Rate limiter + budget guard**: A global token bucket ensures that no more than *N* calls can occur in any window, regardless of orchestrator state.  
- **Financial alarm & auto‑termination**: If the estimated cost from a running batch exceeds the pre‑approved budget, the entire job is killed and an alert sent.

---

#### Non‑obvious insight  
The watchdog pattern at the orchestrator is not just a safety net; it acts as a *predictive feedback controller*. By observing the error rate of tool calls in real time, the orchestrator can adjust its retry policy dynamically (e.g., tightening back‑off) before external limits are hit. This proactive tuning turns a reactive “stop when bad” mechanism into an anticipatory “prevent bad” strategy, dramatically reducing both cost and latency overheads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
