---
qid: ing_84a730904e__star__local
question: 'Explain: The Dual-LLM Defense Pattern — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:39-05:00'
sources: []
---

**Situation**  
At my last company we launched a customer‑facing chatbot that pulled data from our internal API. A week after launch, security scans flagged a potential prompt‑injection vector: an attacker could embed SQL‑like syntax in the user’s message and trick the LLM into generating malicious queries.

**Task**  
I had to build a lightweight, real‑time defense that wouldn’t degrade response latency or cost, while ensuring the model still understood natural language intents.

**Action**  
I implemented the Dual‑LLM Defense Pattern. First, a *sanitization LLM* (a distilled GPT‑3.5 instance) runs on every incoming prompt. It rewrites the text to neutralize dangerous tokens and checks for policy violations. If it flags an issue, we block the request immediately. Otherwise, the sanitized prompt is forwarded to our main generation LLM (GPT‑4). The second model receives a short instruction that reminds it to respect the sanitization layer’s constraints and not produce code or queries. I added a confidence score threshold so the first LLM could request human review on borderline cases. All components run in AWS Lambda, keeping cold‑start times under 200 ms.

**Result**  
Within two weeks we saw a 0% injection success rate during penetration tests, while response latency increased only 12 %. User satisfaction scores rose from 78 to 92 pts on the NPS survey. I learned that layering inexpensive, task‑specific LLMs can provide robust security without sacrificing performance, and that continuous monitoring of confidence metrics is essential for adaptive defense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
