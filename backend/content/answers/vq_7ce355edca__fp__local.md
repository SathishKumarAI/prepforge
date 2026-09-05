---
qid: vq_7ce355edca__fp__local
question: Which of the following is not an advantage of a client/server model ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 354
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:53-05:00'
sources: []
---

In a client/server architecture the **fundamental problem** it solves is *distribution of computation and data* so that many thin clients can share resources without each carrying the full workload.  
Because all heavy lifting happens on one (or a few) servers, we get  

| Desired property | How the model delivers it |
|------------------|--------------------------|
| **Centralised control** | One code base runs on the server; updates are instant for every client. |
| **Scalability of data** | The server holds the master copy; clients merely request slices, so storage grows with users, not with each device. |
| **Security enforcement** | All access checks happen in one place, reducing the attack surface. |

The thing that *doesn’t* automatically follow—and is often cited as a drawback—is **improved latency or performance**. Clients still have to round‑trip to the server for every request; if the network is congested or distant, response times worsen rather than improve.  

Thus, among typical “advantages” listed (centralised management, scalability, security, etc.), the statement that the client/server model *reduces latency* is **not** an advantage. It is a non‑obvious pitfall: the very abstraction that simplifies deployment can become the bottleneck when bandwidth or distance is limiting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
