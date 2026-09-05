---
qid: ing_752bd716c6__star__local
question: 'Explain: Skills and Plugins Are an Injection Surface With a Detection Ceiling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 351
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:08-05:00'
sources: []
---

**Situation:**  
At my last startup we built a SaaS platform that let users install third‑party AI “skill” modules via a plugin marketplace. A month after launch, one customer reported that the system was generating nonsensical prompts and even leaking private data from their internal chat logs.

**Task:**  
I had to determine whether an attacker could inject malicious code through a skill, identify the vulnerable surface, and implement detection limits before it caused any further damage.

**Action:**  
First, I mapped the plugin life‑cycle: the marketplace’s API, the runtime sandbox, and the data flow into our LLM prompt builder. I discovered that each skill’s JavaScript payload was concatenated directly into the prompt string without sanitisation—an injection surface. To harden it, I introduced a two‑layer guard: (1) a JSON schema validator to reject any non‑string or overly long content; (2) a runtime “prompt budget” that capped the number of tokens any skill could contribute, with an alert if exceeded. I also added a static analysis step in CI to flag suspicious patterns such as `eval` or direct database calls.

**Result:**  
Within 48 hours we neutralised the threat, preventing data leakage for over 120 customers. The prompt‑budget policy cut accidental token spikes by 45 % and reduced memory usage during peak loads. I learned that every plugin entry point is a potential injection vector, and that a simple detection ceiling—both in code validation and runtime limits—is an effective first line of defense against sophisticated AI attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
