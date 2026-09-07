---
qid: ing_ef9106d7f2__faang__local
question: How does an answer engine handle breaking news - a query about something
  that happened 20 minutes ago?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 513
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:56:28-05:00'
sources: []
---

**Clarify**  
The interviewer is asking how a search‑oriented “answer engine” (e.g., a knowledge‑base or LLM‑powered assistant) can surface information about an event that just occurred, say 20 minutes ago.  
Assumptions to confirm:  
- The system has access to real‑time data feeds (news APIs, social media streams).  
- It can index and query those feeds with minimal latency.  
- “Answer” means a concise factual snippet, not an exhaustive report.

**Approach**  
1. **Real‑time ingestion layer** – subscribe to trusted news/APIs (e.g., GDELT, Twitter firehose).  
2. **Stream processing & indexing** – use a distributed stream processor (Kafka Streams/Apache Flink) to parse, dedupe, and forward to an inverted index (Elasticsearch or OpenSearch).  
3. **Query‑time filtering** – when a user asks about the event, the engine queries the index for documents with timestamps within the last 15–30 min and high relevance scores.  
4. **Answer generation** – feed the top snippet(s) into an LLM prompt that formats them as a short answer, optionally adding a confidence flag.

**Depth**  
- Ingestion latency < 5 s; indexing throughput > 10k docs/s.  
- Use time‑to‑live (TTL) indexes to purge stale data automatically.  
- Confidence scores derived from source reputation and recency weight.  
- Complexity: O(log N) search in inverted index, linear pass over candidate snippets for LLM prompt.

**Edge Cases**  
- *Data sparsity*: if no recent docs exist, fall back to the most recent available or indicate “no up‑to‑date info.”  
- *Misinformation*: flag low‑trust sources; optionally cross‑check with multiple feeds.  
- *Query ambiguity*: disambiguate entities via context (e.g., “Paris” vs. “Paris Hilton”).

**Optimize & Communicate**  
Improvements: cache popular recent queries; use a dedicated “breaking news” shard for faster retrieval. I’d explain the pipeline step‑by‑step, highlighting latency budgets and how each component guarantees freshness while maintaining accuracy. This showcases structured reasoning, technical depth, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
