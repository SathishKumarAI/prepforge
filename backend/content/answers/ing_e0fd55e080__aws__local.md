---
qid: ing_e0fd55e080__aws__local
question: 'Explain: Function calling — Conversational AI latency: What is it and why
  it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 438
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:03-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:*  
I led a team building an Alexa‑style chatbot for a telecom client that needed to answer billing queries in real time. Our baseline latency was 1.2 s, which caused a 15% drop in user satisfaction.

*Task:*  
Reduce end‑to‑end latency while keeping cost <30% of the original budget and maintaining high availability (99.9%).

*Action:*  
I introduced **function calling**—a pattern where the LLM delegates specific tasks to lightweight services rather than generating all content internally.  
1. Deployed an **Amazon Bedrock** model with a custom prompt that, upon detecting a “billing” intent, returns a structured JSON call.  
2. Implemented a **Lambda@Edge** function behind **API Gateway** to fetch user data from DynamoDB and return the answer in <200 ms.  
3. Used **CloudWatch Logs Insights** for real‑time monitoring of function execution time and error rates.  
4. Added an SQS buffer to absorb traffic spikes, ensuring 99.9% availability without over‑provisioning.

*Result:*  
Latency dropped from 1.2 s to **350 ms** (71% reduction), boosting Net Promoter Score by **12 points** and cutting operational cost by **28%**. The solution also reduced API calls by 40%, demonstrating clear ownership of both performance and economics.

**Bar‑raiser takeaways:**  
- Demonstrated *ownership* by redefining the architecture rather than tweaking a single metric.  
- Showed *dive deep* by dissecting latency sources, selecting right services, and quantifying trade‑offs.  
- Learned from initial failures (Lambda cold starts) by adding provisioned concurrency, turning a risk into a cost‑efficient improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
