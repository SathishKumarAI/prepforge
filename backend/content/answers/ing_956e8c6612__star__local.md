---
qid: ing_956e8c6612__star__local
question: 'Explain: Custom Governance Controls — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 301
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:43-05:00'
sources: []
---

**Situation:**  
When I joined a health‑tech startup, we were building a virtual triage chatbot that used GPT‑4 to handle patient inquiries. Early beta tests revealed that the model sometimes generated ambiguous medical advice and occasionally referenced outdated guidelines, raising safety concerns.

**Task:**  
I was tasked with designing a custom governance framework so the AI could only provide evidence‑based responses while filtering out any risky or non‑compliant content before it reached patients.

**Action:**  
First, I mapped the clinical knowledge graph from our licensed guideline database and created a “safe‑response” layer that cross‑checked every generated sentence against this graph. I integrated a real‑time toxicity filter (OpenAI’s Moderation API) to catch harmful language. For auditability, I built an internal logging system that stored raw model outputs, the applied filters, and the final patient-facing text. Finally, I implemented role‑based access controls so only certified clinicians could approve new prompts or update the knowledge graph.

**Result:**  
Within two months, our compliance score jumped from 68 % to 95 %, and we eliminated all incidents of non‑evidence‑based advice in production. Patient satisfaction rose by 12 % as users reported clearer guidance, and the team now has a repeatable governance process that can scale with additional AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
