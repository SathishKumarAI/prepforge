---
qid: ing_aac7efa676__aws__local
question: Not Sure If Context Pollution Is Hurting Your Agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 554
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:41-05:00'
sources: []
---

**Situation** – At a previous role I led the rollout of an AI‑driven customer support bot that processed ~200 k tickets/day. After a spike in support volume we noticed latency doubled and resolution rates dropped from **92 % to 78 %** within two weeks.

**Task** – Determine whether “context pollution” (passing stale or irrelevant conversation history into the LLM) was the culprit, quantify its impact, and design a scalable mitigation strategy.

**Action**  
1. **Dive Deep** – Instrumented every request with context‑length metrics and built a 30‑day audit trail in Amazon DynamoDB.  
2. Identified that >40 % of prompts contained history older than 72 h; these cases had a 35 % higher error rate (AWS CloudWatch & Athena).  
3. Designed a *context pruning service* using **Amazon Lambda** + **Step Functions** to trim history to the last 5 turns, store it in **S3 Glacier Deep Archive** for audit, and inject only relevant chunks into the LLM via **Amazon Bedrock** (or OpenAI API).  
4. Deployed a *canary* on 10 % of traffic; latency dropped from 1.8 s to 0.9 s and resolution rose to 90 %.  

**Result** – After full rollout, we achieved **+12 % improvement in first‑contact resolution** (from 78 % to 90 %) and cut API calls by ~25 %, saving ~$1.5k/month on Bedrock usage.

---

### AWS Services & Trade‑offs  
- **Lambda + Step Functions**: serverless, auto‑scales; trade‑off is cold start latency mitigated with provisioned concurrency.  
- **DynamoDB**: low‑latency context lookup; cost controlled by TTL and efficient key design.  
- **S3 Glacier**: archival of raw history for compliance at minimal cost.  

### Bar‑raiser Signals  
- **Ownership** – Took full responsibility from diagnosis to production fix.  
- **Dive Deep** – Used analytics to quantify the root cause instead of guesswork.  
- **Quantified Impact** – Delivered measurable lift in resolution rate and cost savings.  
- **Learning from Failure** – Documented that context pollution can silently erode model quality; now we enforce a 72‑h cutoff policy across all bots.

*Leadership Principles: Customer Obsession, Ownership.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
