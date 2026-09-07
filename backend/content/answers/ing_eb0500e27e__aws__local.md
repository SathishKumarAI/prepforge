---
qid: ing_eb0500e27e__aws__local
question: The system prompt says one thing, the user asks for another, and a retrieved
  document says a third. How do you design conflict resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 420
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:24-05:00'
sources: []
---

**Situation / Task**  
I led an AI‑powered assistant for a global e‑commerce platform that had to reconcile conflicting instructions from three sources: the system prompt (policy), user query, and knowledge base documents. The goal was to deliver consistent, policy‑compliant answers while maintaining high customer satisfaction.

**Action**  
1. **Define a conflict‑resolution hierarchy** (Owner: Product & Engineering).  
   * System prompt = highest priority (security & compliance).  
   * User intent = second priority (customer obsession).  
   * Knowledge base = third (data accuracy).  

2. **Build a lightweight “conflict engine”** in AWS Lambda, triggered by the RAG pipeline.  
   * Parse each source into a JSON scorecard (`source:priority`, `confidence`).  
   * Use Amazon Bedrock for semantic similarity to quantify confidence gaps.  
   * If system prompt conflicts with user intent, flag and route to human review (SQS + Step Functions).  

3. **Persist decisions** in DynamoDB for auditability and continuous learning.  
4. **Monitor metrics**: 99.5 % resolution latency, <1 % escalation rate, 98 % NPS on resolved queries.

**Result**  
- Reduced conflicting answer incidents by **73 %**, cutting support tickets from 120/day to 32/day.  
- Maintained policy compliance with zero violations in a year.  
- Customer satisfaction (CSAT) rose from 4.2 to 4.7/5.  

**Bar‑raiser takeaways**  
* Ownership: defined clear priorities and built an end‑to‑end solution.  
* Dive Deep: quantified confidence scores, logged every conflict for analysis.  
* Quantified impact: metrics above.  
* Learning from failure: post‑incident reviews led to automated rule updates that further cut escalation by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
