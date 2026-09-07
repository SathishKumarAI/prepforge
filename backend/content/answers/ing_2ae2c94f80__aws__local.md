---
qid: ing_2ae2c94f80__aws__local
question: 'Explain: Task Success Rate (TSR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 505
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:12-05:00'
sources: []
---

**Task Success Rate (TSR)** is the proportion of user‑initiated tasks that an agent completes correctly before a human or fallback step intervenes.  
It’s my go‑to metric for judging whether an AI assistant truly “solves” problems, not just *talks* about them.

---

### **Situation**
Our internal chatbot handled 30 % of helpdesk tickets without escalation, but senior leadership wanted measurable evidence that it was genuinely solving user issues.

### **Task**
Define a reproducible TSR metric and build an end‑to‑end pipeline to compute it in real time for our AWS‑hosted assistant.

### **Action**
1. **Requirements**  
   * Success = ticket closed with user satisfaction ≥ 4/5.  
   * Failure = escalation or unsatisfied rating.  

2. **Design**  
   * **Event ingestion:** Amazon Kinesis Data Streams capture `ticket_closed` events.  
   * **Processing:** AWS Lambda aggregates counts per 10‑minute window, writes to DynamoDB (key: timestamp).  
   * **Analytics:** Amazon QuickSight visualizes TSR over time; alerts via SNS when TSR < 85 %.  

3. **Scalability & Cost**  
   * Kinesis shards auto‑scale with traffic (~$0.015 per shard‑hour).  
   * Lambda invocations stay under 1M/month ($0.20), DynamoDB storage ~ $0.25/GB.  
   * High availability via multi‑AZ streams; cost‑effective because we only pay for actual events.

### **Result**
Within two weeks of deployment, TSR rose from 30 % to **68 %**, and the mean time to resolution dropped by 35 %. The system now triggers a live dashboard that feeds into our quarterly OKRs, giving leadership clear evidence of impact.

---

**Leadership Principles:**  
- *Customer Obsession* – we measured what matters most to users.  
- *Dive Deep* – built a data‑driven pipeline and tuned it iteratively.  

Bar‑raisers will hear my ownership of the entire pipeline, the depth of technical detail (Kinesis → Lambda → DynamoDB), quantified lift in TSR, and that I learned from initial false positives by refining success criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
