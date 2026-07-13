---
qid: q091
question: "What is database normalization and what problem does it solve?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm they want the concept plus the problem it solves (and ideally when to *denormalize*). State the assumption: OLTP context where write integrity matters.
2. **Mental model.** Normalization is organizing tables so each fact lives in exactly one place. The enemy is redundancy, which breeds update, insert, and delete anomalies.
3. **Reason step by step.** Define the anomalies with an example: if a customer's address is copied into every order row, updating it means touching many rows (update anomaly), you can't add a customer without an order (insert anomaly), and deleting their last order loses their address (delete anomaly). Normalization splits data into related tables linked by keys. Sketch the progression: 1NF (atomic values, no repeating groups), 2NF (no partial dependency on part of a composite key), 3NF (no transitive dependencies on non-key columns).
4. **Traps to avoid.** Reciting normal-form definitions without the *why*; over-normalizing so every query needs many joins; forgetting that analytics/warehouses deliberately denormalize for read speed.
5. **Sanity-check and deliver.** Test: "if this fact changed, how many rows must I touch?" More than one signals a normalization gap. Communicate by leading with the redundancy/anomaly problem, then the forms as the remedy, and note the deliberate denormalization trade-off in analytics.
