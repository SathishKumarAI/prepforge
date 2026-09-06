---
qid: ing_590bcc90c7__fp__local
question: 'Explain: Unexpected Dialogs — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 343
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:40-05:00'
sources: []
---

**Unexpected Dialogs – a principled view**

When a user issues a command, the agent must decide whether it can act autonomously or needs clarification. The *unexpected dialog* problem is that the agent’s internal model of “what the user wants” is inherently uncertain: natural language, ambiguous syntax, and contextual shifts all inject noise into the intent inference.  

From an information‑theoretic standpoint, each action a user might have intended carries a probability distribution \(P(I|C)\), where \(I\) is intent and \(C\) the observed command. The agent should only act when the entropy of this distribution falls below a threshold \(\tau\); otherwise it initiates a dialog to reduce uncertainty. This “entropy‑budget” rule guarantees that the expected loss from acting on a wrong intent never exceeds the cost of asking a question.

The deeper principle is *active learning*: the agent treats clarification as an experiment whose outcome maximally reduces entropy, akin to maximizing mutual information between user responses and intent. Thus, unexpected dialogs are not failures but deliberate explorations guided by a formal criterion.

**Non‑obvious insight:**  
Many agents treat every dialog as costly and therefore suppress them; however, the optimal policy actually *prefers* early clarification when the expected downstream cost of an error is high (e.g., financial transactions). By weighting entropy against task‑specific loss functions, agents can decide to ask even for seemingly trivial commands if the potential penalty outweighs the conversational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
