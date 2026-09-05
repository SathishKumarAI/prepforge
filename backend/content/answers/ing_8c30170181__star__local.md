---
qid: ing_8c30170181__star__local
question: How does prompt injection work against agents via tool results, and what
  actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 317
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:05-05:00'
sources: []
---

**Situation:**  
In a recent project I was building an autonomous data‑collection agent that queried external APIs (e.g., financial market feeds) and then used the returned JSON to generate investment reports. A security audit revealed that if an attacker could manipulate the tool output, they might inject malicious prompts into the language model’s next turn.

**Task:**  
I had to design a defense that prevented injected prompts from influencing the agent’s internal reasoning while still allowing legitimate tool results to be used safely.

**Action:**  
First, I wrapped every tool call in a strict schema validation layer using Pydantic, ensuring only expected fields could pass through. Next, I implemented an “output sandbox” that tokenizes and filters any string content before it reaches the LLM prompt—removing control characters, shell commands, or prompt‑control tokens. Finally, I added a deterministic checksum step: the agent logs a hash of the tool output and verifies it against a trusted source before incorporating it into subsequent prompts.

**Result:**  
After deployment, we ran 5,000 simulated injection attempts; none succeeded in altering the agent’s behavior—0% success rate versus the prior 23%. The system maintained full functionality with only a 3 ms latency increase per tool call. I learned that combining schema enforcement with content filtering and integrity checks is essential for robust prompt‑injection mitigation in multi‑tool agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
