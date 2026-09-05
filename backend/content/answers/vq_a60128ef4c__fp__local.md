---
qid: vq_a60128ef4c__fp__local
question: How to find a word in a log file by using pyspark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 421
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:42-05:00'
sources: []
---

**Why we need a Spark‑based search**

A log file is essentially a massive stream of text lines that must be processed in parallel to stay within time limits.  
The core problem is *find all lines containing a given keyword* while keeping the operation distributed, fault‑tolerant and memory‑efficient.

---

### 1. Treat the file as an RDD / DataFrame

```python
df = spark.read.text("/path/to/logs/*")   # each row → column “value”
```

`text()` returns a **DataFrame** with one string column; it preserves the original line breaks and distributes the data across executors.

### 2. Apply an efficient filter

```python
keyword = "ERROR"
result = df.filter(df.value.contains(keyword))
```

`contains` is translated to a native UDF that runs in C++, so the filtering happens during shuffle without pulling all rows into the driver.  
If the keyword appears infrequently, `filter()` will read only the relevant partitions.

### 3. Persist or collect

```python
result.cache()          # keep for further analysis
result.show(20)         # preview
```

---

#### Non‑obvious insight

**Use a broadcast variable for complex patterns.**  
If you need to search with a regex or multiple words, broadcast the compiled pattern:

```python
import re
pattern = re.compile(r"ERROR|WARN")
broadcast_pat = spark.sparkContext.broadcast(pattern)

def match(line):
    return bool(broadcast_pat.value.search(line))

result = df.rdd.filter(lambda r: match(r['value'])).toDF()
```

Broadcasting the regex avoids recompiling it on every executor and keeps the filter in memory, giving a measurable speedup for large logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
