---
qid: vq_24db60ac88__eli5__local
question: List the different file permissions in hdfs files or directory levels?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 315
total_tokens: 476
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:53-05:00'
sources: []
---

Imagine your Hadoop Distributed File System (HDFS) as a giant library where every book (file) and shelf (directory) has a lock that decides who can open it, read its contents, or move it to another shelf.

**The three basic locks in HDFS are:**

| Lock | What it lets you do |
|------|---------------------|
| **Read (r)** | Open the book or view the list of books on a shelf. |
| **Write (w)** | Add a new book to the shelf, delete an existing one, or change its contents. |
| **Execute (x)** | Move through the shelves – you can walk into a folder and see what’s inside, but you don’t have to read every book. |

Just like a real library, each lock is assigned to three groups:

1. **Owner** – the user who created the file or directory.
2. **Group** – users that belong to the same team or project.
3. **Others** – everyone else.

So an HDFS permission string looks like `rwx r-x --x`, meaning:
- Owner can read, write, and enter.
- Group can read and enter but not modify.
- Others can only enter (execute) but cannot see inside.

These three locks on each of the three groups give you fine‑grained control over who can touch your data in HDFS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
