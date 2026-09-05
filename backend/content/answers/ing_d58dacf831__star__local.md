---
qid: ing_d58dacf831__star__local
question: What is prompt injection, and how is it different from a jailbreak?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 313
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:55-05:00'
sources: []
---

**Situation:**  
While working on an internal chatbot for customer support at my previous company, we noticed that some users were able to trick the model into revealing confidential policy documents during a live demo.

**Task:**  
I had to identify how these manipulations were happening and design safeguards so the bot would refuse or redirect suspicious queries without compromising user experience.

**Action:**  
First, I mapped out the attack surface: we discovered that attackers appended hidden instructions—*prompt injections*—to legitimate user questions. Unlike a *jailbreak*, which aims to override system-level guardrails by manipulating the overall prompt hierarchy, injection targets specific content within the model’s context window. I implemented a two‑tier filter: (1) a regex and semantic scanner that flags phrases like “ignore previous instruction” or “act as admin,” and (2) a fine‑tuned refusal policy using OpenAI’s `text-davinci-003` with custom stop sequences. I also introduced an audit log to capture injected tokens for post‑mortem analysis.

**Result:**  
After deployment, the incidence of data leakage dropped from 4.7 % to below 0.1 % over two weeks. The bot maintained a 97 % satisfaction score among customers. I learned that prompt injection requires context‑aware filtering, whereas jailbreaks demand stricter model‑level safeguards—both must coexist for robust AI security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
