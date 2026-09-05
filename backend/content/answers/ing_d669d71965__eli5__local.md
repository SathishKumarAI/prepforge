---
qid: ing_d669d71965__eli5__local
question: 'Explain: Step 3: Fetching User Preferences — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 227
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:17-05:00'
sources: []
---

**Step 3 – “Fetching User Preferences” is like a mailman checking who lives where before delivering letters.**  
Imagine your app as a post office that sends notifications (the letters). Before the postman can hand out a letter, he needs to know which mailbox belongs to each person and what kind of letter they want. In system‑design terms, you query a **user‑profile database** or a fast key–value store (like Redis) for each user’s saved preferences—whether they like push alerts, email digests, or silent updates.  

Once the service pulls those settings, it knows exactly which “mailbox” to send the notification to and in what format. This lookup step is critical: if you miss a preference, the wrong message might go out, just as a mailman sending a postcard to a person who only wants text messages would be a mistake. The key takeaway—fetch preferences first, then route notifications accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
