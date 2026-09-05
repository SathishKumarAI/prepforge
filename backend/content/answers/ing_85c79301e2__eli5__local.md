---
qid: ing_85c79301e2__eli5__local
question: 'Explain: Merge replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 250
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:41-05:00'
sources: []
---

Think of a library that wants every branch to have the same books so readers can find what they need anywhere. **Merge replication** is like giving each branch its own copy of the library’s catalog and letting them add or edit books on their shelves independently. After a while, all branches send their changes back to the main catalog; the system merges (combines) those edits so every branch ends up with a consistent set of titles.

- **Types**:  
  *Full merge* – every change from any branch is collected and merged.  
  *Selective merge* – only chosen sections (e.g., science books) are replicated.

- **Examples & Use Cases**:  
  • A retail chain lets each store update its inventory locally, then syncs nightly to the central database—no single point of failure.  
  • A mobile app that works offline lets users add notes; when they reconnect, all notes merge into the shared account.

So, merge replication is simply “copy‑and‑merge” data across many places, keeping everyone up to date while allowing local edits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
