---
qid: ing_1989a7d18f__star__local
question: 'Question 1: Does This Information Need to Persist Beyond the Current Turn?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 275
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:23-05:00'
sources: []
---

**Situation:**  
While building a conversational AI for a financial advisory app, we noticed that users often asked follow‑up questions about the same investment portfolio within a single session. The bot was stateless by design, so each turn started from scratch.

**Task:**  
Determine whether we should persist the user’s portfolio context beyond the current turn to improve response relevance without violating privacy or scaling constraints.

**Action:**  
I conducted a quick A/B test: version A kept no state, while version B stored minimal portfolio metadata (ticker symbols and target allocation) in an encrypted Redis cache keyed by session ID. I measured latency, accuracy of recommendations, and user satisfaction scores. The persistence layer used serverless functions to clear data after 30 minutes of inactivity, ensuring GDPR compliance.

**Result:**  
The persistent version cut response time from 1.2 s to 0.8 s, increased recommendation accuracy by 18%, and boosted NPS from 42 to 56. I learned that judicious, short‑lived state can dramatically enhance user experience in AI agents while keeping the system lightweight and privacy‑safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
