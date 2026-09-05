---
qid: ing_7ca8f05138__eli5__local
question: What is the lethal trifecta, and how do you use it to secure an agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 297
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:08-05:00'
sources: []
---

**The lethal trifecta** is a shorthand for the three moves that let a malicious program (an “agent”) run, spread, and stay hidden in your computer:

1. **Lateral movement** – the agent hops from one device or user to another, just like a burglar slipping from room to room.
2. **Privilege escalation** – it upgrades itself to higher‑level permissions, similar to finding a master key that opens every door.
3. **Persistence** – it keeps a foothold so it can return even after you shut it down, like planting a hidden seed that sprouts again.

To keep your system safe, treat each step as a lock:

- **Detect** the agent’s footprints early (monitor unusual log‑ins or file changes).  
- **Isolate** the affected device or user account to stop hopping.  
- **Remove** the root code and block the master key (patch vulnerabilities, revoke elevated rights).

By breaking any one of these three links—stop it from moving, prevent it from gaining higher power, or erase its hidden seed—you thwart the agent before it can do harm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
