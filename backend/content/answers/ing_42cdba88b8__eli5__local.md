---
qid: ing_42cdba88b8__eli5__local
question: 'Explain: CAP Theorem Considerations — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 247
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:16-05:00'
sources: []
---

**CAP Theorem in a kitchen**

Imagine you’re running a busy restaurant that must serve three things at once: *Consistent* (every guest gets the same dish), *Available* (the kitchen is always open for orders), and *Partition‑tolerant* (it keeps working even if a power line goes down). The CAP theorem says you can only keep two of these forever.  

In system design interviews, think of a database as that restaurant.  
- **Consistency** means every user sees the same data at the same time.  
- **Availability** means the service is always reachable.  
- **Partition tolerance** means it survives network splits or server failures.

When you’re asked to design, first decide which two you’ll prioritize (often CP for banking, AP for social media). Then explain how you’ll handle a network partition: either keep the system available but let some reads be stale (AP) or refuse new writes until all parts sync (CP). This clear “restaurant” picture shows you understand the trade‑offs and can justify your design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
