---
qid: q078
question: "What is ETL and how does it differ from ELT?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note the question has two parts: define ETL, then contrast with ELT. Assume the destination is a data warehouse and the reader wants to know *when* to choose each, not just the acronym expansion.
2. **Mental model.** Both move source data to an analytics store; the only structural difference is *where the Transform step happens* relative to Load. Reordering two letters reflects reordering two stages.
3. **Reason step by step.** ETL: Extract → Transform (clean, join, aggregate) → Load; transformation happens before the warehouse. ELT: Extract → Load raw → Transform inside a powerful cloud warehouse (Snowflake, BigQuery), often via dbt. Then reason about fit: ETL when the target has limited compute or must receive conformed/cleansed data; ELT when scalable warehouse compute is cheap and keeping raw data adds flexibility.
4. **Traps to dodge.** Do not mangle the acronym (it is Extract-Transform-Load, not Encrypt/Transfer/Log). Do not say ELT transforms before extracting. Do not present them as identical.
5. **Sanity-check and communicate.** Re-check the letter order maps to the stage order. Frame the takeaway around *where transformation compute is cheapest and most flexible* — that is the real decision driver, tied to data volume and tooling.
