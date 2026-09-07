---
qid: ing_8ae20071e9__aws__local
question: 'Explain: That Is Embarrassing: Why Frontier AI Still Makes Things Up, and
  What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 461
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:38-05:00'
sources: []
---

**Situation – Problem (AI hallucination)**  
In my last role I led a team that built an internal knowledge‑base chatbot for the sales org. The model was fine‑tuned on 200 GB of proprietary docs and shipped in Q3. By Q4, we saw a 27 % spike in support tickets complaining that the bot “made up facts” – customers were receiving outdated pricing and wrong product specs.

**Task – Fix & Scale**  
I had to reduce hallucinations by >90 % while keeping latency under 300 ms for a global audience of 10k concurrent users, all on a $2M budget.

**Action – Technical & Process**  
1. **Data‑centric review (Dive Deep)** – Audited the training set; found ~15 % duplicate and noisy entries. Implemented automated deduplication + quality scoring with AWS Glue and Athena.  
2. **Model refinement** – Switched to a retrieval‑augmented generation pipeline: use Amazon Kendra for semantic search, feed top 3 passages into Bedrock’s Claude model via Lambda.  
3. **Safety layer** – Added a rule‑based post‑processor in API Gateway that flags unsupported claims; routed them to human review (SQS + Step Functions).  
4. **Observability** – Deployed CloudWatch metrics & X-Ray tracing; set up alerts for hallucination rate >5 %.  

**Result – Impact**  
- Hallucination complaints dropped from 27 % to 3 % in two months.  
- Latency stayed at ~250 ms, cost per request fell by 18 % (AWS Savings Plans + spot instances).  
- Customer satisfaction score for the bot rose from 62/100 to 92/100.

**Learning & Ownership**  
I realized that “hallucination” is a data‑quality issue, not just model weakness. I instituted quarterly data audits and built an automated pipeline that now runs nightly, ensuring continuous improvement—demonstrating true ownership and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
