---
qid: vq_be81571c7b__eli5__local
question: If you run hive server, what are the available mechanism for connecting
  it from application?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 228
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:00-05:00'
sources: []
---

Imagine HiveServer2 as a coffee shop that serves data instead of espresso. To order a “cup” (run a query) you can use different “menus”:  

* **JDBC** – the classic paper menu for Java apps. Your program writes SQL like a customer, and JDBC talks to Hive over a network socket, just like a waiter taking your order.  
* **ODBC** – the universal menu that lets non‑Java programs (Excel, Python, R) sip data with the same language.  
* **Thrift API** – the phone line: you call Hive’s service directly in binary form. Many high‑level libraries (Hive JDBC, PyHive, ODBC drivers) are built on top of this.  

All these “menus” connect to the same back‑end engine that reads HDFS files and returns results, so pick whichever fits your application’s language or environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
