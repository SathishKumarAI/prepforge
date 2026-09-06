---
qid: vq_67c0c44372__faang__local
question: What is SQL* Loader and what is it good for?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 407
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:14:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *SQL* Loader—Oracle’s bulk‑load utility. Confirm: you’re speaking of the tool that streams flat files into database tables, not the SQL*Plus command line.

**Approach**  
Explain its purpose (mass data ingestion), how it works (control file + data file), and typical use cases (ETL pipelines, nightly batch loads). Then touch on performance characteristics versus other methods.

**Depth**  
SQL*Loader reads a control file that maps columns to database fields, supports delimited or fixed‑length formats, and can perform field transformations, default values, and error handling. It loads rows directly into the table’s data files using direct path mode (bypassing SQL*Net), achieving >10× throughput compared with INSERT statements. The tool also offers:

- **Batch processing** – load millions of rows in a single run.
- **Error logging** – separate bad records without aborting the whole job.
- **Concurrent loading** – multiple data files into the same table.

Complexity: O(N) I/O for N rows, with minimal CPU overhead. Trade‑off: direct mode bypasses triggers and constraints; if you need those checks, use conventional path.

**Edge Cases**  
* Corrupt or mismatched columns → bad records logged.  
* Large files exceeding memory limits → split into smaller chunks.  
* Loading into partitioned tables requires correct partition key mapping.

**Optimize & Communicate**  
Highlight that tuning involves setting appropriate `INFILE` size, using `PARALLEL=TRUE`, and indexing only after load. Explain that in a production interview you’d ask whether the dataset is append‑only or needs incremental loading, as this influences loader options. Conclude by noting that SQL*Loader is ideal for nightly ETL jobs where speed outweighs per‑row validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
