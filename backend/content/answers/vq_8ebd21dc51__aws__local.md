---
qid: vq_8ebd21dc51__aws__local
question: How to join two tables using dataframes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 408
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:18-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was asked by the analytics team to combine two large Spark DataFrames—`transactions` (12 TB) and `customers` (0.5 TB)—to generate a monthly revenue report for our flagship product line. The deadline was 48 hours because the finance board needed the numbers before Q4 budgeting.

**Action (Dive Deep, Bias for Action)**  
1. **Data profiling**: I ran `describe()` on both DataFrames to spot nulls and schema mismatches.  
2. **Partitioning strategy**: Repartitioned `transactions` by `customer_id` (`repartition(200)`) to co‑locate join keys, reducing shuffle.  
3. **Broadcast join**: Since `customers` is small, I broadcast it (`broadcast(customers)`). This turns the heavy shuffle into a map‑side join, cutting runtime from ~9 h to <2 h.  
4. **Delta Lake**: Saved the joined result as a Delta table on S3 (using Glue catalog), enabling ACID guarantees and versioning for auditability.

**Result (Deliver Results)**  
- The job completed in 1 hour 45 minutes, a 80% speed‑up versus the legacy Hive script.  
- Generated a 200 GB Delta table that served downstream BI tools without lag.  
- Cost dropped from ~$120/day to <$25/day on EMR.

**Learning & Bar‑raiser cues**  
I documented the partitioning logic and broadcast decision in the PR, enabling future teams to replicate the pattern. I also ran a post‑mortem: we missed an early null check that caused a downstream failure; now our CI pipeline validates schemas before runs. This showcases true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
