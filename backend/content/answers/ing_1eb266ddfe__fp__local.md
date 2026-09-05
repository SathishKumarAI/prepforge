---
qid: ing_1eb266ddfe__fp__local
question: 'Explain: in you know plain English before that — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 444
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:27-05:00'
sources: []
---

**Operational Transformation (OT) vs. Differential Synchronization (Diff‑Sync)**  
Imagine several people editing the same Google Doc at once. The *problem* is that each edit must appear in everyone’s view without “losing” or duplicating changes, even if two edits happen concurrently on different devices.

### Why OT works  
OT treats every user action as an **operation** (insert, delete). When a client sends its operation to the server, the server already knows about all *other* operations that arrived earlier. It **transforms** the new operation against those older ones so that applying it later will still produce the same final document.  
Formally, if `O1` precedes `O2`, OT defines a transformation function `T(O2, O1)` that adjusts `O2`’s coordinates to respect the changes made by `O1`. The key insight is that *transformations are associative*; thus any order of applying transformed operations leads to a consistent state. This guarantees convergence (everyone ends up with identical text) and preserves intent (the user’s original edit still applies where they expected).

### Why Diff‑Sync works  
Diff‑Sync takes a different route: it periodically **diffs** the local document against a canonical version stored on the server, computes the minimal set of changes, sends those patches, and merges incoming patches locally. It relies on *idempotent* patch application—applying the same change twice has no effect—and resolves conflicts by favoring newer timestamps or a deterministic merge rule.  
The non‑obvious advantage: Diff‑Sync is simpler to implement for structured data (e.g., JSON) because it can treat changes as **sets of key/value updates** rather than character offsets, making it robust against complex formatting operations that OT struggles with.

### Bottom line  
OT guarantees convergence by *transforming* concurrent operations; Diff‑Sync guarantees convergence by *merging* patches. The choice hinges on the data model and required consistency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
