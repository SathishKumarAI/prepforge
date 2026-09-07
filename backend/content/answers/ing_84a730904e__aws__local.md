---
qid: ing_84a730904e__aws__local
question: 'Explain: The Dual-LLM Defense Pattern — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:01-05:00'
sources: []
---

**Situation / Task**  
While designing a multi‑tenant chatbot for an enterprise SaaS, I noticed attackers could inject malicious prompts that bypass the LLM’s safety filters and exfiltrate data. The goal was to build a **Dual‑LLM Defense Pattern** that blocks prompt injection without hurting user experience.

**Action (Technical)**  
1. *First layer* – A lightweight pre‑processor (AWS Lambda + Amazon API Gateway) runs an open‑source prompt‑sanitizer (OpenAI’s text‑moderation API). If the score > 0.8, it rejects the request immediately.  
2. *Second layer* – Valid requests go to a “trusted” LLM (Amazon Bedrock with Claude‑3‑Sonnet) that has higher safety thresholds.  
3. *Fallback* – If the trusted model flags content, we route to a smaller, cost‑effective LLM (Claude‑3‑Haiku) for a second opinion.  
4. *Monitoring* – CloudWatch logs every rejection; an Athena query feeds into a SageMaker model that predicts injection likelihood and auto‑tunes thresholds.

**Result**  
- Reduced successful prompt injections by **97 %** in production (from 12/2025 to 3/2026).  
- Latency increased only **18 ms** on average, keeping SLA < 200 ms.  
- Cost grew 4 % due to the second LLM pass but saved ~$120K/year by preventing data‑leak incidents.

**Leadership Principles**  
*Customer Obsession*: Ensured users never see injected content while maintaining low latency.  
*Ownership*: Designed, implemented, and maintained the entire pipeline; added automated tuning for continuous improvement.

**Bar‑raiser notes**  
- Demonstrated *ownership* by owning both architecture and ops.  
- Showed *deep dive* through metrics (97 % reduction, 18 ms latency).  
- Learned from early false positives: tweaked thresholds after a failed audit, turning a failure into a stronger system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
