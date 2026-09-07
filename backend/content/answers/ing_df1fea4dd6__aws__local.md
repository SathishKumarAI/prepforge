---
qid: ing_df1fea4dd6__aws__local
question: 'Q: How do you prevent "State Bloat" in long-running agent sessions?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 444
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:00-05:00'
sources: []
---

**Situation & Task**  
While designing a conversational agent for a financial‑services chatbot that ran 18‑hour “sessions” (state persisted per user), my team hit *State Bloat*: session objects grew to >200 MB in S3, costing $0.25/hr and slowing retrieval.

**Action**  
1. **Ownership & Bias for Action** – I scoped a refactor with a one‑week sprint.  
2. **Dive Deep on Requirements** – Only the last 12 hours of intent/context are needed for inference; older data can be archived.  
3. **Design** –  
   * Store state in **Amazon DynamoDB** (partition key: `UserId`, sort key: `Timestamp`).  
   * Use a TTL attribute to auto‑expire records after 48 hrs.  
   * Periodically run an **AWS Glue job** that streams expired items into an **S3 Glacier Deep Archive** bucket for compliance.  
4. **Cost & Scalability Trade‑offs** – DynamoDB on-demand gives <1 ms latency, scales to millions of users; Glue jobs cost <$0.01 per 100 MB processed, far cheaper than S3 storage.  
5. **Monitoring** – Implemented CloudWatch metrics (`StateSizeBytes`, `ReadLatency`) and set alarms when size >50 % of baseline.

**Result**  
- State size dropped from ~200 MB to <15 MB per user (≈92 % reduction).  
- S3 storage cost fell from $120/month to $12/month.  
- Read latency improved from 350 ms to 45 ms, enabling real‑time inference for 10× more concurrent sessions.

**Learnings & Bar‑Raiser Check**  
I took full ownership, dove into data (size logs), quantified impact, and iterated on failure (initial TTL mis‑config). This aligns with *Customer Obsession* (better user experience) and *Ownership* (owning the entire lifecycle of session state).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
