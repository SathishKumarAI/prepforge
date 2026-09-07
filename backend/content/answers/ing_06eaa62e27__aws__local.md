---
qid: ing_06eaa62e27__aws__local
question: Design a Text2SQL agent for business users querying a warehouse with 5,000
  tables. What's hard, and how do you evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 419
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:30-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a Text‑to‑SQL agent for a data lake that hosts ~5,000 tables (≈10 TB). Business analysts needed instant, natural‑language access without writing code.

**Action**  
1. **Discovery & Ownership** – Interviewed 12 users; mapped the most common intent patterns and identified a 30% drop in query turnaround time as the KPI.  
2. **Design** – Adopted an NLP pipeline on Amazon SageMaker (BERT‑based intent model) + AWS Lambda for orchestration.  
   * Schema‑aware prompt generation uses DynamoDB to cache table metadata; this reduces cold start latency by 70%.  
   * Generated SQL is validated against Redshift Spectrum via a sandbox role, preventing accidental data exfiltration.  
3. **Scalability & Availability** – Serverless architecture (Lambda + Step Functions) scales to >1k concurrent users with 99.9% uptime. Costs stay <$5 k/month vs $15 k for manual support.  
4. **Evaluation** – A/B test: baseline (manual SQL) vs agent; achieved 4× faster query creation, 92% accuracy on first attempt, and a 40% reduction in help‑desk tickets.

**Result**  
Within three months the tool was adopted by 85 % of analysts, cutting their average query time from 12 min to 2.5 min (Δ‑$30k/yr). The project exemplified **Customer Obsession** and **Ownership**, while my deep dive into NLP accuracy and cost trade‑offs reflected **Dive Deep** and **Deliver Results**.

*Bar‑raiser cues*: clear ownership, quantified impact, technical depth, and lessons learned from initial false positives (improved intent model by 15 % after user feedback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
