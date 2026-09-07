---
qid: ing_46edb19c4e__faang__local
question: 'Explain: Multi-Step Injection Defeats Single-Payload Defenses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:05-05:00'
sources: []
---

**Clarify**  
The question asks why an attacker can bypass defenses that only inspect a single “payload” (e.g., one request or one code snippet) by chaining multiple steps. I’ll assume we’re talking about web‑app or API security where a guard checks each incoming payload for malicious patterns, and the attack involves sending several interdependent requests.

**Approach**  
1. Define *single‑payload defense* (regex, WAF rule, sandbox).  
2. Explain how an attacker splits malicious logic across multiple requests.  
3. Show that each individual request passes the guard yet together they form a payload.  

**Depth**  
- **Single‑payload checks** look for known signatures or suspicious tokens in one unit of data.  
- In *multi‑step injection*, the first request might store benign-looking data (e.g., “;”) into a database field, while a second request later retrieves that data and executes it as part of a larger statement (`SELECT … + stored_value`).  
- Because each payload is clean on its own, the guard never flags them. The attack only materializes when the application combines the stored fragments at runtime.  
- This technique also works with *taint‑tracking* defenses: tainted data may be sanitized before use, but if it’s re‑introduced later in a different context, the protection is bypassed.

**Edge Cases**  
- If the defense performs *stateful analysis* (e.g., correlating multiple requests), multi‑step attacks fail.  
- Defenses that enforce strict type/length checks on stored data can also thwart this.  

**Optimize & Communicate**  
To defend, implement *context‑aware sanitization* and *taint propagation across application layers*, plus an audit trail of user actions to detect anomalous sequences. Explain how stateful inspection adds complexity but significantly raises the bar for attackers. This narrative shows clear problem framing, a concrete solution path, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
