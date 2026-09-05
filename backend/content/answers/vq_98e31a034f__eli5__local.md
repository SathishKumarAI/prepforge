---
qid: vq_98e31a034f__eli5__local
question: Which Oracle Procedure Builder built-in package must you use to accomplish
  this task?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 356
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:20-05:00'
sources: []
---

When you want to write a stored procedure in Oracle, you don’t “build” it with a special toolbox; you simply type the **CREATE PROCEDURE** statement and let Oracle store it for you.  
If you need to *generate* or *modify* that code on the fly—say, from an application that builds procedures at runtime—you use Oracle’s **DBMS_SQL** package.  

**What is DBMS_SQL?**  
It’s a built‑in package that lets you send SQL and PL/SQL statements to the database as text strings, then execute them dynamically. Think of it like a remote control: you type a command into your phone, press “send,” and the TV (the database) executes whatever you told it.  

So, when the task is “build or change a procedure from code,” you hand that text to DBMS_SQL’s `EXECUTE_IMMEDIATE` routine (or its older `PARSE`/`DEFINE`/`EXECUTE` sequence), and Oracle does the heavy lifting for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
