---
qid: q001
question: "What is the difference between Artificial Intelligence, Machine Learning, and Deep Learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll frame these as nested fields, not competing ones. Assumption to confirm: the interviewer wants conceptual boundaries plus a concrete example of each, not a history lecture.

**Approach** — Define the broadest term first (AI), then narrow to ML, then to Deep Learning, showing containment and what each adds.

**Depth** — Artificial Intelligence is the umbrella goal: systems that perform tasks requiring human-like intelligence (reasoning, planning, perception), including rule-based expert systems with no learning. Machine Learning is a subset where models learn patterns from data instead of being explicitly programmed—e.g., a spam classifier trained on labeled email. Deep Learning is a subset of ML using multi-layer neural networks that learn hierarchical feature representations automatically, excelling at unstructured data like images, audio, and text (CNNs, transformers). Relationship: DL ⊂ ML ⊂ AI.

**Edge cases** — Not all AI learns (symbolic/GOFAI). Not all ML is deep (linear regression, decision trees). DL needs large data and compute; on small tabular datasets, gradient-boosted trees often beat it.

**Optimize & communicate** — I'd draw three concentric circles on the whiteboard and anchor each ring with one example. Signaling clear mental models plus knowing when classical ML outperforms DL shows judgment, not just terminology recall.
