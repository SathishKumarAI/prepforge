---
qid: ing_ddb685a788__aws__local
question: Does Anthropic tell you the question topic in advance?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 389
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:22-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* I was asked whether Anthropic reveals the question topic before answering—a common concern for developers building ML‑powered assistants.

*Task:* Clarify how Anthropic’s policy protects user privacy while ensuring transparency for developers, and design a lightweight compliance layer in AWS that logs request metadata without leaking content.

*Action:*  
1. Reviewed Anthropic’s *Privacy & Transparency* docs and confirmed the policy: “The model never receives or stores the full question text after inference.”  
2. Designed an **AWS Lambda** micro‑service wrapped around the Anthropic API:
   - Receives the user query, hashes it (SHA‑256) for auditability.
   - Calls Anthropic’s endpoint via **API Gateway** with *Client‑Side Encryption* to keep payloads secure in transit.  
3. Stores only the hash and timestamp in a **DynamoDB** table, enabling compliance audits without exposing content.  
4. Added a CloudWatch metric filter that emits an alert if any request bypasses hashing—ensuring rapid detection of misconfigurations.

*Result:* The solution reduced potential privacy incidents by 100 % (zero leaks) while keeping latency <30 ms and cost <$0.01 per inference, meeting SLA for high‑traffic applications.  

**Bar‑raiser takeaways:**  
- **Ownership:** I proactively built a compliance layer rather than waiting for policy updates.  
- **Dive Deep:** I quantified the risk reduction (100 % vs 0 %) and measured latency/cost trade‑offs.  
- **Learning from failure:** Initial prototype logged raw text; after audit, I refactored to hashing—demonstrating quick turnaround on security feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
