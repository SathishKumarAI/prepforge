---
qid: q087
question: "What is the difference between a star schema and a snowflake schema?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm context is dimensional modeling in a warehouse. State the assumption: both organize a central fact table surrounded by dimensions; the difference is how normalized those dimensions are.
2. **Mental model.** Picture the shape literally. A **star** = one fact table with denormalized dimensions radiating out (points of a star). A **snowflake** = the same, but dimensions are normalized into sub-dimensions, creating branching chains that look like a snowflake.
3. **Reason step by step.** Star: fewer joins, faster queries, simpler for analysts, but redundant data in dimensions. Snowflake: normalized dimensions save storage and reduce update anomalies, but require more joins and are harder to query. Walk a concrete dimension — e.g., a `product` dimension in a star holds category and brand inline; in a snowflake, `product` links to a separate `category` table linking to `department`.
4. **Traps to avoid.** Saying snowflake is "better because normalized" — in analytics, query simplicity and speed usually favor star. Conflating either with OLTP normalization goals. Forgetting the fact table is central to both.
5. **Sanity-check and deliver.** Test by counting joins for "sales by department": star needs one, snowflake needs several. Lead with the visual/normalization contrast, then state the trade-off: star for query performance and simplicity, snowflake for storage and integrity.
