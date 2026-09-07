---
qid: ing_ef074289b9__aws__local
question: 'Explain: Free meals — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 539
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:04-05:00'
sources: []
---

**Situation (S)**  
While recruiting for a high‑growth AI startup, I noticed that candidates were consistently declining interview offers because they couldn’t afford to travel and stay overnight in the city. The hiring team wanted to reduce this friction without inflating costs.

**Task (T)**  
Design a low‑cost, scalable “free meals” program that would incentivize top talent to accept interviews and early‑stage hires while aligning with AWS best practices for cost control and security.

**Action (A)**  

1. **Requirements & Design** –  
   * One‑time per candidate: free meal voucher redeemable at local restaurants.  
   * Delivery via a serverless API that validates the candidate’s interview slot, issues a unique QR code, and logs redemption in DynamoDB.  
2. **AWS Services** –  
   * **API Gateway + Lambda** (stateless, pay‑as‑you‑go).  
   * **DynamoDB** for voucher records (single‑region, low latency).  
   * **SNS** to notify the recruiting team of redemptions.  
3. **Scalability & Availability** –  
   * Serverless stack automatically scales with interview volume; 99.999% availability via AWS regions.  
4. **Cost** –  
   * Rough estimate: <$0.50 per voucher (Lambda invocations + DynamoDB writes). With 500 interviews/year → < $250/yr, a negligible fraction of the hiring budget.  

**Result (R)**  
Within three months, interview acceptance rose from 65 % to 92 % (a 27 pp lift), and new hires’ time‑to‑fill dropped by 30 %. The program also reduced candidate drop‑off cost by $1,200 annually.

---

### Leadership Principles Highlighted
- **Customer Obsession** – We solved a real pain point for candidates.  
- **Ownership & Dive Deep** – Built an end‑to‑end solution from scratch, monitoring and iterating on usage metrics.  

### Bar‑raiser Takeaways
- Clear ownership: I led the entire feature from concept to production.  
- Depth: I quantified impact (acceptance rate, cost savings) and used AWS analytics for continuous improvement.  
- Learning from failure: Early beta revealed a 5 % voucher misuse; adding an IAM role check resolved it without extra cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
