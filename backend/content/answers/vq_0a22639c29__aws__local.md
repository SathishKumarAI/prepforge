---
qid: vq_0a22639c29__aws__local
question: WHAT HAPPENS WHEN THERE IS NO MATCH IN A RIGHT JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 564
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:02-05:00'
sources: []
---

**Scenario (S):**  
I was tasked to generate a quarterly sales report for the **“New Product Launch”** program in Amazon’s internal analytics pipeline built on **Amazon Redshift**. The business wanted every customer who had *not* purchased any product in that quarter, so we used a `RIGHT JOIN` between the `customers` table and the `orders` table.

**Task (T):**  
Ensure the query returned all customers, including those with zero orders, and validate performance on a 10‑TB dataset.

**Action (A):**  

| Step | Why it matters | AWS service / design |
|------|----------------|---------------------|
| 1. Use `RIGHT JOIN` (or `LEFT JOIN` on the smaller table) | Guarantees all rows from the right side (`customers`) are kept; unmatched rows get NULL in order columns. | Redshift, SQL optimizer |
| 2. Add a filter on `orders.order_id IS NULL` to isolate “no match” customers | Prevents accidental exclusion of matched records when adding additional predicates. | Redshift |
| 3. Partition `customers` by `customer_region` and distribute `orders` by `order_customer_id` | Improves join scalability; reduces data movement. | Redshift distribution styles |
| 4. Materialize the filtered result into an **analytic view** and schedule nightly refresh via **AWS Glue** to keep it up‑to‑date. | Keeps downstream dashboards fast. | AWS Glue, Athena |

**Result (R):**  
The optimized query reduced runtime from **12 min → 1.8 min** on the same dataset (~10 TB). The “no match” customer count was **2,345,678**, a 15% increase over the previous ad‑hoc script that missed ~300K customers due to incorrect join logic.

---

### What the bar‑raiser hears

- **Ownership:** I proactively redesigned the pipeline and automated its refresh.  
- **Dive Deep:** I examined Redshift’s query plan, identified skew, and chose distribution styles accordingly.  
- **Quantified Impact:** 10× faster runtime and 15% more accurate customer coverage directly improved targeting ROI by ~$3M annually.  
- **Learning from Failure:** Initial attempts omitted the `IS NULL` filter, leading to data loss; I documented this in a post‑mortem and added unit tests for join logic.

**Leadership Principles invoked:** *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
