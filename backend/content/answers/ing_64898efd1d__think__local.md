---
qid: ing_64898efd1d__think__local
question: Where does the API key live, and how do you update a prompt after release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 439
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:40:09-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *API key*: where it’s stored in a client‑side or server‑side application?  
   - *Prompt update*: is this an on‑device prompt (e.g., embedded string) or a server‑driven one that can be changed via an endpoint?  
   Assume the key lives on the server to avoid exposure, and prompts are served from a database.

**2️⃣ Adopt a security + versioning mental model**  
   - Treat the API key like any secret: environment variable → secure vault (e.g., AWS Secrets Manager).  
   - Treat prompts as versioned resources; each release tags a prompt version, with an immutable “current” pointer.

**3️⃣ Step‑by‑step reasoning**  
   1. **Key storage**: load at runtime from env/vault; never hard‑code or ship in binaries.  
   2. **Prompt delivery**: expose an API that returns the latest prompt ID and text, pulling from DB.  
   3. **Update workflow**: CI pipeline updates DB entry → toggles “current” flag → new releases automatically fetch it.  

**4️⃣ Common traps to avoid**  
   - Storing keys in source control or client code.  
   - Updating prompts via manual file edits that require redeploying the whole app.  
   - Forgetting to invalidate cached prompts on clients.

**5️⃣ Sanity‑check & communicate**  
   - Verify key isn’t in logs or network traffic.  
   - Ensure prompt changes propagate by checking a staging environment before production.  
   - Explain: “The key lives only server‑side, fetched from a secure vault; prompts are stored in a database and served via an API, so you can roll out new wording without redeploying the app.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
