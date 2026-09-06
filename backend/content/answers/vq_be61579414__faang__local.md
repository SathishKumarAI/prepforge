---
qid: vq_be61579414__faang__local
question: How to check the file size in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 384
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:02-05:00'
sources: []
---

**1️⃣ Clarify**  
You want to know how large a HDFS file is from code or shell. Assume we’re working with a standard Hadoop cluster, using Java/Hadoop APIs or the `hdfs` CLI.

**2️⃣ Approach**  
* Shell:* use `hdfs dfs -du <path>` or `-dus` for human‑readable size.  
* Java API:* get `FileSystem.get(conf)` → `FileStatus status = fs.getFileStatus(new Path(path))`; then `status.getLen()` returns bytes.

**3️⃣ Depth**  
```java
Configuration conf = new Configuration();
FileSystem fs = FileSystem.get(conf);
Path p   = new Path("/user/data/file.txt");
long size = fs.getFileStatus(p).getLen();  // bytes
```
*Complexity:* O(1) RPC to namenode; constant time.  
*Trade‑off:* For very large directories, `-du` recurses and sums blocks; may be slow.

**4️⃣ Edge Cases**  
* Non‑existent path → FileNotFoundException.*  
* Directory instead of file → size is sum of children; use `-d` flag or check `isDirectory()` before calling `getLen()`.  
* Permissions denied → throws IOException; handle with proper error messaging.

**5️⃣ Optimize & Communicate**  
If you only need the block count, use `fs.getFileBlockLocations(status, 0, status.getLen())` to fetch block metadata without full stat. Explain that `-du -s` is best for quick CLI checks, while Java API gives programmatic control and error handling. This shows clear reasoning, correct technical detail, and awareness of edge conditions—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
