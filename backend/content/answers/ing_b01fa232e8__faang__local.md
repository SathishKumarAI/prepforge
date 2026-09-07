---
qid: ing_b01fa232e8__faang__local
question: 'Explain: Taxonomy of Agent Failures — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 552
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:57-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Taxonomy of Agent Failures* with a focus on *Error Handling and Recovery*. I’ll assume we mean autonomous software agents (e.g., chatbots, RL agents) that operate in uncertain environments and can fail in predictable ways. Clarify what “failure” means—runtime exceptions, policy violations, or environmental mis‑detections—and the goal: robust recovery so the agent continues functioning safely.

**Approach**  
1. Define failure classes (internal vs external).  
2. Map each class to handling patterns (retry, fallback, safe‑mode).  
3. Illustrate with concrete examples and state‑transition diagrams.  

**Depth**  
| Failure Type | Typical Cause | Handling Pattern | Recovery Path |
|--------------|---------------|------------------|---------------|
| **Syntactic/Runtime Errors** | Null deref, out‑of‑bounds | Defensive coding + try/catch; graceful degradation | Log + reset local state |
| **Semantic Mis‑inference** | Wrong model prediction | Confidence thresholding + human‑in‑loop | Re‑run inference with alternative model |
| **Policy Violation** | Unsafe action proposed | Pre‑execution guard + constraint solver | Rollback to last safe state |
| **Environmental Uncertainty** | Sensor noise, network lag | Redundant sensing + Kalman filter | Switch to high‑confidence mode |
| **Resource Exhaustion** | Memory leak, CPU hog | Resource quotas + garbage collection | Terminate or suspend non‑critical tasks |

Complexity is linear in the number of monitoring hooks; trade‑offs involve latency vs safety.  

**Edge Cases**  
- Cascading failures (e.g., fallback model also fails).  
- Non‑deterministic recovery leading to divergent behavior across runs.  
- Adversarial inputs that bypass guard checks. Test with fuzzing, chaos engineering, and formal verification of guard invariants.

**Optimize & Communicate**  
Start by building a *failure ontology* for the domain; this lets teams map symptoms to root causes quickly. Automate health‑checks and circuit breakers so agents self‑heal before human intervention is needed. When explaining, use a simple state machine diagram to show transitions from “Active” → “Error” → “Recovery” → “Safe Mode”. Highlight that robust error handling is not just about catching exceptions but also about anticipating *why* the agent failed and selecting an appropriate recovery strategy. This demonstrates structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
