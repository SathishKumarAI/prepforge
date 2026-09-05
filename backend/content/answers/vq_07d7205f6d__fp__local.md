---
qid: vq_07d7205f6d__fp__local
question: What are the types of dimension tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 453
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:35-05:00'
sources: []
---

**Dimension tables – why they exist**

In a star schema we separate *facts* (numerical measures) from the context that explains them.  
A dimension table supplies the “what” and the “who” behind each fact row, turning raw numbers into
human‑readable attributes.  The way a dimension is organized must match how its values evolve over time,
so that we can answer questions like *“What was the revenue for product X in Q1 2024?”* or *“Which region had the highest churn last year?”*

**Three canonical shapes**

| Shape | Core idea | Typical use |
|-------|-----------|-------------|
| **Conformed (shared)** | One table is referenced by many fact tables. The keys are stable, and business rules keep the schema consistent. | Customer, product, date – shared across sales, inventory, finance. |
| **Slowly Changing Dimension (SCD)** | Handles attributes that change over time while preserving history.  Types 1–3/4/5 differ in how many versions of a record are kept. | Address changes for customers (Type 2) or price updates for items (Type 1). |
| **Hierarchical (or “tree”)** | Stores parent‑child relationships inside the same table, often with surrogate keys and recursive joins.  Allows drill‑down/up without extra tables. | Geography (city → state → country), organizational chart. |

**Non‑obvious insight**

Most designers treat SCDs as a *data‑quality* problem—“keep old values.”  
But from an **information‑theoretic** point of view, every new version is a *contextual feature* that reduces uncertainty about the fact.  By preserving history we are actually increasing the expressive power of the model: the same fact row can be interpreted under multiple contexts (e.g., “sales in Q1 2024” vs. “sales at last‑known price”), which is essential for accurate trend analysis and forecasting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
