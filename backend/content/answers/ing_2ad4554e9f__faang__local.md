---
qid: ing_2ad4554e9f__faang__local
question: 'Explain: Action Approval State Machine — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:22:49-05:00'
sources: []
---

**Clarify**  
The interview asks me to describe the *Action Approval State Machine* that governs a **Computer‑Use Agent (C‑UA)** in a production environment—i.e., how the system decides when an agent may execute commands on a host, and what safety checks it must pass. I’ll assume we’re dealing with an enterprise‑grade C‑UA that runs on multiple OSes, interacts with a central policy server, and logs all actions for audit.

**Approach**  
1. Define core states (Idle → Pending → Approved → Executing → Completed/Rejected).  
2. Identify triggers: user request, scheduled task, or system event.  
3. Enumerate guard conditions: authentication, authorization, risk score, resource availability, and policy compliance.  
4. Map transitions and side‑effects (logging, notification).

**Depth**  
- **Idle**: Agent awaits a request.  
- **Pending**: Request is queued; metadata sent to the Policy Engine.  
- **Approved**: Policy Engine returns *allow* with constraints (time window, command whitelist). The agent records the approval token and transitions.  
- **Executing**: The agent runs the command under sandboxed privileges; a watchdog monitors for hangs or policy violations in real time.  
- **Completed/Rejected**: Success or failure is logged, metrics emitted, and any compensating actions (e.g., rollback) triggered.

Complexity: O(1) per request once policies are cached; latency dominated by Policy Engine lookup (~10 ms). Trade‑offs include tighter isolation vs. performance overhead of sandboxing.

**Edge Cases**  
- Network partition → fallback to local policy cache or deny.  
- Policy update while executing → enforce *sticky* approvals until completion.  
- Unexpected crash → ensure rollback and audit trail integrity.

**Optimize & Communicate**  
I’d add a **pre‑flight hook** for high‑risk commands, allowing human override via a UI, and a **dynamic risk score** that adapts to usage patterns. In an interview, I’d conclude by stressing how this state machine balances safety (strict approvals) with usability (low latency), aligning with production reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
