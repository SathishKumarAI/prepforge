---
qid: ing_a9e669c035__star__local
question: 'Explain: Composition Pattern: Support Agent Delegating Refunds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 326
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:24-05:00'
sources: []
---

**Situation:**  
At a mid‑size e‑commerce platform, our customer service team was drowning in refund requests during the holiday surge—average ticket turnaround time spiked from 3 hours to 12 hours, and CSAT dropped to 78%.

**Task:**  
I had to design an AI‑assisted workflow that let support agents delegate refund approvals efficiently while keeping compliance checks intact.

**Action:**  
I implemented a composition pattern by building three lightweight micro‑services: (1) *AgentInterface* for the UI layer, (2) *RefundValidator* that ran business rules and fraud scoring, and (3) *ApprovalEngine* that routed requests to senior agents or auto‑approved when thresholds were met. The agent interface exposed a “Delegate Refund” button; behind it the micro‑services composed in real time: validation → risk assessment → approval decision. I used Kafka for event streaming, Docker containers for isolation, and OpenTelemetry for end‑to‑end tracing so we could monitor latency at each step.

**Result:**  
Refund turnaround dropped to 4 hours (a 66% improvement), CSAT rose to 92%, and the system handled a peak of 5,000 concurrent requests with sub‑200 ms response times. I learned that modular composition not only scales but also makes it easier to audit and update individual rules without redeploying the whole stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
