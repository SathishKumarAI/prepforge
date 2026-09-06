---
qid: vq_d1de3f7e90__think__local
question: In a CLIENT/SERVER environment , which of the following would not be done
  at the client ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 411
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:26:04-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify what “client” means (end‑user machine or application).  
   - Assume a typical thin‑client model where heavy logic lives on the server.  
   - List the options that might be given (e.g., data validation, UI rendering, business rules, database access, authentication).  

**2️⃣ Mental framework – “Thin vs. Thick client”**  
   - Thin clients delegate most computation to the server; they mainly present UI and forward requests.  
   - Thick clients perform local processing: caching, complex calculations, offline work.  
   - Use this dichotomy to evaluate each option.

**3️⃣ Step‑by‑step reasoning**  
   a. Take each candidate action.  
   b. Ask: “Can the client do this without contacting the server?”  
   c. If yes → likely done at client; if no → server‑side.  
   d. For ambiguous cases, consider security (e.g., sensitive business logic should stay on server).

**4️⃣ Common traps to avoid**  
   - Assuming all UI code is “client” work—UI rendering is indeed client‑side but may rely on server data.  
   - Forgetting that authentication tokens are issued by the server yet used locally; the token issuance itself is server‑side.  
   - Overlooking that some clients perform local caching (which is client‑side) even if business logic remains server‑side.

**5️⃣ Sanity check & verbalize**  
   - Re‑list the options and label each as *Client* or *Server*.  
   - Confirm that exactly one option stands out as “not done at the client.”  
   - Communicate clearly: “In this scenario, the action that would **not** be performed by the client is …”  

Follow this pattern for any similar multiple‑choice question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
