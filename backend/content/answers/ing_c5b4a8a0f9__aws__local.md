---
qid: ing_c5b4a8a0f9__aws__local
question: 'Q66: When would you use Claude''s extended or adaptive thinking vs. standard
  mode, and how do you control costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 347
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:01-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*  

**Situation / Task**  
While building a recommendation engine for a global e‑commerce platform, we needed to generate highly personalized product suggestions in real time. The standard Claude model produced quick responses but lacked the nuanced reasoning required for high‑value customers.

**Action**  
I introduced **Claude’s Extended (Adaptive) Thinking** only for the top 10 % of “high‑ticket” shoppers—those whose average order value exceeded $300. By routing these requests to the adaptive mode, we achieved a 25 % lift in click‑through rate (CTR) and a 15 % increase in conversion for that segment.  

To keep costs under control, I:  
1. **Implemented a cost‑budget guard** using CloudWatch metrics (`ClaudeCostPerRequest`) and Lambda alarms to throttle adaptive calls when the spend exceeded $2k/day.  
2. Leveraged **AWS Step Functions** to orchestrate fallback logic—if the adaptive mode hit its quota, we automatically fell back to standard Claude with minimal latency impact.  

**Result**  
The targeted use of adaptive thinking increased revenue from high‑ticket shoppers by **$1.8M annually**, while keeping monthly AI spend at **$45k**—a 30 % cost reduction compared to a blanket deployment.  

**Learning**  
I learned that selective, data‑driven feature activation combined with automated guardrails delivers both business value and operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
