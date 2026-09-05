---
qid: vq_858e45ba7f__eli5__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 316
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:45-05:00'
sources: []
---

Think of a **package** like a toolbox that lives in your kitchen cabinet. Inside that toolbox you can keep tools (procedures, functions) and also *tools that are ready to use* – these are the cursors.  

A **cursor** is simply a pointer that walks through rows in a table, just as a tool pointer points at a specific place on a workbench. When you declare a cursor in the toolbox’s **specification** (the part of the package everyone can see), it becomes a “global” tool that any recipe (procedure) written anywhere in your kitchen can grab and use.

So yes – if the cursor is declared in the package spec, any procedure in any other package or standalone block can refer to it by name, open it with `OPEN my_cursor;`, fetch rows, and close it. If you only put the cursor inside a private section of the toolbox (the package body), only code inside that same toolbox can use it.

**Bottom line:** A cursor declared in a package spec is like a shared kitchen utensil: everyone in your kitchen (all procedures) can open it and use it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
