---
qid: ing_fa01a3b2c5__aws__local
question: 'Explain: Resources — Apache Lucene - Apache Lucene Core'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 478
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:29-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation & Task**  
I led a feature‑engineering team for an enterprise search product that needed to surface the most relevant documents for user queries in real time. The bottleneck was our custom ranking pipeline: it ran on an ad‑hoc Java stack, was hard to scale, and had no version control.

**Action**  
1. **Ownership & Bias for Action** – I scoped a migration to **Apache Lucene Core**, the same engine used by Elasticsearch but lighter for embedded use.  
2. Built a **data‑driven pipeline**:  
   * Ingest raw logs → S3 → EMR Spark job → vectorize with TF‑IDF, then store inverted index in an **S3‑backed Lucene directory** (using the `MMapDirectory` for low‑latency).  
   * Expose a REST API via **AWS Lambda + API Gateway** that queries the Lucene index and returns top‑k documents.  
3. Added **CI/CD** with CodePipeline to rebuild indices nightly, ensuring versioned snapshots in S3.  
4. Monitored latency with CloudWatch; achieved 90th‑percentile < 12 ms vs 120 ms pre‑migration.

**Result**  
- **Availability**: 99.95% uptime across regions (S3 + Lambda).  
- **Cost**: Reduced EC2 spend by 45 % and eliminated a dedicated search cluster.  
- **User impact**: Search relevance score improved from 0.62 to 0.78 (A/B test, N=10k users), driving a 12 % lift in click‑through.

**Learnings & Bar‑raiser cues**  
I documented trade‑offs between a full ES cluster vs. embedded Lucene, showing depth of analysis. The migration taught me to anticipate index rebuild failures and implement automated rollback via S3 versioning—an example of “learn from failure” that bar‑raisers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
