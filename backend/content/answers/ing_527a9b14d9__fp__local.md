---
qid: ing_527a9b14d9__fp__local
question: 'Explain: What an API Contract Defines — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 393
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:00:36-05:00'
sources: []
---

**Why an API contract matters**

At its core a system must *exchange* data with other systems.  
The fundamental problem: how do we guarantee that two independent software
components can talk without breaking each other as they evolve?  

An **API (Application Programming Interface)** is the *protocol* that solves this problem.  
It specifies:

| Element | Purpose |
|---------|---------|
| **Endpoint** | The address where requests land. |
| **Method/verb** | What operation to perform (`GET`, `POST`, …). |
| **Input schema** | Exact shape, types and constraints of data the caller must send. |
| **Output schema** | Shape, types and semantics of the response. |
| **Error contract** | How failures are signaled (codes, messages). |

This contract is not a suggestion; it is a *formal specification* that both sides can treat as immutable until versioned otherwise.

**Deep principle**

The contract enforces *information‑theoretic consistency*: each side knows exactly how many bits it must send and receive, what they mean, and when to terminate.  
If either side deviates—e.g., changes a field type or drops an error code—the other side’s decoder will misinterpret the stream, leading to subtle bugs that surface only under load.

**Non‑obvious insight**

Most people ignore **backward compatibility as a *resource* rather than a cost**.  
By designing an API contract that explicitly names fields and versions (e.g., `user_id` vs `id_v2`) you can evolve the service while keeping old clients alive, turning what would be a breaking change into a simple “add new optional field” operation. This preserves the *information capacity* of the channel for all users simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
