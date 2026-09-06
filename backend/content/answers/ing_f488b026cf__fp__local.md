---
qid: ing_f488b026cf__fp__local
question: 'Explain: Email Processor — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 417
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:21-05:00'
sources: []
---

### Why a dedicated *Email‑Processor Notification Service* is essential

When an inbox receives millions of messages, the system must decide **which** emails trigger downstream actions (alerts, workflows, analytics). Treating each incoming mail as a raw event and firing every possible handler would explode compute and network traffic. The core problem reduces to *selective filtering under latency constraints*: we need to sift through \(E\) events per second and deliver only the subset \(S \ll E\) that satisfies user‑defined rules.

### Design principle: **Rule‑based stream pruning**

1. **Schema‑agnostic ingestion** – a lightweight broker (Kafka, Pulsar) receives raw MIME streams, preserving headers for later inspection.
2. **Feature extraction microservice** – runs in parallel, parses subject, sender, attachments, and embeds the content into a vector space (e.g., TF‑IDF or BERT). This is the *observable* that rules will query.
3. **Rule engine as a policy graph** – each user rule becomes an edge with a Boolean predicate over extracted features. The graph is evaluated in a single pass per event, yielding a bitmask of actions to invoke.
4. **Notification dispatch queue** – only events flagged for notification are pushed into a dedicated topic; other actions (storage, analytics) consume from the original stream.

### Non‑obvious insight

Most designs treat rules as *static* filters. In practice, the *cost* of evaluating a rule depends on its selectivity and feature extraction overhead. By **learning** the distribution of features per tenant and caching *hot* predicates (e.g., “from *@bank.com*”), we can skip expensive parsing for low‑probability rules, dramatically reducing CPU cycles while preserving accuracy.

This architecture balances **latency**, **throughput**, and **resource isolation**, ensuring that only the truly relevant emails surface as notifications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
