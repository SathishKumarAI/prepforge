---
qid: vq_c062cefe64__eli5__local
question: Which of the following is not correct about the “TABLE” datatype ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 290
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:12-05:00'
sources: []
---

Imagine a big filing cabinet that has many drawers.  
Each drawer can hold one or more papers, and you decide which drawer a paper goes into by looking at its “label” (the key).  

In this cabinet:  
* You can put several papers in the same drawer if they share the same label.  
* The cabinet doesn’t keep the drawers lined up alphabetically – it just puts each paper where the label tells it to go.  
* If you ask for a paper, you give the label and the cabinet pulls out all papers from that drawer instantly.

So, the **TABLE** data type is like this filing cabinet: it stores items in buckets (drawers) based on keys, may contain duplicates in the same bucket, and it does *not* keep its contents sorted or ordered.  

If you hear someone say “a TABLE always keeps its elements in order,” that statement is not correct.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
