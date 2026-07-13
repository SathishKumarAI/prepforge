---
qid: q023
question: "What is the difference between symbolic AI and connectionist (neural) AI?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd contrast them by how knowledge is represented. Symbolic AI (GOFAI) encodes explicit rules, logic, and human-readable symbols, expert systems, knowledge graphs, planners, so it's interpretable and precise but brittle and hard to scale to messy perception. Connectionist AI learns distributed numeric representations from data via neural networks, so it handles noisy, high-dimensional inputs like images and language, but is opaque and data-hungry.

To show **Are Right A Lot** and **Invent and Simplify** I'd anchor it in a hybrid system I designed. For a compliance assistant, a pure neural LLM hallucinated rules, and a pure rules engine couldn't parse free-text queries. So I combined them: the neural model interpreted the user's request and the symbolic layer, hard-coded policy rules, made the final gated decision, giving both flexibility and auditability. That cut incorrect approvals to near zero while keeping natural-language ease of use.

The trade-off I'd name: symbolic gives you correctness guarantees and explainability but poor coverage; neural gives coverage but no guarantees, so combining them, exactly the neuro-symbolic direction the field is moving, buys the best of both at integration cost. On AWS I'd pair Bedrock with a rules layer in Lambda.

A bar-raiser listens for whether I understand each paradigm's real strength and failure mode, and can architect a hybrid where correctness and flexibility both matter.
