---
qid: vq_be61579414__eli5__local
question: How to check the file size in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 231
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:00-05:00'
sources: []
---

Imagine your data lives on a giant digital bookshelf called **Hadoop Distributed File System (HDFS)**.  
Each book is a *file*, and the shelves are spread across many computers so no single shelf gets overloaded.

To find out how big one of those books is, you ask the librarian for its size:

```
hdfs dfs -du /path/to/your/file
```

`-du` means “display usage.” Hadoop adds up all the little pages (bytes) that belong to that file and shows the total.  
If you want a quick glance at many books at once, use

```
hdfs dfs -ls /some/directory
```

The last column of each line is the size in bytes, just like seeing how heavy a book feels before picking it up.

So, just like checking a book’s weight on a shelf, Hadoop lets you see file sizes with simple shell commands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
