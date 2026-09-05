---
qid: ing_28d13d8747__star__local
question: 'Explain: Failure modes & mitigations — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 350
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:50:00-05:00'
sources: []
---

**Situation:**  
When we launched a chatbot to triage Tier‑1 tickets in our SaaS product, the first month’s CSAT dipped from 92 % to 78 %. Users complained that the bot misunderstood “reset password” as a billing issue and routed them incorrectly.

**Task:**  
I had to identify the failure modes of the agent—misclassification, hallucination, and lack of escalation—and redesign its architecture so that it handled ambiguous queries gracefully while keeping latency under 1.2 s.

**Action:**  
I introduced a confidence‑threshold layer on top of our transformer model (distilBERT fine‑tuned on 12K support logs). Queries with <70 % confidence were sent to a fallback rule‑engine that matched key phrases (“reset”, “forgot”) and routed them straight to the live agent queue. I also added a small “clarification” dialog loop: if the bot detected an ambiguous intent, it asked a clarifying question before proceeding. Finally, we set up a nightly retraining pipeline using new ticket data plus the bot’s own correction logs.

**Result:**  
Within two weeks, CSAT rose to 91 %, and first‑contact resolution improved from 64 % to 82 %. The fallback rate dropped by 45 %, and overall support cost per ticket fell by 18 %. I learned that combining probabilistic NLP with lightweight rule‑based safety nets can dramatically reduce AI failure modes in live customer interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
