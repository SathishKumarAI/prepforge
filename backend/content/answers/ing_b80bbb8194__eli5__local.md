---
qid: ing_b80bbb8194__eli5__local
question: 'Explain: Step 1: Notification Request Creation — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 221
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:06-05:00'
sources: []
---

**Step 1: Notification Request Creation – Designing the “Message‑Factory”**

Imagine you’re running a post office that sends birthday cards to people all over town. The first thing you do is set up a *card‑request form* where anyone can tell you whose card they want, what message it should say, and when it must arrive. In machine learning terms, this “form” is the **Notification Service**.  

- **Request**: A user (or another part of your system) sends a small packet that says, “Send me a notification about X at time Y.”  
- **Service**: The service receives this packet, checks it for missing pieces (like a missing address), and stores the request in a waiting list.  

Just as the post office keeps a ledger of all pending cards, the Notification Service keeps a log of every notification that needs to be sent later. This is the foundation before any learning or routing happens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
