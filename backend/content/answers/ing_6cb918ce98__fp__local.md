---
qid: ing_6cb918ce98__fp__local
question: 'Explain: Pattern: ReAct — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 388
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:31-05:00'
sources: []
---

**ReAct (Reason + Act) – a minimal, general‑purpose agent**

The core problem any autonomous system faces is *how to decide* and *how to act* without a hand‑crafted pipeline for every new task.  
If an AI can first **reason**—formulate a hypothesis, query knowledge, refine its internal state—and then **act**—produce an output or interact with the environment—then it can adapt to arbitrary inputs while still being transparent about its thought process.

1. **Reasoning as inference over a shared representation**  
   • The agent stores all evidence in a *context vector* (e.g., a chain of text).  
   • A language model performs self‑refining inference: “I think X, but I’m uncertain; let me verify Y.” This mirrors Bayesian updating—each step updates posterior beliefs based on new data.

2. **Acting as policy execution**  
   • Once the belief state exceeds a confidence threshold, the agent emits an *action token* (e.g., “ANSWER: …”).  
   • The action is then executed or returned to the user. This decouples deliberation from execution, akin to separating perception and motor control in robotics.

The pattern emerges from **information‑theoretic efficiency**: by iteratively narrowing uncertainty before acting, the agent maximizes expected utility per token.  

**Non‑obvious insight:**  
Because reasoning is expressed as *text* that can be appended to future prompts, ReAct naturally supports *memory replay*: past decisions become part of the context, enabling self‑correcting behavior without external state storage. This turns a simple language model into a quasi‑reinforcement‑learning agent that learns from its own trace.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
