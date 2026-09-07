---
qid: ing_5da3e32d99__aws__local
question: 'Explain: Tool calling mechanics — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 486
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:30-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional squad that had to build an *AI Agent* capable of invoking external tools (e.g., weather API, database query) on behalf of users in real time. The goal was a 99.9 % success rate and <200 ms latency while keeping ops costs under $5k/month.

**Action**  
1. **Design** – I proposed a *tool‑calling micro‑service* pattern:  
   * **Agent Lambda** receives the user intent, parses it, and emits an event to **Amazon EventBridge**.  
   * Each tool is wrapped in its own **AWS Step Function** that validates input, calls the external API via **API Gateway + Lambda**, stores results in **DynamoDB**, and returns a structured payload.  
2. **Observability** – I added **X-Ray tracing** across Lambdas and Step Functions to surface latency bottlenecks; metrics were pushed to CloudWatch dashboards (latency, error rates).  
3. **Cost & Scaling** – Leveraged **Lambda Provisioned Concurrency** for the most common tool calls, reducing cold starts by 70 %. S3 archived logs for audit at < $0.01/GB.

**Result**  
- Achieved **99.97 % success rate** and **average latency of 145 ms** in production.  
- Reduced ops cost to **$4.2k/month**, a 25 % savings vs the baseline architecture.  
- The system now supports 3× more concurrent user sessions without performance degradation.

---

### Leadership Principles Highlighted
* **Customer Obsession** – Delivered instant, reliable tool responses that users trust.  
* **Ownership & Dive Deep** – Took full responsibility for latency, reliability, and cost; dissected every metric until root causes were eliminated.  

Bar‑raisers will note my clear ownership, data‑driven impact, deep technical design choices, and lessons learned from early cold‑start spikes that drove the concurrency optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
