---
qid: ing_78feb793ae__faang__local
question: How would you detect that a parser silently corrupted documents, at scale,
  without reading every page?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 425
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:21-05:00'
sources: []
---

**Clarify**  
You want to know if a parsing pipeline is silently corrupting data (e.g., changing tags, dropping content) across millions of documents, but you cannot afford to scan every page. Assume the parser runs batch‑jobs on cloud storage, outputs are stored back in S3/Blob, and logs are available.

**Approach**  
1. **Metadata fingerprinting** – compute a quick hash (e.g., SHA‑256) of each source file before parsing.  
2. **Sampling** – randomly pick 0.5–1 % of parsed outputs for full comparison.  
3. **Delta detection** – compare pre‑ and post‑hashes; any mismatch flags corruption.  
4. **Anomaly metrics** – track hash‑discrepancy rates per job, worker, or region.  
5. **Alerting** – if rate > threshold (e.g., 0.1 %) trigger automated rollback or manual review.

**Depth**  
- Use `md5` for speed on large blobs; store pre‑hashes in a key‑value DB (DynamoDB/Redis).  
- Sampling probability can be tuned via reservoir sampling to keep memory low.  
- Complexity: O(N) to generate hashes, but only O(S) full comparisons where S = sample size.  
- Trade‑off: you might miss rare corruptions; increase sample or use multi‑pass strategy.

**Edge Cases**  
- Files that legitimately change (e.g., timestamped metadata). Exclude such fields before hashing.  
- Binary vs text: ensure consistent encoding.  
- Network failures causing duplicate jobs—dedupe by job ID.

**Optimize & Communicate**  
Explain the sampling rationale, how thresholds are set based on SLA, and show a simple dashboard of corruption rates. Highlight that this approach scales linearly with data volume while keeping compute overhead minimal, satisfying both cost and accuracy constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
