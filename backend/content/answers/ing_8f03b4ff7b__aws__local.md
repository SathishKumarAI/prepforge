---
qid: ing_8f03b4ff7b__aws__local
question: Why should you assume the system prompt will leak, and what follows from
  that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:39-05:00'
sources: []
---

**Situation & Task**  
I was leading a Lambda‑based chatbot for an e‑commerce site that used GPT‑4 for dynamic product recommendations. The team assumed the *system prompt* (the instruction set guiding the model) never leaked outside the function. My task: evaluate this assumption and redesign the architecture to mitigate risk.

**Action**  
1. **Dive Deep into Security** – I mapped every code path that could surface the system prompt, from CloudWatch logs to S3 backups.  
2. **AWS Services & Design** – Replaced raw text storage with *Secrets Manager* for the prompt, added a *Lambda@Edge* layer to encrypt responses in transit, and enabled *VPC endpoints* so the function never touched public IPs.  
3. **Bias for Action** – I introduced an automated scan using *Amazon GuardDuty* that flags any log entries containing the prompt string, triggering an SNS alert.

**Result**  
- Reduced accidental exposure incidents from 5/month to 0 in 6 months.  
- Cut average response latency by 12 % (from 350 ms to 308 ms) because Secrets Manager’s TTL caching eliminated cold‑starts.  
- Lowered cost by $1,200/yr by avoiding unnecessary CloudWatch log retention.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Protecting user data ensures trust and brand safety.  
- **Ownership** – I owned the entire threat model, from design to monitoring, and iterated until zero leakage risk was verified.  

Bar‑raisers listen for depth of analysis (the threat mapping), quantified impact (incident reduction & cost savings), and a clear learning loop (continuous monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
