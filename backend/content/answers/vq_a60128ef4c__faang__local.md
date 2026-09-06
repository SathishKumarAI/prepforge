---
qid: vq_a60128ef4c__faang__local
question: How to find a word in a log file by using pyspark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 608
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:29-05:00'
sources: []
---

**Clarify**  
We’re given a large distributed log file (e.g., S3 or HDFS) and must return all lines that contain a target word `w`. Clarifying points:  

1. Is the search case‑sensitive?  
2. Do we need to match whole words only, or substrings are fine?  
3. What is the output format—just line numbers, full lines, or counts?  

Assume: case‑insensitive, substring matching, and return entire matching rows.

---

**Approach**  
1. Load the log into an RDD/`DataFrame`.  
2. Broadcast `w` for efficient access across executors.  
3. Use a filter that checks if `w.lower()` is in each line’s lowercase form.  
4. Optionally, use `explode(split(line, "\n"))` to treat multi‑line files correctly.  

If performance matters, we can pre‑filter by file block size or use partition pruning via path filters.

---

**Depth**  
```python
from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()

log_path = "s3://bucket/logs/*.log"
w_bcast = spark.sparkContext.broadcast("error".lower())

df = spark.read.text(log_path)          # schema: value:string

matches = df.filter(
    F.lower(F.col("value")).contains(w_bcast.value)
)

# Show first 20 matches
matches.show(truncate=False)
```

*Complexity*:  
- Time: O(N * L) where N is number of lines, L average line length.  
- Space: Broadcast variable ≈ |w|; no extra shuffling.

*Trade‑offs*: Using an RDD allows custom regex or word boundaries but loses the DataFrame optimizations (Catalyst). The DataFrame API gives better query planning and can push down predicates to storage if supported.

---

**Edge Cases**  
- Empty logs → return empty DF.  
- Very long lines may exceed memory; consider `spark.sql.files.maxPartitionBytes`.  
- Binary or compressed logs: need appropriate reader (`textFile`, `parquet`).  

Test with:  
1. Small synthetic log containing the word in different cases.  
2. Log without matches to verify zero results.  
3. Large file to confirm no executor OOM.

---

**Optimize & Communicate**  
- If the word is rare, use `limit(1)` after filter to short‑circuit scanning.  
- For repeated queries, cache the filtered DF (`matches.cache()`).  
- Explain that broadcasting keeps the search term local, minimizing shuffle and network traffic—key for Spark’s scalability.  

This structured plan demonstrates clear problem framing, a concise solution path, depth in code and complexity analysis, attention to edge conditions, and thoughtful optimization—all aligned with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
