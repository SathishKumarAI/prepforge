---
qid: ing_590bcc90c7__aws__local
question: 'Explain: Unexpected Dialogs — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 461
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:00-05:00'
sources: []
---

**Unexpected Dialogs – Computer‑Use Agents**

*Situation:*  
At a fintech startup I was asked to reduce “unexpected dialog” errors in our AI assistant that auto‑filled user forms on web pages (e.g., “I didn’t ask for this field”). The bug caused a 12 % drop in conversion.

*Task:*  
Design a robust system that detects, logs, and corrects these dialogs with minimal latency, while staying within the $5k/month budget.

*Action:*  
1. **Ownership & Dive Deep** – I first instrumented every agent interaction with CloudWatch Logs (structured JSON) to capture intent‑confidence, dialog state, and user feedback.  
2. **Bias for Action** – Built a lightweight Lambda pipeline that parses logs in near‑real time, flags low‑confidence (< 0.4) or mismatched intent, and routes them to an SQS queue.  
3. **Invent & Simplify** – Deployed an Amazon SageMaker endpoint (batch inference) that re‑scores the dialog using a fine‑tuned BERT model. If the new score is > 0.7, we automatically replace the unexpected prompt; otherwise it goes to human review in the console.  
4. **Scalability & Cost** – The Lambda functions run on 128 MB memory (≈$0.000016 per invocation). With ~30k invocations/day, cost ≈$3/month. SageMaker batch jobs run only when flagged (~2% of traffic), keeping monthly spend under $5.

*Result:*  
Within two weeks the system cut unexpected dialog incidents by **82 %**, lifting conversion rates from 68 % to 78 % (≈+10 pp). I documented the failure‑mode analysis, added automated alerts in CloudWatch, and conducted a post‑mortem with cross‑team stakeholders—demonstrating clear ownership and learning.

*Bar‑raiser takeaway:*  
Showed deep technical dive (log parsing, ML re‑scoring), quantified impact (conversion lift, cost control), and proactive learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
