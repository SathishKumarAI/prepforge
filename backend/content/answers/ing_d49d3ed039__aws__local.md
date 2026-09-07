---
qid: ing_d49d3ed039__aws__local
question: When would happen if object change value of a class?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 486
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:55-05:00'
sources: []
---

**Situation / Task**  
I was building a real‑time recommendation engine on **Amazon SageMaker** that cached user preferences in a shared `UserProfile` class. A new feature required toggling the `is_active` flag for all users during peak traffic, but the flag lived as a static property on the class rather than an instance field.

**Action**  
I realized that mutating this class‑level attribute would silently change the behavior of every running inference endpoint—an unintended side effect. I refactored the design:  

1. **Encapsulate state** – move `is_active` to a per‑user DynamoDB item and expose it via a lightweight Lambda layer (`aws-lambda-async`).  
2. **Cache with Redis (Amazon ElastiCache)** for 5 min to keep latency <20 ms.  
3. Implement a versioned feature flag in **AWS AppConfig** so that toggling is safe, auditable, and rollback‑friendly.

I ran a chaos test: after the refactor, the inference latency dropped from 120 ms (when the class was mutated) to 18 ms, and the error rate fell from 3.2% to <0.1%.  

**Result**  
The change reduced SLA violations by **87 %**, saved $12k/month in compute costs, and gave us a clear audit trail for future feature flags.  

---

### Leadership Principles Anchored

- **Ownership** – I took responsibility for the hidden coupling and redesigned the system.  
- **Dive Deep** – identified the root cause (static state mutation) and quantified its impact on latency and error rates.  
- **Deliver Results** – achieved measurable performance gains while keeping costs in check.

---

### Bar‑raiser Takeaways

- **Ownership:** proactively refactored shared state before it broke production.  
- **Dive Deep:** linked a code smell to real metrics (latency, errors).  
- **Quantified Impact:** showed exact cost savings and SLA improvement.  
- **Learning from Failure:** turned a silent bug into an opportunity for better feature‑flag management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
