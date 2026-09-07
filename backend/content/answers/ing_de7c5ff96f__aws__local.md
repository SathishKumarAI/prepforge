---
qid: ing_de7c5ff96f__aws__local
question: 'Explain: Red flags interviewers watch for — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 405
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:46-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* I was interviewing for an AI‑platform lead role at a fintech startup that wanted to launch a conversational chatbot in two months.

*Task:* Interviewers asked me to explain “red flags interviewers watch for – Prompt Engineering and Context.” They expected a concise, data‑driven answer plus a quick design sketch.

*Action:*  
1. **Red flags**:  
   * **Context leakage** – prompts that inadvertently expose sensitive user data (e.g., embedding account numbers). I highlighted how this violates GDPR and can lead to $2 M in fines.  
   * **Prompt drift** – models trained on stale corpora produce biased or irrelevant outputs; I cited a 30 % drop in NPS when context windows were >10 k tokens.  
   * **Over‑prompting** – excessive token usage inflates costs (≈$0.06 per 1,000 tokens on GPT‑4).  

2. **Mitigation design**:  
   * Use **Amazon Bedrock** with a custom policy layer that strips PII and truncates context to the last 5 k tokens.  
   * Deploy a **Lambda@Edge** function for real‑time prompt sanitization, ensuring <10 ms latency.  
   * Store cleaned prompts in **DynamoDB** for auditability; set up CloudWatch metrics (prompt length, token cost).  

3. **Result:** Implemented this pipeline reduced token usage by 45 %, cut API spend from $12k to $6.5k/month, and maintained NPS at 88%.

*Reflection:* I learned that ownership means anticipating hidden costs and compliance risks before they surface. I’ll keep iterating the policy layer as new regulatory rules emerge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
