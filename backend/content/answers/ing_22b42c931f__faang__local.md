---
qid: ing_22b42c931f__faang__local
question: 'Explain: Design the AutoGLM product end to end: a cloud service that lets
  users delegate multi-step phone tasks ("order my usual coffee") to an autonomous
  agent. Walk through the architecture and the failure modes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 516
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:04:59-05:00'
sources: []
---

**1️⃣ Clarify**  
We build *AutoGLM*: a cloud‑hosted autonomous agent that executes multi‑step phone tasks (e.g., “order my usual coffee”). Key assumptions:  
* Users authenticate via OAuth; speech is captured by a mobile client and streamed to the service.  
* The agent must handle natural language intent, context retention across turns, and external API calls (ordering, payments).  
* SLA: <5 s per turn, 99.9% availability.

**2️⃣ Approach**  
1. **Front‑end** – Mobile SDK streams audio → ASR microservice.  
2. **Back‑end** –  
   * **Intent & Slot Engine** (AutoGLM model) → maps to a *Task Graph* (nodes = actions, edges = preconditions).  
   * **Dialogue Manager** keeps state, resolves ambiguities, and handles fallback.  
   * **Orchestrator** schedules API calls (e.g., coffee‑shop API, payment gateway), retries on transient errors.  
3. **Execution Layer** – serverless functions per action; results returned to Dialogue Manager.  
4. **Monitoring & Feedback Loop** – logs, RL‑based policy updates from user corrections.

**3️⃣ Depth**  
*ASR*: Whisper‑style transformer, 0.5 s latency.  
*AutoGLM*: encoder–decoder with attention over context window; complexity O(n²) per turn but n≈10.  
*Orchestrator*: event‑driven (Kafka), idempotent calls, circuit breaker pattern.  
Failure modes: ASR mis‑transcription → wrong intent; API downtime → task abort; payment failure → rollback.

**4️⃣ Edge Cases**  
*Ambiguous user requests (“order my usual coffee”) → Dialogue Manager asks for confirmation.*  
*Concurrent sessions → session isolation via UUIDs.*  
*Network partitions → graceful degradation: queue tasks locally, replay on reconnection.*

**5️⃣ Optimize & Communicate**  
- Cache frequent intents (e.g., “usual coffee”) to reduce inference time.  
- Use serverless autoscaling to handle burst traffic.  
- Provide a *“task history”* UI for users to audit past orders.  
During interviews, I’d narrate this flow, highlight trade‑offs (batch vs. streaming ASR), and stress how observability drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
