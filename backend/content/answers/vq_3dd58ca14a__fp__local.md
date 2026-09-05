---
qid: vq_3dd58ca14a__fp__local
question: What is a Fact Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 346
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:00-05:00'
sources: []
---

**Fact tables are the engine of analytical models.**  
At their core they answer *“how many”* or *“what value”* questions: sales revenue, units shipped, CPU usage, etc. The design problem is to represent these numeric answers in a way that allows fast aggregation across multiple dimensions (time, product, geography).  

The solution is a **wide, star‑shaped table** whose rows are the smallest meaningful events (a sale transaction, a log line) and whose columns contain:

1. **Measures** – denormalized, pre‑aggregated numeric values that can be summed or averaged without recomputation.
2. **Foreign keys** to dimension tables – low‑cardinality identifiers that enable grouping.

Why must we store measures in the fact table?  
Because aggregation is a *linear* operation over numbers; keeping them together eliminates costly joins during query time, satisfying the principle of **locality of reference** from database theory.  

A non‑obvious insight: **the granularity of a fact table is not arbitrary—it’s dictated by the most detailed level at which you’ll ever need to slice your data.** Choosing too fine a grain inflates size and slows queries; choosing too coarse loses analytical flexibility. Thus, the fact table’s design is an optimization problem balancing storage cost against query expressiveness.

In short, a fact table solves the *aggregation bottleneck* by co‑locating all numeric responses with dimension keys, enabling rapid roll‑ups across any combination of dimensions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
