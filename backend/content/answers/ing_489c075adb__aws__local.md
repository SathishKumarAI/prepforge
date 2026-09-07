---
qid: ing_489c075adb__aws__local
question: 'Explain: Multi-turn handling — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 446
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:35-05:00'
sources: []
---

**Situation / Task**  
At my last firm we built an enterprise Retrieval‑Augmented Generation (RAG) assistant that answered legal queries across 12 TB of internal documents. The challenge was to keep context over long conversations without hitting rate limits or bloating memory.

**Action**  
I owned the solution architecture and drove a **stateful multi‑turn design**:

1. **Context Store** – a DynamoDB table (partition key = `session_id`, sort key = `turn`) stores the last 10 turns, capped at 5 KB each. TTL of 30 days keeps storage lean.
2. **Prompt Engineering** – on every turn we pull the context, prepend it to the user prompt, and send it to Bedrock (Claude‑3) via a Lambda that streams responses back to the front‑end in real time.
3. **Cost/Scale Controls** – we use **SageMaker endpoint** for heavy preprocessing (embedding extraction) and **Step Functions** to orchestrate parallel retrieval from S3 and DynamoDB, ensuring sub‑200 ms latency at 10k concurrent users.
4. **Monitoring** – CloudWatch metrics (`turn_latency`, `context_size`) feed into an automated alert that triggers a Lambda to trim the oldest turns if latency > 250 ms.

**Result**  
We cut average turn latency from **1.2 s to 0.18 s**, increased user satisfaction scores by **27 % (NPS +12)**, and reduced monthly compute spend by **35 %** through dynamic scaling and context pruning.

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivering instant, accurate answers for legal staff.
- **Ownership & Dive Deep** – iterating on data model, latency metrics, and cost trade‑offs until the system met SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
