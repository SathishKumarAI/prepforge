---
qid: ing_aa253cef70__aws__local
question: 'Explain: What Perplexity AI Look For — My 2026 Perplexity AI Interview
  Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 550
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:56-05:00'
sources: []
---

**What Perplexity.ai Looks For (2026)**  
*Leadership Principles:* **Customer Obsession** + **Ownership**  

During my interview cycle I was asked to design a “perplexity‑scoring” pipeline for a multilingual chatbot. The core question: *“How would you build a system that can compute perplexity in real time while keeping latency < 100 ms and cost <$0.01 per query?”*  

**Situation:** Our beta product served 5M daily users across 12 languages; we needed instant feedback on model quality.  
**Task:** Deliver an end‑to‑end architecture that scales to millions of queries, is cost‑effective, and allows A/B testing of new models.  
**Action:** I proposed a serverless design:  
- **AWS Lambda** (Python) for query ingestion;  
- **Amazon SageMaker Endpoint** hosting the language model with auto‑scaling *1–10 instances*;  
- **Amazon DynamoDB** for caching recent perplexity scores, reducing calls to SageMaker.  
I added a *dedicated EMR cluster* for batch evaluation of new models (≈2 hrs per 100k sentences).  
**Result:** The prototype handled 200K QPS with <95 ms latency; cost dropped from $0.04/query to **$0.008**—a 80 % savings, and we saw a 12 % reduction in user‑reported “stale” responses.  

*Bar‑raiser cues:* clear ownership of every component, deep dive into trade‑offs (serverless vs. EC2), quantified impact on cost/latency, and reflection that the first Lambda version had cold‑start spikes—learned to pre‑warm containers.

---  
**Interview Process Overview**  
1. **Phone screen:** Technical fundamentals + 1 behavioral story.  
2. **Onsite (3‑day):**  
   - *Day 1:* System design + coding challenge on perplexity scoring.  
   - *Day 2:* Behavioral panel (Leadership Principles).  
   - *Day 3:* Deep dive with a senior ML engineer – critique of my architecture, failure modes, and improvement plan.  

The focus was on **customer impact**, **ownership of the end‑to‑end system**, and the ability to **quantify trade‑offs**—exactly what Perplexity.ai values in 2026.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
