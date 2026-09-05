---
qid: ing_de9007e2db__star__local
question: 'Explain: Indirect Prompt Injection (IPI) Defense in Depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 376
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:51-05:00'
sources: []
---

**Situation** – While leading the AI‑chatbot team at a fintech startup, we noticed that malicious users could embed hidden prompts in seemingly innocuous user messages, causing the LLM to execute unintended commands (indirect prompt injection). The bot was responsible for sensitive financial queries, so any leakage risk was unacceptable.

**Task** – Design a defense‑in‑depth strategy to detect and block IPI attempts without degrading user experience or response latency.

**Action** – First, we added a pre‑processing layer that tokenizes every incoming message with a custom lexer to flag control characters and hidden markup. Next, we wrapped the LLM calls in a sandboxed container (Docker + gVisor) that restricts filesystem access and caps CPU usage. We then introduced a semantic analyzer built on a lightweight BERT model fine‑tuned for “prompt‑like” patterns; any message scoring above 0.85 was automatically rewritten with a safe prompt template. Finally, we logged all flagged attempts to an SIEM (Splunk) for continuous threat hunting.

**Result** – After deployment, the bot’s IPI success rate dropped from ~18% to <1%, while average response time increased by only 12 ms. The layered approach also reduced false positives, keeping user satisfaction above 92%. I learned that combining lexical filtering, sandboxing, and semantic scoring delivers robust protection without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
