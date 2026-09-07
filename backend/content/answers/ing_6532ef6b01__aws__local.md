---
qid: ing_6532ef6b01__aws__local
question: 'Q: How do you choose between Claude Code, Cursor, and OpenHands?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 631
total_tokens: 866
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:40-05:00'
sources: []
---

**Situation – Task**  
I was leading the migration of our internal dev‑ops tooling to a cloud‑native AI assistant that could auto‑generate code snippets, review pull requests, and surface best practices for 1 200 engineers across three regions.

**Action – Design & Decision Process**  
1. **Requirements mapping** – We needed *real‑time* code completion (≤100 ms latency), *contextual accuracy* (>90 % correct suggestions), and *multi‑language* support (Python, Go, Java).  
2. **Evaluation framework** – Built a micro‑benchmark using the same 3 k open‑source PRs from GitHub. Ran each model (Claude Code, Cursor, OpenHands) on an EC2 g4dn.xlarge and measured:
   * Latency (ms)
   * Accuracy (% correct suggestions)
   * Token usage (cost proxy)

| Model | Avg Latency | Accuracy | Tokens/PR |
|-------|-------------|----------|-----------|
| Claude Code | 78 | **92** | 1.2 k |
| Cursor | 115 | 88 | 1.6 k |
| OpenHands | 90 | 90 | 1.4 k |

3. **AWS services stack** –  
   * **Amazon SageMaker Edge Manager** for on‑prem inference (low latency).  
   * **Amazon API Gateway + Lambda** to expose a REST endpoint, auto‑scaling via DynamoDB read/write capacity.  
   * **S3 + CloudFront** to cache common code snippets.  

4. **Cost & scalability trade‑offs** – Claude Code’s higher accuracy offset its slightly lower latency; with SageMaker managed spot instances the cost per inference dropped 30 %. Cursor’s larger token footprint would have increased storage and compute costs by ~25 % over a year.

5. **Risk mitigation** – Implemented an A/B test roll‑out: 10 % of engineers used Claude Code, 20 % Cursor, 70 % OpenHands. Monitored adoption metrics (click‑through rate, PR merge speed) and performed a post‑deployment review after 30 days.

**Result – Impact**  
*Adoption*: 88 % of the team switched to Claude Code within two weeks.  
*Productivity*: Average PR review time decreased from 12 min to **4.8 min** (60 % reduction).  
*Cost*: Year‑over‑year inference cost fell by 18 %.  

**Reflection – Learning & Ownership**  
I owned the entire evaluation loop, diving deep into latency and accuracy data rather than trusting vendor hype. The A/B test revealed that even a slightly better model can justify higher upfront costs if it delivers measurable productivity gains. This experience reinforced my belief in *Customer Obsession* (delivering real value to developers) and *Dive Deep* (quantitative rigor).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
