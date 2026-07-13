---
qid: q004
question: "What is an intelligent agent in AI?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define it as an entity that perceives its environment through sensors and acts on it through actuators to achieve goals, choosing actions via a policy that maps perceptions to behavior. I'd classify types briefly: simple reflex, model-based, goal-based, utility-based, and learning agents, which improve their policy over time.

To show **Ownership** and **Dive Deep** I'd ground it in an LLM agent I built for internal ops. Its environment was a ticketing system; its sensors were API reads of ticket state; its actuators were tool calls to look up orders, draft replies, and escalate. The utility function balanced resolution speed against a hard guardrail: never auto-close without confidence above threshold. That single constraint cut wrongful closures to near zero while automating 45% of tier-one tickets.

The key trade-off I'd surface is autonomy versus safety. More actuator power means more leverage but more blast radius, so I gated high-impact actions behind human approval. On AWS I'd implement this with Bedrock Agents for orchestration, Lambda for tools, DynamoDB for state, and Step Functions for the approval workflow.

A bar-raiser listens for whether I think about an agent as a controlled loop with guardrails and measurable impact, not just a buzzword, and whether I owned the failure modes.
