---
qid: ing_243abb4907__think__local
question: What is a Reverse Proxy? — Proxy vs Reverse Proxy (Explained with Examples)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 437
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:04:54-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume the reader knows what a *proxy* is (client → proxy → server).  
- The goal: explain *reverse* proxy, contrast it with forward proxy, and give concrete examples.

**2️⃣ Adopt a mental model**  
Use the “traffic‑routing” analogy.  
- **Forward proxy**: a middleman that routes *incoming* client traffic to the internet.  
- **Reverse proxy**: a middleman that sits *in front of* one or more backend servers and routes *outgoing* server responses back to clients.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to cover |
|------|---------------|
| a | Define forward proxy and its use cases (privacy, caching). |
| b | Flip the direction: reverse proxy receives client requests, decides which backend should handle it. |
| c | Highlight key benefits: load balancing, SSL termination, request/response manipulation, security isolation. |
| d | Provide concrete examples: Nginx as a reverse proxy for a Node.js app; AWS ELB forwarding to EC2 instances; Cloudflare acting as a reverse proxy fronting a website. |

**4️⃣ Avoid common pitfalls**  

- Don’t conflate *proxy* with *gateway*.  
- Don’t say “reverse proxy is just another proxy”; stress the directionality and typical use‑cases.  
- Beware of mixing up *forward* vs *reverse* in examples.

**5️⃣ Sanity‑check & verbalize**  

- Re‑read the explanation to ensure it reads like a conversation: “Think of it as a receptionist who takes calls (client requests) and directs them to the right employee (backend).”  
- Verify that each example clearly shows how the reverse proxy sits between client and backend, not the other way around.  

Follow this structure whenever you need to explain a technical concept with two contrasting roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
