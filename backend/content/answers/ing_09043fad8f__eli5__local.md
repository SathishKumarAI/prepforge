---
qid: ing_09043fad8f__eli5__local
question: 'Explain: How should an agent authenticate to downstream systems? Compare
  a shared service account with acting on behalf of the user.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 225
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:50:01-05:00'
sources: []
---

Think of an AI agent as a helpful robot in a busy office building.  
*Shared service account* is like giving the robot a generic key that opens every door. Anyone who knows the key can use it, so if someone slips away with the key the whole building could be compromised.  

“Acting on behalf of the user” is like letting the robot borrow your personal badge for a short time. The badge shows exactly which room you’re allowed to enter and how long you’ll stay. When you finish, the badge is returned and the robot can’t use it again.

**Key terms**  
- *Agent*: software that performs tasks automatically.  
- *Downstream system*: another program or service the agent talks to.  
- *Authentication*: proving who you are so a system will let you in.

The second method keeps each user’s permissions separate, reduces risk of misuse, and makes it clear who did what—just like a badge shows which employee entered which room.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
